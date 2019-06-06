import { clone } from 'lodash'

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

    applyId(target, `${parseInt(Math.random() * 100000, 10)}`)
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

    // TODO this type logic should be consolidated with the logic below
    let type = entityOrReference.type
    if(!entityOrReference.type) {
        if (entityOrReference instanceof MovieClip) {
            type = 'movie_clip'
        } else if (entityOrReference instanceof Shape) {
            type = 'shape'
        } else {
            throw new Error('Invalid tween target')
        }
    }

    const reference = {
        type,

        // TODO reference should NOT contain original
        original: entityOrReference,

        reference: getId(entityOrReference)
    }

    markParsed(reference)

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
        graphics: (shape.graphics || {}).cocoSchema
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

        // TODO probably use object spread operator for these
        constructorArgs: movieClip.cocoSchema.constructorArgs,
        transform: movieClip.cocoSchema.transform,

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
    } else if (target.constructor === Object) {
        // If tween target is a plain object make sure to handle it in code
        parsedTarget = parseNativeJsObject(target)
    } else {
        throw new Error('Invalid tween target')
    }

    const result = applyId({
        type: 'tween',

        target: getReference(parsedTarget),
        tweenCalls: parseNativeJsObject(tween.cocoSchema.methodCalls)
    }, getId(tween))

    return result
}

// This function only supports simple JSON objects but does not explictly check for them
export function parseNativeJsObject (object) {
    if (haveParsed(object)) {
        return getReference(object)
    }

    // We shallow clone so we can capture the object without the parsing metadata.  We
    // may need to deep clone at some point.
    const shallowClone = clone(object)
    markParsed(object)

    const parsedObject = (Array.isArray(shallowClone)) ? [] : {}
    for (const [ key, value] of Object.entries(shallowClone)) {
        let parsedTarget = value

        if (typeof value === 'object') {
            if (value instanceof MovieClip) {
                parsedTarget = parseMovieClip(value)
            } else if (value instanceof Shape) {
                parsedTarget = parseShape(value)
            } else if (value.constructor === Object || Array.isArray(value)) {
                parsedTarget = parseNativeJsObject(value)
            } else {
                throw new Error('Unexpected value type')
            }
        }

        parsedObject[key] = parsedTarget
    }

    const result = applyId({
        type: 'native_object',
        object: parsedObject
    }, getId(object))

    return result
}
