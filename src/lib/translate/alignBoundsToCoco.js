export default function alignBoundsToCoco (schema) {
  const {
    width,
    height
  } = schema.properties

  if (typeof width !== 'undefined' && typeof height !== 'undefined') {
    const quarterWidth = width / 4
    const quarterHeight = height / 4

    const entryPoint = schema
      .animations
      .find(a => a.id === schema.entryPointName)

    const {
      bounds: boundsNode,
      frameBounds: frameBoundsNodes
    } = entryPoint.data

    const resolvedBoundsNode = boundsNode.node
    if (resolvedBoundsNode.data.length > 0) {
      resolvedBoundsNode.data[0] -= quarterWidth
      resolvedBoundsNode.data[1] -= quarterHeight
    }

    if (frameBoundsNodes && frameBoundsNodes.length > 0) {
      for (const frameBoundNode of frameBoundsNodes) {
        const resolvedFrameBoundNode = frameBoundNode.node

        resolvedFrameBoundNode.data[0] -= quarterWidth
        resolvedFrameBoundNode.data[1] -= quarterHeight
      }
    }
  }

  return schema
}
