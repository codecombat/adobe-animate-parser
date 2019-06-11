export default class CocoSchema {
  get cocoSchema () {
    if (!this._cocoSchema) {
      this._cocoSchema = {}
    }

    return this._cocoSchema
  }

  deleteCocoSchema () {
    delete this._cocoSchema
  }
}
