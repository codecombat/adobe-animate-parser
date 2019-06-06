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

            switch (tween.target.type) {
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

            for (const methodCall of tween.tweenCalls) {
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
