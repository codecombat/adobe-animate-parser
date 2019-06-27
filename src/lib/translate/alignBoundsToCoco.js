/**
 * Reset the bounds of the top level animation to so that the game engine
 * properly understands the bounding box of the asset.
 *
 * This requires that all animations be exported from Adobe Animate with
 * the stage bounds equal to the width and height of the bounding box of
 * the asset.
 */
export default function alignBoundsToCoco (schema) {
  const {
    width,
    height
  } = schema.properties

  const entryPoint = schema
    .animations
    .find(a => a.id === schema.entryPointName)

  const {
    bounds: boundsNode
  } = entryPoint.data

  const resolvedBoundsNode = boundsNode.node
  resolvedBoundsNode.data = [
    0, 0,
    width, height
  ]

  return schema
}
