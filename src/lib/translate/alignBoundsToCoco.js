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

  const entryPoint = [...schema.animations, ...schema.containers]
    .find(a => a.id === schema.entryPointName)

  if (!entryPoint) {
    throw new Error('No entryPoint found when aligning bounds')
  }

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
