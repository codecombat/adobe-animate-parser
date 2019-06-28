import AnimateNode from '../parse/AnimateNode'
import AnimateNodeReference from '../parse/AnimateNodeReference'

function createContainerFromShape (shape) {
  const resolvedShape = shape.node

  const { bounds } = resolvedShape.data.bounds

  if (bounds) {
    const newBounds = new AnimateNode(
      'TEMP',
      'rectangle',
      undefined,
      [
        0,
        0,
        resolvedShape.data.bounds[2],
        resolvedShape.data.bounds[3]
      ]
    )

    newBounds.finalizeId()
    resolvedShape.data.bounds = newBounds
  }

  // resolvedShape.data.transform = undefined

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

function convertShapesToContainersInNativeObject (schema, nativeObject) {
  const resolvedNativeObject = nativeObject.node
  const nativeObjectData = resolvedNativeObject.data.object

  for (const [ key, value ] of Object.entries(nativeObjectData)) {
    if (Array.isArray(value)) {
      for (const v of value) {
        convertShapesToContainersInNativeObject(schema, v)
      }
    } else if (value instanceof AnimateNode) {
      let resolvedValue = value.node
      if (resolvedValue.type === 'shape') {
        const container = createContainerFromShape(resolvedValue)

        schema.containers.push(container)

        const containerRef = new AnimateNodeReference(
          'TEMP', // ID will be finalized on the next line,
          container.id,
          { parsed: { [container.id]: container } } // Simulate target cache
        )

        schema.references.push(containerRef)
        nativeObjectData[key] = containerRef
      } else if (resolvedValue.type === 'native_object') {
        convertShapesToContainersInNativeObject(schema, resolvedValue)
      }
    }
  }
}

export default function convertAnimationShapesToContainers (schema) {
  for (const animation of schema.animations) {
    const resolvedAnimation = animation.node

    const { tweens } = resolvedAnimation.data

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
        const container = createContainerFromShape(resolvedTarget)

        schema.containers.push(container)

        const containerRef = new AnimateNodeReference(
          'TEMP', // ID will be finalized on the next line,
          container.id,
          { parsed: { [container.id]: container } } // Simulate target cache
        )

        resolvedTween.data.target = containerRef
        schema.references.push(containerRef)
      } else if (resolvedTarget.type === 'native_object') {
        convertShapesToContainersInNativeObject(schema, resolvedTarget)
      }

      convertShapesToContainersInNativeObject(schema, resolvedTween.data.tweenCalls)
    }
  }

  return schema
}
