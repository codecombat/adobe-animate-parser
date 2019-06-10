import fs from 'fs'

import createjs from './lib/cjs'

// import lineTween from './fixtures/line-tween/line-tween_HTML5'
// import ninjaWalk from './fixtures/ninjawalk/NinjaWalk_animate'
// import stateTween from './fixtures/state_tween/stateTween'

import { parseMovieClip, targetCache, schema } from './lib/parse'
import translate from './lib/translate'

const cjs = createjs
let animate
let library = {}

const importedFile = fs.readFileSync('fixtures/robot_ball/Robo_Bomb_Death.js')
const execution = `
    createjs = cjs;
   
    try {
        lib = library;
    } catch (e) {} // If lib is defined overwrite it

    ${importedFile};
    
    animate = AdobeAn;
`

eval(execution)

// If animate compositions is present, extract library from it, otherwise assume script will set it
if (animate.compositions) {
    const animateCompositions = animate.compositions
    const compositionKeys = Object.keys(animateCompositions)

    if (compositionKeys.length !== 1) {
        throw new Error('Unexpected number of compositions')
    }

    library = animateCompositions[compositionKeys[0]].getLibrary()
}

if (Object.keys(library).length === 0) {
    throw new Error('Nothing in library')
}

const keyCounts = {}
const movieClips = {}

for (const [ key, value ] of Object.entries(library)) {
    if (value.prototype instanceof cjs.MovieClip) {
        const usageTrackingFn = function (...args) {
            this.cocoSchema.constructorArgs = args

            keyCounts[key] = keyCounts[key] || 0
            keyCounts[key] += 1

            return value.call(this, ...args)
        }

        usageTrackingFn.prototype = value.prototype

        library[key] = usageTrackingFn
        movieClips[key] = usageTrackingFn
    }
}

for (const [ key , value ] of Object.entries(movieClips)) {
    movieClips[key] = new value()
}

let minKey
let minCount = Infinity

for (const [ key , value ] of Object.entries(keyCounts)) {
    if (value < minCount) {
        minCount = value
        minKey = key
    }
}

// TODO handle case where there is no clear minimum

let parsedMovieClip = parseMovieClip(movieClips[minKey])

// For now assume top level is a movie clip and the top level has
// a self referencing tween that we do not support.
// We assume this self referencing tween is always the first tween.
parsedMovieClip.tweens = parsedMovieClip.tweens.filter((tween) => {
    // TODO remove direct _cocoId reference here
    return parsedMovieClip._cocoId !== tween.target.reference
})

// Manually override the entrypoint ID for output
parsedMovieClip._cocoId = minKey

const outputSchema = translate(schema)
console.log(JSON.stringify(outputSchema))

