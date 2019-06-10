import CocoSchema from './CocoSchema'

export default class Rectangle extends CocoSchema {
    constructor (...args) {
        super(...args)

        this.cocoSchema.rectangleConfig = args
    }
}
