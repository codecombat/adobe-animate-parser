import { create } from 'lodash'

import Shape from './Shape'
import Rectangle from './Rectangle'
import MovieClip from './MovieClip'
import Stage from './Stage'
import Tween from './Tween'

// function extend (subclass, superclass) {
// 	"use strict";
//
// 	function o() { this.constructor = subclass; }
// 	o.prototype = superclass.prototype;
// 	return (subclass.prototype = new o());
// }


function extend (subclass, superclass) {
  function ExtendedClass () {
    superclass.call(this)
  }

  ExtendedClass.prototype = create(superclass.prototype, {
    constructor: ExtendedClass
  })

  return ExtendedClass
}
export default {
    extend,

    Shape,
    Rectangle,
    MovieClip,
    Stage,
    Tween
}
