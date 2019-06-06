import Shape from './Shape'
import Rectangle from './Rectangle'
import MovieClip from './MovieClip'
import Stage from './Stage'
import Tween from './Tween'

// Pulled from https://github.com/CreateJS/CreateJS/blob/ca885682d7676b1f52b2a7ac04a442ff2faafbc9/dist/createjs.js
function extend (subclass, superclass) {
	"use strict";

	function o() { this.constructor = subclass; }
	o.prototype = superclass.prototype;
	return (subclass.prototype = new o());
}

export default {
    extend,

    Shape,
    Rectangle,
    MovieClip,
    Stage,
    Tween
}
