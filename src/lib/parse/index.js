import { clone } from 'lodash'
import objectHash from 'object-hash'

import MovieClip from '../cjs/MovieClip';
import Shadow from '../cjs/Shadow';
import Shape from '../cjs/Shape';
import Tween from '../cjs/Tween';


export const targetCache = {
    parsed: {},
    original: {}
}
export const schema = {
    shapes: [],
    animations: [],
    references: [],
    nativeObjects: []
}

let count = 0
function markParsed (target) {
    if (haveParsed(target)) {
        return
    }

    // applyId(target, `${parseInt(Math.random() * 100000, 10)}`)
    applyId(target, `temp_${count++}`)
    targetCache.original[target._cocoId] = target
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

function finalizeId (parsedObject) {
    const {
        _cocoId,
        ...objectWithoutId
    } = parsedObject

    const finalId = objectHash(objectWithoutId)

    applyId(parsedObject, finalId)
    targetCache.original[finalId] = parsedObject
    delete targetCache.original[_cocoId]

    // TODO potentially inefficient
    schema.references.forEach((reference) => {
        if (reference.reference === _cocoId) {
            reference.reference = finalId
        }
    })

    targetCache.parsed[finalId] = targetCache.parsed[_cocoId]
    delete targetCache.parsed[_cocoId]
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
        } else if (entityOrReference instanceof Shadow) {
            type = 'shadow'
        } else if (entityOrReference instanceof Tween) {
            type = 'tween'
        } else {
            throw new Error('Invalid tween target')
        }
    }

    const reference = {
        type,

        // TODO reference should NOT contain original
        original: entityOrReference,
        originalParsed: targetCache.parsed[getId(entityOrReference)],

        reference: getId(entityOrReference)
    }

    markParsed(reference)

    schema.references.push(reference)
    return reference
}

export function resolveEntity (entityOrReference) {
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

    finalizeId(result)
    schema.shapes.push(result)
    targetCache.parsed[getId(result)] = result

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

    finalizeId(result)
    schema.animations.push(result)
    targetCache.parsed[getId(result)] = result

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

    finalizeId(result)
    targetCache.parsed[getId(result)] = result

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
            // TODO can we find a way to make this dyanmic so we dont have to remember to add support for each new cjs object we add
            // TODO or is there a single place we can add this kind of code
            if (value instanceof MovieClip) {
                parsedTarget = parseMovieClip(value)
            } else if (value instanceof Shape) {
                parsedTarget = parseShape(value)
            } else if (value instanceof Tween) {
                parsedTarget = parseTween(value)
            } else if (value instanceof Tween) {
                // TODO throwing to be safe here - we have not tested tween support in native JS objects
                throw new Error('Do no support tween here')
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

    finalizeId(result)
    targetCache.parsed[getId(result)] = result

    return result
}
