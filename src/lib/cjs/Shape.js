import CocoSchema from './CocoSchema'
import Graphics from './Graphics'

export default class Shape extends CocoSchema {
    constructor() {
        super()

        this.graphics = new Graphics(this)
    }

    setTransform(...args) {
        this.cocoSchema.transform = args

        return this
    }
}
