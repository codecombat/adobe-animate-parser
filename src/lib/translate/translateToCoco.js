import alignBoundsToCoco from './alignBoundsToCoco'
import simplifyNoopMovieClips from './simplifyNoopMoiveClips'
import treeToSchema from './treeToSchema'

export default function translateToCoco (schema) {
  const simplifiedClipsSchema = simplifyNoopMovieClips(schema)
  const alignedBounds = alignBoundsToCoco(simplifiedClipsSchema)

  return treeToSchema(alignedBounds)
}
