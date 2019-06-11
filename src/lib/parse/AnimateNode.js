import objectHash from 'object-hash'

export default class AnimateNode {
  constructor (id, type, original, data = {}) {
    this.id = id
    this.type = type
    this.data = data

    // TODO node should not contain original
    this._original = original
  }

  set id (id) {
    this._id = id
  }

  get id () {
    return this._id
  }

  finalizeId () {
    const originalId = this.id

    this.id = objectHash({
      type: this.type,

      ...this.data
    })

    return originalId
  }

  get node () {
    return this
  }

  get original () {
    return this.node._original
  }
}
