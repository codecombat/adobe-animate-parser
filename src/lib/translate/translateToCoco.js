import alignBoundsToCoco from './alignBoundsToCoco'
import simplifyNoopMovieClips from './simplifyNoopMovieClips'
import treeToSchema from './treeToSchema'
import convertAnimationShapesToContainers from './convertAnimationShapesToContainers'

export default function translateToCoco (schema) {
  const simplifiedClipsSchema = simplifyNoopMovieClips(schema)
  const shapesToContainerSchema = convertAnimationShapesToContainers(simplifiedClipsSchema)
  const alignedBounds = alignBoundsToCoco(shapesToContainerSchema)

  return treeToSchema(alignedBounds)
}
