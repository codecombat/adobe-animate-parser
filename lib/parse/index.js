import MovieClip from '../cjs/MovieClip';
import Shape from '../cjs/Shape';

function markParsed (target, targetCache = {}) {
    target._cocoId = randomString(15)
    targetCache[target._cocoId] = target
}

function haveParsed (target, targetCache) {
    return (typeof target._cocoId !== 'undefined')
}

function getId (target) {
    return target._cocoId
}

function randomString(length) {
    var result = ''
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length

    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result
}

export function parseRectangle (rectangle, targetCache = {}) {
    if (!rectangle) {
        return undefined
    }

    return rectangle.cocoSchema.rectangleConfig
}

export function parseShape (shape, targetCache = {}) {
    if (haveParsed(shape, targetCache)) {
        return targetCache[getId(shape)]
    }

    markParsed(shape)

    console.log("shape", shape)
    return {
        type: 'shape',
        id: getId(shape)
    }
}

export function parseMovieClip (movieClip, targetCache = {}) {
    if (haveParsed(movieClip, targetCache)) {
        return targetCache[getId(movieClip)]
    }

    markParsed(movieClip)

    const {
        frameBounds,
        nominalBounds
    } = movieClip

  
    const { tweens } = movieClip.timeline

    let parsedFrameBounds
    if (frameBounds) {
        parsedFrameBounds = frameBounds.map(fb => parseRectangle(fb))
    }

    return {
        type: 'movie_clip',
        id: getId(movieClip),

        bounds: parseRectangle(nominalBounds),
        frameBounds: parsedFrameBounds,

        tweens: tweens.map(t => parseTween(t))
    }
}

export function parseTween (tween, targetCache = {}) {
    if (haveParsed(tween, targetCache)) {
        return targetCache[getId(tween)]
    }

    markParsed(tween)

    const { target } = tween

    let parsedTarget
    if (target instanceof MovieClip) {
        parsedTarget = parseMovieClip(target)
    } else if (target instanceof Shape) {
        parsedTarget = parseShape(target)
    } else {
        throw new Error('Invalid tween target')
    }

    return {
        type: 'tween',
        id: getId(tween),

        target: parsedTarget,
        tweenCalls: tween.cocoSchema.methodCalls
    }
}