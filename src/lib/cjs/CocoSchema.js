export default class CocoSchema {
  get cocoSchema () {
    // Because of the way CreateJS does extends its objects / constructs prototypes we need to
    // handle _cocoSchema definitions in a non standard way.  Doing a simple (if _cocoSchema) check
    // will search the prototype chain and end up in a shared cocoSchema amongst objects of the
    // same type
    if (!this.hasOwnProperty('_cocoSchema')) {
      Object.defineProperty(this, '_cocoSchema', { value: {} })
    }

    return this._cocoSchema
  }

  deleteCocoSchema () {
    delete this._cocoSchema
  }
}
