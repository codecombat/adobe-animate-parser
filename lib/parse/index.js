import MovieClip from '../cjs/MovieClip';
import Shape from '../cjs/Shape';

export const targetCache = {}
export const schema = {
    shapes: [],
    animations: []
}

function markParsed (target) {
    if (haveParsed(target)) {
        return
    }

    applyId(target, randomString(15))
    console.log('mark output', JSON.stringify(target._cocoId))
    targetCache[target._cocoId] = target
}

function haveParsed (target) {
    return (typeof getId(target) !== 'undefined')
}

function getId (target) {
    return target._cocoId
}

function applyId (target, id) {
    target._cocoId = id
    return target
}

function getReference (entityOrReference) {
    if (entityOrReference.reference) {
        return entityOrReference
    }

    const reference = {
        reference: getId(entityOrReference)
    }

    markParsed(reference)

    console.log('input')
    console.log(JSON.stringify(entityOrReference._cocoId))
    console.log('output')
    console.log(JSON.stringify(reference))

    return reference
}

function resolveEntity (entityOrReference) {
    if (entityOrReference.reference) {
        return targetCache[entityOrReference.reference]
    }

    return entityOrReference
}

function randomString(length) {
    var result = ''
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
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
        return getReference(shape)
    }

    markParsed(shape)

    const {
        frameBounds,
        nominalBounds
    } = shape

    const result = applyId({
        type: 'shape',

        frameBounds,
        bounds: nominalBounds,

        transform: shape.cocoSchema.transform,
        graphics: (shape.cocoSchema.graphics || {}).cocoSchema
    }, getId(shape))

    schema.shapes.push(result)
    return result
}

export function parseMovieClip (movieClip) {
    if (haveParsed(movieClip)) {
        return getReference(movieClip)
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

    const result = applyId({
        type: 'movie_clip',

        bounds: parseRectangle(nominalBounds),
        frameBounds: parsedFrameBounds,

        tweens: tweens.map(t => parseTween(t))
    }, getId(movieClip))

    schema.animations.push(result)
    return result
}

export function parseTween (tween) {
    if (haveParsed(tween)) {
        return getReference(tween)
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

    const result = applyId({
        type: 'tween',

        target: getReference(parsedTarget),
        tweenCalls: tween.cocoSchema.methodCalls
    }, getId(tween))
    
    return result
}