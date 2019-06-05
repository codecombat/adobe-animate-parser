import Graphics from './Graphics'

export default class Shape {
    constructor() {
        this.cocoSchema = {}

        this.graphics = new Graphics()
    }

    setTransform(x, y) {
        this.cocoSchema.transform = {
            x, y
        }

        return this
    }
}