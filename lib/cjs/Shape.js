import Graphics from './Graphics'

export default class Shape {
    constructor() {
        this._cocoSchema = {}

        this.graphics = new Graphics()
    }

    setTransform(x, y) {
        this._cocoSchema.transform = {
            x, y
        }

        return this
    }
}