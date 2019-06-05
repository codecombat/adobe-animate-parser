/**
 * We don't need the runtime for the Animate class.
 * Make everything on it a noop.
 */

export default class Animate {
  cocoGetComposition () {
    const compositionKeys = Object.keys(this.compositions || {})
    if (compositionKeys.length !== 1) {
      throw new Error('Unexpected number of compositions')
    }

    const compositionKey = compositionKeys[0]
    if (!compositionKey) {
      throw new Error('Default composition not found')
    }

    return this.getComposition(compositionKey)
  }  

  bootcompsLoaded () {}
  bootstrapCallback () {}
  compositionLoaded () {}
  getComposition () {}
}
