export default class Tween {
    static get (movieClip) {
        return new Tween (movieClip)
    }

    constructor (target) {
        this.cocoSchema = {
            target,
            methodCalls: []
        }
    }

    wait (wait) {
        this.cocoSchema.methodCalls.push({
            name: 'wait',
            wait
        })

        return this
    }

    call (call) {
        return this
    }

    to (to) {
        this.cocoSchema.methodCalls.push({
            name: 'to',
            to
        })

        return this
    }

    get target () {
        return this.cocoSchema.target
    }
}