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
            switch (tween.target.type) {
                case 'movie_clip':
                    animations.push({
                        bn: tween.target._cocoId,
                        gn: tween.target._cocoId
                    })

                    break


                case 'shape':
                    shapes.push({
                        bn: tween.target._cocoId,
                        gn: tween.target._cocoId
                    })
                    break

                default:
                    throw new Error('Invalid target type')

            }

            const finalTween = [
                {
                    n: 'get',
                    a: [ tween.target._cocoId ]
                }
            ]

            for (const methodCall of tween.tweenCalls) {
                finalTween.push({
                    n: methodCall.name,
                    a: [ methodCall.args ]
                })
            }

            tweens.push(finalTween)
        }

        finalAnimations[animation._cocoId] = {
            animations,
            shapes,
            tweens
        }
    }

    return {
        shapes: finalShapes,
        animations: finalAnimations
    }
}