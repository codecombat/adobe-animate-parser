import cjs from './lib/cjs'
import Animate from './lib/animation'

import lineTween from './fixtures/line-tween/line-tween_HTML5'

import { parseMovieClip } from './lib/parse'

const animate = new Animate()
lineTween(cjs, animate)

const lib = animate.cocoGetComposition().getLibrary()
const dataTree = new lib['linetween_HTML5']()


let parsedTree = parseMovieClip(dataTree)
console.log(parsedTree)