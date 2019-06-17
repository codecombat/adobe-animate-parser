import CocoSchema from './CocoSchema'
import Graphics from './Graphics'

export default class Shape extends CocoSchema {
    constructor() {
        super()

        this.graphics = new Graphics(this)
    }

    setTransform(x, y) {
        this.cocoSchema.transform = {
            x, y
        }

        return this
    }
}
