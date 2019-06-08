function dereferenceNativeObject (nativeObject, movieClipRefs = [], shapeRefs = []) {
    const outputObject = (Array.isArray(nativeObject.object)) ? [] : {}

    for (const [ key, value ] of Object.entries(nativeObject.object)) {
        let dereferencedValue = value
        if (typeof value === 'object') {
            let resolvedValue = value

            // TODO this should be done elsewhere
            if (value.reference) {
                resolvedValue = value.original
            }

            // If this is an object we have a complex type that we need to unwind
            if (resolvedValue.type === 'movie_clip') {
                movieClipRefs.push({
                    bn: resolvedValue._cocoId,
                    gn: resolvedValue._cocoId,
                    a: resolvedValue.constructorArgs,
                    t: resolvedValue.transform
                })

                // Replace with the ID, it will be properly handled when rebuilt
                dereferencedValue = resolvedValue._cocoId // TODO can we pull this out in a better way
            } else if (resolvedValue.type === 'shape') {
                shapeRefs.push({
                    bn: resolvedValue._cocoId,
                    gn: resolvedValue._cocoId,
                })

                // Replace with the ID, it will be properly handled when rebuilt
                dereferencedValue = resolvedValue._cocoId // TODO can we pull this out in a better way
            } else if (value.type === 'native_object') {
                dereferencedValue = dereferenceNativeObject(resolvedValue, movieClipRefs, shapeRefs)
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
        let transform
        if (shape.transform) {
            transform = [
                shape.transform.x,
                shape.transform.y
            ]
        }

        finalShapes[shape._cocoId] = {
            t: transform,
            ...(shape.graphics || {})
        }
    }

    const finalAnimations = {}
    for (const animation of schema.animations) {
        const shapes = []
        const animations = []
        const tweens = []

        for (const tween of animation.tweens) {
            const finalTween = []

            // TODO this should be generalized to a resolve method
            let resolvedTween = tween
            if (resolvedTween.reference) {
                resolvedTween = resolvedTween.originalParsed
            }

            switch (resolvedTween.target.type) {
                case 'movie_clip':
                    animations.push({
                        bn: tween.target.reference,
                        gn: tween.target.reference,
                        a: tween.target.original.constructorArgs,
                        t: tween.target.original.transform
                    })

                    finalTween.push({
                        n: 'get',
                        a: [ tween.target.reference ]
                    })

                    break


                case 'shape':
                    shapes.push({
                        bn: tween.target.reference,
                        gn: tween.target.reference
                    })

                    finalTween.push({
                        n: 'get',
                        a: [ tween.target.reference ]
                    })

                    break

                case 'native_object':
                    finalTween.push({
                        n: 'get',
                        a: [ tween.target.original.object ]
                    })

                    break

                default:
                    throw new Error('Invalid target type')

            }

            const dereferencedTweenCalls = dereferenceNativeObject(tween.tweenCalls, animations, shapes)
            for (const methodCall of dereferencedTweenCalls) {
                finalTween.push({
                    n: methodCall.name,
                    a: methodCall.args
                })
            }

            tweens.push(finalTween)
        }

        finalAnimations[animation._cocoId] = {
            animations,
            shapes,
            tweens,
            containers: [],
            graphics: []
        }
    }

    return {
        shapes: finalShapes,
        animations: finalAnimations
    }
}
