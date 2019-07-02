import CocoSchema from './CocoSchema'
import Graphics from './Graphics'
import Rectangle from './Rectangle'

export default class Shape extends CocoSchema {
    constructor() {
        super()

        this.graphics = new Graphics(this)
    }

    setTransform(...args) {
        this.cocoSchema.transform = args

        return this
    }

    getBounds () {
        if (typeof this.graphics.minX === 'undefined') {
            return undefined
        }

        return new Rectangle(
          this.graphics.minX,
          this.graphics.minY,
          this.graphics.maxX - this.graphics.minX,
          this.graphics.maxY - this.graphics.minY
        )
    }
}
