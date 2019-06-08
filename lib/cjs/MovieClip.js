class Timeline {
    constructor () {
        this.cocoSchema = {
            tweens: []
        }
    }

    addTween (tween) {
        this.cocoSchema.tweens.push(tween)
    }

    // Override Tween property
    get tweens () {
        return this.cocoSchema.tweens
    }
}

export default class MovieClip {
    constructor(...args) {
        this.cocoSchema.constructorArgs = args
    }

    initialize () {
    }

    on () {}

    setTransform (...args) {
        this.cocoSchema.transform = args

        return this
    }

    // Lazily create timeline to make sure that each instance of a movie clip has
    // its own timeline.  Due to the way that animate chains prototypes setting this
    // in the constructor results in shared state across multiple instances of the
    // movie clip subclass

    get cocoSchema () {
        if (!this._cocoSchema) {
            this._cocoSchema = {}
        }

        return this._cocoSchema
    }

    get timeline () {
        if (!this._timeline) {
            this._timeline = new Timeline()
        }

        return this._timeline
    }
}
