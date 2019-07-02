import AnimateNode from '../parse/AnimateNode'
import AnimateNodeReference from '../parse/AnimateNodeReference'

/**
 * Create a container including the shape using the specified bounds.
 * The bounds currently need to be the bounds of the shape's parent.
 *
 * This ensures that any transforms are properly contained in the
 * bounding box.  These bounds are critical for the generation of
 * segmented sprites.
 *
 * TODO there is likely a way to minimize the bounding box with container transforms or shape transforms
 */
function createContainerFromShape (shape, bounds) {
  const resolvedShape = shape.node

  const containerNode = new AnimateNode(
    'TEMP', // Will be finalized on next line
    'container',
    undefined,
    {
      children: [ resolvedShape ],
      bounds,
      frameBounds: resolvedShape.data.frameBounds,
    }
  )

  containerNode.finalizeId()

  return containerNode
}

function convertShapesToContainersInNativeObject (schema, bounds, nativeObject) {
  const resolvedNativeObject = nativeObject.node
  const nativeObjectData = resolvedNativeObject.data.object

  for (const [ key, value ] of Object.entries(nativeObjectData)) {
    if (Array.isArray(value)) {
      for (const v of value) {
        convertShapesToContainersInNativeObject(schema, bounds, v)
      }
    } else if (value instanceof AnimateNode) {
      let resolvedValue = value.node
      if (resolvedValue.type === 'shape') {
        const container = createContainerFromShape(resolvedValue, bounds)

        schema.containers.push(container)

        const containerRef = new AnimateNodeReference(
          'TEMP', // ID will be finalized on the next line,
          container.id,
          { parsed: { [container.id]: container } } // Simulate target cache
        )

        schema.references.push(containerRef)
        nativeObjectData[key] = containerRef
      } else if (resolvedValue.type === 'native_object') {
        convertShapesToContainersInNativeObject(schema, bounds, resolvedValue)
      }
    }
  }
}

export default function convertAnimationShapesToContainers (schema) {
  for (const animation of schema.animations) {
    const resolvedAnimation = animation.node

    const {
      tweens,
      bounds
    } = resolvedAnimation.data

    // In order to preserve layering we need to loop through the tweens in reverse order.
    //
    // Note that this only works for the very specific format that we support right now (tweens
    // created on empty objects that use `.to({ state: [] })` calls with no delay.  This results in
    // the last tween added to the timeline being executed first, resulting in those layers being
    // added to the bottom of the stack.  If we support more complex additions with timing at
    // a later point we'll need a more robust solution.
    for (let i = tweens.length - 1; i >= 0; i--) {
      const tween = tweens[i]

      const resolvedTween = tween.node
      const resolvedTarget = resolvedTween.data.target.node

      if (resolvedTarget.type === 'shape') {
        const container = createContainerFromShape(resolvedTarget, bounds)

        schema.containers.push(container)

        const containerRef = new AnimateNodeReference(
          'TEMP', // ID will be finalized on the next line,
          container.id,
          { parsed: { [container.id]: container } } // Simulate target cache
        )

        resolvedTween.data.target = containerRef
        schema.references.push(containerRef)
      } else if (resolvedTarget.type === 'native_object') {
        convertShapesToContainersInNativeObject(schema, bounds, resolvedTarget)
      }

      convertShapesToContainersInNativeObject(schema, bounds, resolvedTween.data.tweenCalls)
    }
  }

  return schema
}
