import CocoSchema from './CocoSchema'

class Timeline extends CocoSchema {
    constructor () {
        super()

        this.cocoSchema.tweens = []
    }

    addTween (tween) {
        this.cocoSchema.tweens.push(tween)
    }

    // Override Tween property
    get tweens () {
        return this.cocoSchema.tweens
    }
}

export default class MovieClip extends CocoSchema {
    constructor(...args) {
        super()

        this.cocoSchema.constructorArgs = args
    }

    initialize () {
    }

    on () {}

    setTransform (...args) {
        this.cocoSchema.transform = args

        return this
    }

    set _off (bool) {
        this.cocoSchema.off = bool
    }

    // Lazily create timeline to make sure that each instance of a movie clip has
    // its own timeline.  Due to the way that animate chains prototypes setting this
    // in the constructor results in shared state across multiple instances of the
    // movie clip subclass
    get timeline () {
        if (!this._timeline) {
            this._timeline = new Timeline()
        }

        return this._timeline
    }
}
