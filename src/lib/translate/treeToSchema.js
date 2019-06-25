import AnimateNode from '../parse/AnimateNode'

let blockNameCounter = {}

function getBlockNameVar (targetId, blockNameMappings) {
    blockNameCounter[targetId] = blockNameCounter[targetId] || 0

    const blockName = `bn_${targetId}_${blockNameCounter[targetId]++}`
    blockNameMappings[targetId] = blockName

    return blockName
}

function translateBounds (boundsData) {
    if (Array.isArray(boundsData)) {
        return boundsData.map((bounds) => translateBounds(bounds))
    }

    if (boundsData instanceof AnimateNode) {
        const resolvedBoundsData = boundsData.node

        return resolvedBoundsData.data
    }

    return boundsData
}

function dereferenceNativeObject (nativeObject, movieClipRefs = [], shapeRefs = [], containerRefs = [], blockNameMappings) {
    const resolvedNativeObject = nativeObject.node

    const outputObject = (Array.isArray(resolvedNativeObject.data.object)) ? [] : {}

    for (const [ key, value ] of Object.entries(resolvedNativeObject.data.object)) {
        let dereferencedValue = value

        if (value instanceof AnimateNode) {
            let resolvedValue = value.node

            // If this is an object we have a complex type that we need to unwind
            if (resolvedValue.type === 'movie_clip') {
                movieClipRefs.push({
                    bn: getBlockNameVar(resolvedValue.id, blockNameMappings),
                    gn: resolvedValue.id,
                    a: resolvedValue.data.constructorArgs,
                    t: resolvedValue.data.transform
                })

                // Replace with the ID, it will be properly handled when rebuilt
                dereferencedValue = blockNameMappings[resolvedValue._cocoId] // TODO can we pull this out in a better way
            } else if (resolvedValue.type === 'container') {
                shapeRefs.push({
                    bn: getBlockNameVar(resolvedValue.id, blockNameMappings),
                    gn: resolvedValue.id
                })

                // Replace with the ID, it will be properly handled when rebuilt
                dereferencedValue = blockNameMappings[resolvedValue.id] // TODO can we pull this out in a better way
            } else if (resolvedValue.type === 'shape') {
                containerRefs.push({
                    bn: getBlockNameVar(resolvedValue.id, blockNameMappings),
                    gn: resolvedValue.id
                })

                // Replace with the ID, it will be properly handled when rebuilt
                dereferencedValue = blockNameMappings[resolvedValue.id] // TODO can we pull this out in a better way
            } else if (value.type === 'native_object') {
                dereferencedValue = dereferenceNativeObject(resolvedValue, movieClipRefs, shapeRefs, containerRefs, blockNameMappings)
            } else {
                throw new Error('Invalid target type')
            }
        }

        outputObject[key] = dereferencedValue
    }

    return outputObject
}

export default function (schema) {
    const finalShapes = {}
    for (const shape of schema.shapes) {
        const resolvedShape = shape.node

        const translatedShape = {
            ...(resolvedShape.data.graphics || {})
        }

        if (resolvedShape.data.transform) {
            translatedShape.t = [
                resolvedShape.data.transform.x,
                resolvedShape.data.transform.y
            ]
        }

        if (resolvedShape.data.bounds) {
           translatedShape.bounds = translateBounds(resolvedShape.data.bounds)
        }

        if (resolvedShape.data.frameBounds) {
            translatedShape.frameBounds = translateBounds(resolvedShape.data.frameBounds)
        }

        finalShapes[resolvedShape.id] = translatedShape
    }

    const finalContainers = {}
    for (const container of schema.containers) {
        const resolvedContainer = container.node

        const shapes = []

        for (const child of resolvedContainer.data.children) {
            const resolvedChild = child.node
            if (resolvedChild.type !== 'shape') {
                throw new Error('Containers only support shapes')
            }

            const shape = {
                gn: resolvedChild.id,
            }

            if (resolvedChild.data.transform) {
                shape.t = resolvedChild.data.transform
            }

            shapes.push(shape)
        }

        const translatedContainer = {
            c: shapes,
        }

        if (resolvedContainer.data.bounds) {
            const resolvedBounds = resolvedContainer.data.bounds.node
            translatedContainer.b = resolvedBounds.data
        }

        finalContainers[resolvedContainer.id] = translatedContainer
    }

    const finalAnimations = {}
    for (const animation of schema.animations) {
        const resolvedAnimation = animation.node

        const containers = []
        const shapes = []
        const animations = []
        const tweens = []

        const blockNameMappings = {}

        for (const tween of resolvedAnimation.data.tweens) {
            const finalTween = []

            const resolvedTween = tween.node
            const resolvedTarget = resolvedTween.data.target.node

            switch (resolvedTarget.type) {
                case 'movie_clip':
                    animations.push({
                        bn: getBlockNameVar(resolvedTarget.id, blockNameMappings),
                        gn: resolvedTarget.id,
                        a: resolvedTarget.data.constructorArgs,
                        t: resolvedTarget.data.transform
                    })

                    finalTween.push({
                        n: 'get',
                        a: [ blockNameMappings[resolvedTarget.id] ]
                    })

                    break

                case 'container':
                    containers.push({
                        bn: getBlockNameVar(resolvedTarget.id, blockNameMappings),
                        gn: resolvedTarget.id
                    })

                    finalTween.push({
                        n: 'get',
                        a: [ blockNameMappings[resolvedTarget.id] ]
                    })

                    break

                case 'shape':
                    shapes.push({
                        bn: getBlockNameVar(resolvedTarget.id, blockNameMappings),
                        gn: resolvedTarget.id
                    })

                    finalTween.push({
                        n: 'get',
                        a: [ blockNameMappings[resolvedTarget.id] ]
                    })

                    break

                case 'native_object':
                    finalTween.push({
                        n: 'get',
                        a: [ resolvedTarget.data.object ]
                    })

                    break

                default:
                    throw new Error('Invalid target type')

            }

            const dereferencedTweenCalls = dereferenceNativeObject(
              resolvedTween.data.tweenCalls, animations, shapes, containers, blockNameMappings
            )

            for (const methodCall of dereferencedTweenCalls) {
                finalTween.push({
                    n: methodCall.name,
                    a: methodCall.args
                })
            }

            tweens.push(finalTween)
        }

        const translatedAnimation = {
            animations,
            shapes,
            tweens,
            containers: [],
            graphics: [],
            bounds: resolvedAnimation.bounds,
            frameBounds: resolvedAnimation.frameBounds
        }

        if (resolvedAnimation.data.bounds) {
            translatedAnimation.bounds = translateBounds(resolvedAnimation.data.bounds)
        }

        if (resolvedAnimation.data.frameBounds) {
            translatedAnimation.frameBounds = translateBounds(resolvedAnimation.data.frameBounds)
        }

        finalAnimations[resolvedAnimation.id] = translatedAnimation
    }

    const result = {
        shapes: finalShapes,
        animations: finalAnimations,
        containers: finalContainers
    }

    // TODO fix code to not insert undefineds
    // Remove undefineds
    return JSON.parse(JSON.stringify(result))
}
