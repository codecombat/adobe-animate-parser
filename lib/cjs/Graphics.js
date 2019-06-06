export default class Graphics {
    constructor () {
        this.cocoSchema = {}
    }

    f (f) {
        this.cocoSchema.fc = f
        return this
    }

    s (s) {
        // TODO may be able to call this multiple times.  If so will need to have each
        // call to s() return a new object that collects the data on subsequent calls
        //
        // Collect each of these objects in an array on coco schema
        return this
    }

    p (p) {
        this.cocoSchema.p = p
        return this
    }
}