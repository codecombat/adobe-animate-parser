import AnimateNode from '../parse/AnimateNode'

let blockNameCounter = {}

function getBlockNameVar (targetId) {
    blockNameCounter[targetId] = blockNameCounter[targetId] || 0

    return `bn_${targetId}_${blockNameCounter[targetId]++}`
}

function generateMovieClipBlockReference (movieClip) {
    const blockName = getBlockNameVar(movieClip.id)

    return {
        bn: blockName,
        gn: movieClip.id,
        a: movieClip.data.constructorArgs,
        t: movieClip.data.transform
    }
}

function generateShapeBlockReference (shape) {
    const blockName = getBlockNameVar(shape.id)

    return {
        bn: blockName,
        gn: shape.id
    }
}

function generateContainerBlockReference (container) {
    const blockName = getBlockNameVar(container.id)

    return {
        bn: blockName,
        gn: container.id,
        t: container.data.transform,
        o: (container.data.off === true)
    }
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

function dereferenceNativeObject (nativeObject, movieClipRefs = [], shapeRefs = [], containerRefs = []) {
    const resolvedNativeObject = nativeObject.node

    const outputObject = (Array.isArray(resolvedNativeObject.data.object)) ? [] : {}

    for (const [ key, value ] of Object.entries(resolvedNativeObject.data.object)) {
        let dereferencedValue = value

        if (value instanceof AnimateNode) {
            let resolvedValue = value.node

            // If this is an object we have a complex type that we need to unwind
            if (resolvedValue.type === 'movie_clip') {
                const movieClipRef = generateMovieClipBlockReference(resolvedValue)
                movieClipRefs.push(movieClipRef)

                // Replace with the ID, it will be properly handled when rebuilt
                dereferencedValue = movieClipRef.bn
            } else if (resolvedValue.type === 'container') {
                const containerRef = generateContainerBlockReference(resolvedValue)
                containerRefs.push(containerRef)

                // Replace with the ID, it will be properly handled when rebuilt
                dereferencedValue = containerRef.bn
            } else if (resolvedValue.type === 'shape') {
                const shapeRef = generateShapeBlockReference(resolvedValue)
                shapeRefs.push(shapeRef)

                // Replace with the ID, it will be properly handled when rebuilt
                dereferencedValue = shapeRef.bn
            } else if (value.type === 'native_object') {
                dereferencedValue = dereferenceNativeObject(resolvedValue, movieClipRefs, shapeRefs, containerRefs)
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
            translatedShape.t = resolvedShape.data.transform
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

        const children = []

        for (const child of resolvedContainer.data.children) {
            const resolvedChild = child.node

            let childEntry
            if (resolvedChild.type === 'shape') {
                childEntry = resolvedChild.id
            } else if (resolvedChild.type === 'container') {
                childEntry = {
                    gn: resolvedChild.id,
                }

                if (resolvedChild.data.transform) {
                    childEntry.t = resolvedChild.data.transform
                }
            } else {
                throw new Error('Containers only support shapes and child containers')
            }

            children.push(childEntry)
        }

        const translatedContainer = {
            c: children,
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

        for (const tween of resolvedAnimation.data.tweens) {
            const finalTween = []

            const resolvedTween = tween.node
            const resolvedTarget = resolvedTween.data.target.node

            switch (resolvedTarget.type) {
                case 'movie_clip':
                    const movieClipRef = generateMovieClipBlockReference(resolvedTarget)
                    animations.push(movieClipRef)

                    finalTween.push({
                        n: 'get',
                        a: [ movieClipRef.bn ]
                    })

                    break

                case 'container':
                    const containerRef = generateContainerBlockReference(resolvedTarget)
                    containers.push(containerRef)

                    finalTween.push({
                        n: 'get',
                        a: [ containerRef.bn ]
                    })

                    break

                case 'shape':
                    const shapeRef = generateShapeBlockReference(resolvedTarget)

                    shapes.push(shapeRef)

                    finalTween.push({
                        n: 'get',
                        a: [ shapeRef.bn ]
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
              resolvedTween.data.tweenCalls, animations, shapes, containers
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
            containers,
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
