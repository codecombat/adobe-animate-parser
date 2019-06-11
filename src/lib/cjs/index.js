import create from 'lodash.create'

import CocoSchema from './CocoSchema'

import Shape from './Shape'
import Rectangle from './Rectangle'
import MovieClip from './MovieClip'
import Stage from './Stage'
import Tween from './Tween'
import Shadow from './Shadow'

// function extend (subclass, superclass) {
// 	"use strict";
//
// 	function o() { this.constructor = subclass; }
// 	o.prototype = superclass.prototype;
// 	return (subclass.prototype = new o());
// }


function extend (subclass, superclass) {
  function ExtendedClass (...args) {
    superclass.call(this, ...args)
  }

  ExtendedClass.prototype = create(superclass.prototype, {
    constructor: ExtendedClass
  })

  const extendedClassInstance = new ExtendedClass()
  if (extendedClassInstance instanceof CocoSchema) {
    extendedClassInstance.deleteCocoSchema()
  }

  return extendedClassInstance
}

export default {
    extend,

    Shape,
    Rectangle,
    MovieClip,
    Stage,
    Tween,

  Shadow
}
