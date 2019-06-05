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
    initialize () {
        this.cocoSchema = {}

        this.timeline = new Timeline()
    }

    on () {}

    setTransform (...args) {
        this.cocoSchema.transform = args

        return this
    }
}