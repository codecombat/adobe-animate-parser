import cjs from './lib/cjs'
import Animate from './lib/animation'

import lineTween from './fixtures/line-tween/line-tween_HTML5'
import ninjaWalk from './fixtures/ninjawalk/NinjaWalk_animate'
import stateTween from './fixtures/state_tween/stateTween'

import { parseMovieClip, targetCache, schema } from './lib/parse'
import translate from './lib/translate'

const animate = new Animate()
stateTween(cjs, animate)

const lib = animate.cocoGetComposition().getLibrary()
const dataTree = new lib['linetween_HTML5']()

let parsedMovieClip = parseMovieClip(dataTree)

// For now assume top level is a movie clip and the top level has
// a self referencing tween that we do not support.
// We assume this self referencing tween is always the first tween.
parsedMovieClip.tweens = parsedMovieClip.tweens.filter((tween) => {
    // TODO remove direct _cocoId reference here
    return parsedMovieClip._cocoId !== tween.target.reference
})

const outputSchema = translate(schema)
console.log(JSON.stringify(outputSchema))

