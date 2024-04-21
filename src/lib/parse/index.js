import clone from 'lodash.clone'

import MovieClip from '../cjs/MovieClip';
import Shadow from '../cjs/Shadow';
import Shape from '../cjs/Shape';
import Tween from '../cjs/Tween';
import AnimateNode from './AnimateNode'
import AnimateNodeReference from './AnimateNodeReference'

export default class AnimateParser {
    constructor () {
        this.targetCache = {
            original: {},
            parsed: {}
        }

        this.schema = {
            shapes: [],
            animations: [],
            references: [],
            nativeObjects: []
        }

        this.idCounter = 0
    }

    nextId () {
        return `temp_${this.idCounter++}`
    }

    markParsed (target) {
        if (this.haveParsed(target)) {
            return
        }

        const tempId = this.nextId()
        this.applyParsedId(target, tempId)

        this.targetCache.original[tempId] = target

        return tempId
    }

    haveParsed (target) {
        return (typeof this.getParsedId(target) !== 'undefined')
    }

    getParsedId (target) {
        return target._cocoId
    }

    applyParsedId (target, id) {
        target._cocoId = id
        return target
    }

    updatedId (oldId, animateNode) {
        this.targetCache.original[animateNode.id] = this.targetCache.original[oldId]
        delete this.targetCache.original[oldId]

        this.targetCache.parsed[animateNode.id] = this.targetCache.parsed[oldId]
        delete this.targetCache.parsed[oldId]

        // TODO inefficient for animation trees with large numbers of references
        this.schema.references.forEach((reference) => {
            if (reference.nodeId === animateNode.id) {
                reference.nodeId = animateNode.id
            }
        })
    }

    getReference (entityOrReference) {
        if (entityOrReference instanceof AnimateNodeReference) {
            return entityOrReference
        }

        let referencedNodeId
        if (entityOrReference instanceof AnimateNode) {
            referencedNodeId = entityOrReference.id
        } else {
            referencedNodeId = this.getParsedId(entityOrReference)
        }

        const reference = new AnimateNodeReference('', referencedNodeId, this.targetCache)
        const tempId = this.markParsed(reference)
        reference.id = tempId

        this.schema.references.push(reference)
        return reference
    }

    parseRectangle (rectangle) {
        if (!rectangle) {
            return undefined
        }

        const tempId = this.markParsed(rectangle)
        const result = new AnimateNode(
          tempId,
          'rectangle',
          rectangle,
          rectangle.cocoSchema.rectangleConfig
        )

        const originalId = result.finalizeId()
        this.updatedId(originalId, result)

        return result
    }

    parseShape (shape) {
        if (this.haveParsed(shape)) {
            return this.getReference(shape)
        }

        const tempId = this.markParsed(shape)

        const {
            frameBounds,
            nominalBounds
        } = shape

        const result = new AnimateNode(
          tempId,
          'shape',
          shape,
          {
              transform: shape.cocoSchema.transform,
              graphics: (shape.graphics || {}).cocoSchema
          }
        )

        if (frameBounds) {
            result.data.frameBounds = this.parseRectangle(frameBounds)
        }

        if (nominalBounds) {
            result.data.bounds = this.parseRectangle(nominalBounds)
        }

        const originalId = result.finalizeId()
        this.updatedId(originalId, result)

        this.schema.shapes.push(result)
        this.targetCache.parsed[result.id] = result

        return result
    }

    parseMovieClip (movieClip) {
        if (this.haveParsed(movieClip)) {
            return this.getReference(movieClip)
        }

        const tempId = this.markParsed(movieClip)

        const {
            frameBounds,
            nominalBounds
        } = movieClip

        const { tweens } = movieClip.timeline

        let parsedFrameBounds
        if (frameBounds) {
            parsedFrameBounds = frameBounds.map(fb => this.parseRectangle(fb))
        }

        const parsedTweens = tweens.map(t => this.parseTween(t))

        const result = new AnimateNode(
          tempId,
          'movie_clip',
          movieClip,
          {
              constructorArgs: movieClip.cocoSchema.constructorArgs,
              transform: movieClip.cocoSchema.transform,

              bounds: this.parseRectangle(nominalBounds),
              frameBounds: parsedFrameBounds,

              tweens: parsedTweens,

              ...(movieClip.cocoSchema.off && { off: movieClip.cocoSchema.off })
            }
        )

        const originalId = result.finalizeId()
        this.updatedId(originalId, result)

        this.schema.animations.push(result)
        this.targetCache.parsed[result.id] = result

        return result
    }

    parseTween (tween) {
        if (this.haveParsed(tween)) {
            return this.getReference(tween)
        }

        const tempId = this.markParsed(tween)

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

        const tweenCalls = this.parseNativeJsObject(tween.cocoSchema.methodCalls)

        const result = new AnimateNode(
          tempId,
          'tween',
          tween,
          {
              target: this.getReference(parsedTarget),
              tweenCalls
          }
        )

        const originalId = result.finalizeId()
        this.updatedId(originalId, result)

        this.targetCache.parsed[result.id] = result
        return result
    }

    // This function only supports simple JSON objects but does not exactly check for them
    parseNativeJsObject (object) {
        if (this.haveParsed(object)) {
            return this.getReference(object)
        }

        // We shallow clone so we can capture the object without the parsing metadata.  We
        // may need to deep clone at some point.
        const shallowClone = clone(object)

        const tempId = this.markParsed(object)

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
                } else if (value.constructor === Object || Array.isArray(value)) {
                    parsedTarget = this.parseNativeJsObject(value)
                } else {
                    throw new Error('Unexpected value type')
                }
            }

            parsedObject[key] = parsedTarget
        }

        const result = new AnimateNode(
          tempId,
          'native_object',
          parsedObject,
          {
              // This is redundant but allows finalizeId to create a unique ID because
              // it is currently based on the data contents and type only
              object: parsedObject
          }
        )


        const originalId = result.finalizeId()
        this.updatedId(originalId, result)

        this.targetCache.parsed[result.id] = result

        return result
    }
}
