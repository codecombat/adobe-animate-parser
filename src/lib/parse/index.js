import { clone } from 'lodash'
import objectHash from 'object-hash'

import MovieClip from '../cjs/MovieClip';
import Shadow from '../cjs/Shadow';
import Shape from '../cjs/Shape';
import Tween from '../cjs/Tween';

function randomString(length) {
    var result = ''
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
    var charactersLength = characters.length

    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength))
    }

    return result
}

export default class AnimateParser {
    constructor () {
        this.targetCache = {
            parsed: {},
            original: {}
        }

        this.schema = {
            shapes: [],
            animations: [],
            references: [],
            nativeObjects: []
        }

        this.idCounter = 0
    }

    markParsed (target) {
        if (this.haveParsed(target)) {
            return
        }

        this.applyId(target, `temp_${this.idCounter++}`)
        this.targetCache.original[target._cocoId] = target
    }

    haveParsed (target) {
        return (typeof this.getId(target) !== 'undefined')
    }

    getId (target) {
        return target._cocoId
    }

    applyId (target, id) {
        target._cocoId = id
        return target
    }

    finalizeId (parsedObject) {
        const {
            _cocoId,
            ...objectWithoutId
        } = parsedObject

        const finalId = objectHash(objectWithoutId)

        this.applyId(parsedObject, finalId)
        this.targetCache.original[finalId] = parsedObject
        delete this.targetCache.original[_cocoId]

        // TODO potentially inefficient
        this.schema.references.forEach((reference) => {
            if (reference.reference === _cocoId) {
                reference.reference = finalId
            }
        })

        this.targetCache.parsed[finalId] = this.targetCache.parsed[_cocoId]
        delete this.targetCache.parsed[_cocoId]
    }

    getReference (entityOrReference) {
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
            originalParsed: this.targetCache.parsed[this.getId(entityOrReference)],

            reference: this.getId(entityOrReference)
        }

        this.markParsed(reference)

        this.schema.references.push(reference)
        return reference
    }

    resolveEntity (entityOrReference) {
        if (entityOrReference.reference) {
            return this.targetCache[entityOrReference.reference]
        }

        return entityOrReference
    }

    parseRectangle (rectangle) {
        if (!rectangle) {
            return undefined
        }

        return rectangle.cocoSchema.rectangleConfig
    }

    parseShape (shape) {
        if (this.haveParsed(shape)) {
            return this.getReference(shape)
        }

        this.markParsed(shape)

        const {
            frameBounds,
            nominalBounds
        } = shape

        const result = this.applyId({
            type: 'shape',

            frameBounds,
            bounds: nominalBounds,

            transform: shape.cocoSchema.transform,
            graphics: (shape.graphics || {}).cocoSchema
        }, this.getId(shape))

        this.finalizeId(result)
        this.schema.shapes.push(result)
        this.targetCache.parsed[this.getId(result)] = result

        return result
    }

    parseMovieClip (movieClip) {
        if (this.haveParsed(movieClip)) {
            return this.getReference(movieClip)
        }

        this.markParsed(movieClip)

        const {
            frameBounds,
            nominalBounds
        } = movieClip


        const { tweens } = movieClip.timeline

        let parsedFrameBounds
        if (frameBounds) {
            parsedFrameBounds = frameBounds.map(fb => this.parseRectangle(fb))
        }

        const result = this.applyId({
            type: 'movie_clip',

            // TODO probably use object spread operator for these
            constructorArgs: movieClip.cocoSchema.constructorArgs,
            transform: movieClip.cocoSchema.transform,

            bounds: this.parseRectangle(nominalBounds),
            frameBounds: parsedFrameBounds,

            tweens: tweens.map(t => this.parseTween(t))
        }, this.getId(movieClip))

        this.finalizeId(result)
        this.schema.animations.push(result)
        this.targetCache.parsed[this.getId(result)] = result

        return result
    }

    parseTween (tween) {
        if (this.haveParsed(tween)) {
            return this.getReference(tween)
        }

        this.markParsed(tween)

        const { target } = tween

        let parsedTarget
        if (target instanceof MovieClip) {
            parsedTarget = this.parseMovieClip(target)
        } else if (target instanceof Shape) {
            parsedTarget = this.parseShape(target)
        } else if (target.constructor === Object) {
            // If tween target is a plain object make sure to handle it in code
            parsedTarget = this.parseNativeJsObject(target)
        } else {
            throw new Error('Invalid tween target')
        }

        const result = this.applyId({
            type: 'tween',

            target: this.getReference(parsedTarget),
            tweenCalls: this.parseNativeJsObject(tween.cocoSchema.methodCalls)
        }, this.getId(tween))

        this.finalizeId(result)
        this.targetCache.parsed[this.getId(result)] = result

        return result
    }

// This function only supports simple JSON objects but does not exactly check for them
    parseNativeJsObject (object) {
        if (this.haveParsed(object)) {
            return getReference(object)
        }

        // We shallow clone so we can capture the object without the parsing metadata.  We
        // may need to deep clone at some point.
        const shallowClone = clone(object)
        this.markParsed(object)

        const parsedObject = (Array.isArray(shallowClone)) ? [] : {}
        for (const [ key, value] of Object.entries(shallowClone)) {
            let parsedTarget = value

            if (typeof value === 'object') {
                // TODO can we find a way to make this dyanmic so we dont have to remember to add support for each new cjs object we add

                if (value instanceof MovieClip) {
                    parsedTarget = this.parseMovieClip(value)
                } else if (value instanceof Shape) {
                    parsedTarget = this.parseShape(value)
                } else if (value instanceof Tween) {
                    parsedTarget = this.parseTween(value)
                } else if (value instanceof Tween) {
                    // TODO throwing to be safe here - we have not tested tween support in native JS objects
                    throw new Error('Do no support tween here')
                } else if (value.constructor === Object || Array.isArray(value)) {
                    parsedTarget = this.parseNativeJsObject(value)
                } else {
                    throw new Error('Unexpected value type')
                }
            }

            parsedObject[key] = parsedTarget
        }

        const result = this.applyId({
            type: 'native_object',
            object: parsedObject
        }, this.getId(object))

        this.finalizeId(result)
        this.targetCache.parsed[this.getId(result)] = result

        return result
    }
}
