/**
 *************************************************************************************
 * Note this method modifies the input schema and then returns it
 *************************************************************************************
 *
 * Translates "noop movie clips" (a clip with only shapes and noop tweens on those shapes) containers.
 * This allows us to generate a segmented sprite sheet with more performant operations.
 *
 * The current implementation handles only movie clips with shapes as direct children and no action
 * tweens.  It could be extended to support containers with only shapes as well as an additional type
 * of child.
 */
import AnimateNode from '../parse/AnimateNode'
import AnimateNodeReference from '../parse/AnimateNodeReference'

function replaceMovieClipReferenceWithContainerInNativeObject (nativeObject, movieClip, container) {
  const resolvedMovieClip = movieClip.node
  const resolvedNativeObject = nativeObject.node

  const nativeObjectData = resolvedNativeObject.data.object

  for (const [ key, value ] of Object.entries(nativeObjectData)) {
    if (value instanceof AnimateNode) {
      let resolvedValue = value.node

      // If this is an object we have a complex type that we need to unwind
      if (resolvedValue.type === 'movie_clip') {
        if (resolvedValue.id === resolvedMovieClip.id) {
          // TODO consolidate this with the code below
          const nodeReference = new AnimateNodeReference(
            'TEMP', // ID will be finalized on the next line,
            container.id,
            { parsed: { [container.id]: container } } // Simulate target cache
          )

          nodeReference.finalizeId()
          // TODO fix schema.references.push(nodeReference)

          nativeObjectData[key] = nodeReference
        }
      } else if (resolvedValue.type === 'container') {
        // noop
      } else if (resolvedValue.type === 'shape') {
        // noop
      } else if (resolvedValue.type === 'native_object') {
        replaceMovieClipReferenceWithContainerInNativeObject(value, movieClip, container)
      } else {
        throw new Error('Invalid target type')
      }
    } else if (Array.isArray(value)) {
      for (const v of value) {
        replaceMovieClipReferenceWithContainerInNativeObject(value, movieClip, container)
      }
    }
  }
}

export function replaceMovieClipReferenceWithContainerReference (schema, movieClip, container) {
  const resolvedMovieClip = movieClip.node

  for (const animation of schema.animations) {
    const resolvedAnimation = animation.node

    for (const tween of resolvedAnimation.data.tweens) {
      const resolvedTween = tween.node
      const resolvedTarget = resolvedTween.data.target.node

      if (resolvedTarget.type === 'movie_clip') {
        if (resolvedTarget.id === resolvedMovieClip.id) {
          const nodeReference = new AnimateNodeReference(
            'TEMP', // ID will be finalized on the next line,
            container.id,
            { parsed: { [container.id]: container } } // Simulate target cache
          )

          nodeReference.finalizeId()
          schema.references.push(nodeReference)

          resolvedTween.data.target = nodeReference
        }
      } else if (resolvedTarget.type === 'native_object') {
        replaceMovieClipReferenceWithContainerInNativeObject(resolvedTarget, movieClip, container)
      }

      replaceMovieClipReferenceWithContainerInNativeObject(resolvedTween.data.tweenCalls, movieClip, container)
    }
  }
}

