/**
 * We don't need the runtime for the Animate class.
 * Make everything on it a noop.
 */
const noop = () => {}

export default {
  bootcompsLoaded: noop,
  bootstrapCallback: noop,
  compositionLoaded: noop,
  getComposition: noop,
}
