class Timeline {
    constructor () {
        this.cocoSchema = {
            tweens: []
        }
    }

    addTween (tween) {
        this.cocoSchema.tweens.push(tween)
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