export function simplifyMovieClipPass (schema) {
  schema.containers = schema.containers || []

  const keptAnimations = []
  const replacedMovieClipMappings = new Map()

  for (const animation of schema.animations) {
    const resolvedAnimation = animation.node

    const containerShapes = []
    let isNoopClip = true
    for (const tween of resolvedAnimation.data.tweens) {
      const resolvedTween = tween.node
      const resolvedTarget = resolvedTween.data.target.node

      if (resolvedTarget.type === 'movie_clip') {
        // Movie clip not currently supported.  If the movie clip is itself made up of noop movie clips
        // this could also be translated.
        isNoopClip = false
        break
      } else if (resolvedTarget.type === 'shape') {
        // Only supported if the shape has a single call to wait (or no tween calls at all)
        containerShapes.push(resolvedTarget)

        const shapeTweenCalls = resolvedTween.data.tweenCalls
        const resolvedShapeTweenCalls = shapeTweenCalls.node

        const shapeTweenCallData = resolvedShapeTweenCalls.data.object
        if (!Array.isArray(shapeTweenCallData) && shapeTweenCallData.length <= 1) {
          isNoopClip = false
          break
        }

        const shapeTweenCall = shapeTweenCallData[0]
        const resolvedShapeTweenCall = shapeTweenCall.node
        const shapeTweenCallObject = resolvedShapeTweenCall.data.object

        if (shapeTweenCallObject.name !== 'wait') {
          isNoopClip = false
          break
        }
      } else if (resolvedTarget.type === 'native_object' || resolvedTarget.type === 'container') {
        // Only supported if it does not contain references to non shape object within its system and
        // the tween calls do not perform movements.  For now we'll use a whitelisted approach to identifying.
        const tweenCalls = resolvedTween.data.tweenCalls
        const resolvedTweenCalls = tweenCalls.node

        const tweenCallData = resolvedTweenCalls.data.object
        if (!Array.isArray(tweenCallData)) {
          throw new Error('Expected array of tween calls')
        }

        for (const tweenCall of tweenCallData) {
          const resolvedTweenCall = tweenCall.node
          const callData = resolvedTweenCall.data.object

          const { name } = callData

          if (name === 'wait') {
            // Wait is allowed and supported but we do not need to process.
            continue
          } else if (name === 'to') {
            // "to" is supported.  For now we only support a "to" call with arguments in the form:
            // { state: [ { t: SHAPE_REF }, { t: SHAPE_REF } ].
            //
            // There are likely other possible formats that we can support, this may need to be extended
            // in the future.

            const resolvedArgs = callData.args.node
            const argsData = resolvedArgs.data.object

            if (!Array.isArray(argsData)) {
              throw new Error('Args should be an array')
            }

            if (argsData.length === 0) {
              // Args data for "to" is empty.  We don't need to process further
              continue
            }

            if (argsData.length > 1) {
              // If there is more than one arg than the call to "to" contains a delay.  These can be chained
              // to implement a fast switch between containers.  Consider this a motion tween for now.
              //
              // TODO may be worth parsing the top level animation differently - maybe never remove it?
              isNoopClip = false
              break
            }

            const resolvedArgsData = argsData[0].node

            const args = resolvedArgsData.data.object
            const argsKeys = Object.keys(args)

            if (argsKeys.length !== 1 || argsKeys[0] !== 'state') {
              // For now we only support a top level key with state
              isNoopClip = false
              break
            }

            const { state } = args
            const resolvedState = state.node
            const resolvedStateData = resolvedState.data.object

            if (!Array.isArray(resolvedStateData)) {
              // If state is not an array we don't support this format as a noop movie clip.  It might be one
              // but we do not yet explicitly support it
              isNoopClip = false
              break
            }

            for (const stateObject of resolvedStateData) {
              const resolvedStateObject = stateObject.node
              const stateObjectData = resolvedStateObject.data.object
              const stateObjectDataKeys = Object.keys(stateObjectData)

              if (stateObjectDataKeys.length !== 1 || stateObjectDataKeys[0] !== 't') {
                // We only support nodes of the format { t: SHAPE_REF } at this level now so we only support
                // a single key "t"
                isNoopClip = false
                break
              }

              const tNode = stateObjectData.t
              const resolvedTNode = tNode.node

              if (resolvedTNode.type !== 'shape' && resolvedTNode.type !== 'container') {
                isNoopClip = false
                break
              }

              containerShapes.push(resolvedTNode)
            }
          }
        }
      } else {
        throw new Error('Invalid target type')
      }
    }

    if (!isNoopClip) {
      keptAnimations.push(animation)
      continue
    }

    // Create the container node and save it to the schema
    const containerNode = new AnimateNode(
      'TEMP', // Will be finalized on next line
      'container',
      undefined,
      {
        children: containerShapes,
        bounds: resolvedAnimation.data.bounds,
        frameBounds: resolvedAnimation.data.frameBounds,
        transform: resolvedAnimation.data.transform,
        off: resolvedAnimation.data.off
      }
    )

    containerNode.finalizeId()
    schema.containers.push(containerNode)
    replacedMovieClipMappings.set(animation, containerNode)
  }

  schema.animations = keptAnimations

  for (const [ movieClip, container ] of replacedMovieClipMappings) {
    replaceMovieClipReferenceWithContainerReference (schema, movieClip, container)
  }

  // Note this method modifies the input schema and then returns it
  // TODO it should return a copy
  return schema
}

export default function simplyNoopMovieClips (schema) {
  let lastNumAnimations
  let numAnimations = schema.animations.length

  while (numAnimations !== lastNumAnimations) {
    lastNumAnimations = numAnimations

    schema = simplifyMovieClipPass(schema)

    numAnimations = schema.animations.length
  }

  return schema
}
