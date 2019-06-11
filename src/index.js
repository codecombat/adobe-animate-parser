import sandboxFunction from './util/sandboxedFunction'
import createjs from './lib/cjs'

import { parseMovieClip, schema } from './lib/parse'

export default class AdobeAnimation {
  constructor (animationFile) {
    this.animateFile = animationFile || ''

    this.library = {}
    this.movieClips = {}
    this.animationTrees = {}

    if (this.animateFile.trim().length === 0) {
      throw new Error('Invalid file format - animate file is empty')
    }
  }

  parse () {
    this.import()
    this.findAndMonitorLibraryMovieClips()
    this.buildAnimationTrees()

    this.findEntryPoint()

    this.walkTree()
  }

  get entryPoint () {
    if (!this.imported) {
      throw new Error('Animate file not imported')
    }

    return this.movieClips[this.entryPointName]
  }

  get parsedEntryPoint () {
    if (!this.treeWalked) {
      throw new Error('Entry point not parsed')
    }

    return schema
  }

  import () {
    this.library = {}
    const animate = {}

    const compiledAnimateFile = sandboxFunction(`
      createjs = cocoCjs;
     
      try {
          lib = cocoLibrary;
      } catch (e) {} // If lib is defined overwrite it
   
      try {
          AdobeAn = cocoAnimate;
      } catch (e) {} // If lib is defined overwrite it
      
      ${this.animateFile}
    `)

    try {
      compiledAnimateFile({
        cocoLibrary: this.library,
        cocoAnimate: animate,
        cocoCjs: createjs,
        console
      })
    } catch (e) {
      throw new Error('Failed parsing animate file', e)
    }

    // If animate compositions is present, extract library from it, otherwise assume script will set it
    if (animate.compositions) {
      const animateCompositions = animate.compositions
      const compositionKeys = Object.keys(animateCompositions)

      if (compositionKeys.length !== 1) {
        throw new Error('Unexpected number of compositions')
      }

      this.library = animateCompositions[compositionKeys[0]].getLibrary()
    }

    if (Object.keys(this.library).length === 0) {
      throw new Error('Nothing in library')
    }

    this.findAndMonitorLibraryMovieClips()

    this.imported = true
  }

  /**
   * Find every top level movie clip exposed from the library and mod
   */
  findAndMonitorLibraryMovieClips () {
    for (const [ key, value ] of Object.entries(this.library)) {
      if (value.prototype instanceof createjs.MovieClip) {
        const wrappedLibraryFunction = function (...args) {
          this.cocoSchema.constructorArgs = args

          this.constructor.cocoCallCount = this.constructor.cocoCallCount || 0
          this.constructor.cocoCallCount += 1

          return value.call(this, ...args)
        }

        wrappedLibraryFunction.prototype = value.prototype

        this.library[key] = wrappedLibraryFunction
        this.movieClips[key] = wrappedLibraryFunction
      }
    }
  }

  buildAnimationTrees () {
    for (const [ key , value ] of Object.entries(this.movieClips)) {
      this.animationTrees[key] = new value()
    }
  }

  /**
   * We track the number of times each library movie clip is constructed and select
   * the one that was constructed the smallest number of times.
   */
  findEntryPoint () {
    let minKey
    let minCount = Infinity
    let numOccurrencesOfMin

    for (const [ key , clip ] of Object.entries(this.movieClips)) {
      const value = clip.prototype.constructor.cocoCallCount

      if (value < minCount) {
        minCount = value
        minKey = key
        numOccurrencesOfMin = 1
      } else if (value === minCount) {
        numOccurrencesOfMin += 1
      }
    }

    if (typeof minKey === 'undefined') {
      throw new Error('No minimum found')
    }

    // If more than one movie clip had the minimum number of constructions we
    // are in an unexpected state.
    if (numOccurrencesOfMin > 1) {
      throw new Error('No clear entry point')
    }

    this.entryPointName = minKey
    return this.entryPointName
  }

  walkTree () {
    this._parsedEntryPoint = parseMovieClip(this.animationTrees[this.entryPointName])

    // For now assume top level is a movie clip and the top level has
    // a self referencing tween that we do not support.
    // We assume this self referencing tween is always the first tween.
    this._parsedEntryPoint.tweens = this._parsedEntryPoint.tweens.filter((tween) => {
      // TODO remove direct _cocoId reference here
      return this._parsedEntryPoint._cocoId !== tween.target.reference
    })

    // Translate bounding boxes of top level animation.
    //
    // The game engine requires that the bounds are centered around the
    // center of the top level movie clip.
    if (this.library.properties) {
      const {
        width,
        height
      } = this.library.properties

      if (typeof width !== 'undefined' && typeof height !== 'undefined') {
        const quarterWidth = width / 4
        const quarterHeight = height / 4

        const {
          bounds,
          frameBounds
        } = this._parsedEntryPoint

        if (bounds.length > 0) {
          bounds[0] -= quarterWidth
          bounds[1] -= quarterHeight
        }

        if (frameBounds.length > 0) {
          for (const frameBound of frameBounds) {
            frameBound[0] -= quarterWidth
            frameBound[1] -= quarterHeight
          }
        }
      }
    }

    this._parsedEntryPoint._cocoId = this.entryPointName

    this.treeWalked = true
  }
}
