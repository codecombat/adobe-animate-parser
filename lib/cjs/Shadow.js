import CocoSchema from './CocoSchema'

export default class Shadow extends CocoSchema {
  constructor (...args) {
    super(...args)

    this.cocoSchema.constructorArgs = args
  }
}
