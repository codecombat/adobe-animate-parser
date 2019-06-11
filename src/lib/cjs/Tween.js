import CocoSchema from './CocoSchema'
export default class Tween extends CocoSchema {
    // TODO: naming: movieclip & shape
    static get (movieClip) {
        return new Tween (movieClip)
    }

    constructor (target) {
        super ()

        this.cocoSchema.target = target
        this.cocoSchema.methodCalls = []
    }

    wait (...args) {
        this.cocoSchema.methodCalls.push({
            name: 'wait',
            args
        })

        return this
    }

    call (call) {
        return this
    }

    to (...args) {
        this.cocoSchema.methodCalls.push({
            name: 'to',
            args
        })

        return this
    }

    get target () {
        return this.cocoSchema.target
    }
}
