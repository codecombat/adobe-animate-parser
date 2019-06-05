import MovieClip from '../cjs/MovieClip';
import Shape from '../cjs/Shape';

export const targetCache = {}
export const schema = {
    shapes: [],
    animations: []
}

function markParsed (target) {
    target._cocoId = randomString(15)
    targetCache[target._cocoId] = target
}

function haveParsed (target) {
    return (typeof target._cocoId !== 'undefined')
}

function getId (target) {
    return target._cocoId
}

function resolveEntity (entityOrReference) {
    if (entityOrReference.reference) {
        return targetCache[entityOrReference.reference]
    }


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

export function parseRectangle (rectangle) {
    if (!rectangle) {
        return undefined
    }

    return rectangle.cocoSchema.rectangleConfig
}

export function parseShape (shape) {
    if (haveParsed(shape)) {
        return { reference: getId(shape) }
    }

    markParsed(shape)

    const result = {
        type: 'shape',
        id: getId(shape),

        transform: shape.cocoSchema.transform,
        graphics: (shape.cocoSchema.graphics || {}).cocoSchema
    }

    schema.shapes.push(result)
    return result
}

export function parseMovieClip (movieClip) {
    if (haveParsed(movieClip)) {
        return { reference: getId(movieClip) }
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

    const result = {
        type: 'movie_clip',
        id: getId(movieClip),

        bounds: parseRectangle(nominalBounds),
        frameBounds: parsedFrameBounds,

        tweens: tweens.map(t => parseTween(t))
    }

    schema.animations.push(result)
    return result
}

export function parseTween (tween) {
    if (haveParsed(tween)) {
        return { reference: getId(tween) }
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

    const result = {
        type: 'tween',
        id: getId(tween),

        target: parsedTarget,
        tweenCalls: tween.cocoSchema.methodCalls
    }
    
    return result
}