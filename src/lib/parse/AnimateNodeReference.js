import AnimateNode from './AnimateNode'

export default class AnimateNodeReference extends AnimateNode {
  constructor (id, nodeId, targetCache, renameCache) {
    super (id, 'reference', undefined, {
      nodeId: nodeId
    })

    this.targetCache = targetCache
    this.renameCache = renameCache
  }

  get nodeId () {
    return this.data.nodeId
  }

  set nodeId (nodeId) {
    this.data.nodeId = nodeId
  }

  get node () {
    let node = this.targetCache.parsed[this.nodeId]
    if (!node) {
      const previousId = this.renameCache ? this.renameCache[this.nodeId] : undefined
      if (previousId) {
        node = this.targetCache.parsed[previousId]
      }
      if (!node) {
        throw new Error(`Node ${this.nodeId} not found in target cache; previous id ${previousId}`)
      }
    }
    while (node instanceof AnimateNodeReference) {
      node = node.node
    }

    return node
  }
}
