import sandboxFunction from '../util/sandboxedFunction'
import createjs from './cjs'

import AnimateParser from './parse'

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

    this.parseTree()
  }

  get entryPoint () {
    if (!this.imported) {
      throw new Error('Animate file not imported')
    }

    return this.movieClips[this.entryPointName]
  }

  // TODO needs a better name
  get parsedEntryPoint () {
    if (!this.treeParsed) {
      throw new Error('Entry point not parsed')
    }

    return {
      ...this.animateParser.schema,

      entryPointName: this.entryPointName,
      properties: this.libraryProperties
    }
  }

  rewriteAnimateFile () {
    // Newer versions of Animate have a _renderFirstFrame function that we need to remove
    this.animateFile = this.animateFile.replace(/\s*this\._renderFirstFrame\(\);/g, '')
    // They also might try to define a lib.AnMovieClip that we need to replace with normal cjs.MovieClip
    this.animateFile = this.animateFile.replace(/new lib\.AnMovieClip\(/g, 'new cjs.MovieClip(')
  }

  import () {
    this.rewriteAnimateFile()

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
        console,
        Object
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

    // Remove lib.AnMovieClip, if it's present; otherwise we'll think it's an entrypoint
    delete this.library.AnMovieClip

    this.findAndMonitorLibraryMovieClips()

    this.imported = true
  }

  /**
   * Find every top level movie clip exposed from the library and mod
   */
  findAndMonitorLibraryMovieClips () {
    this.constructorCallCounts = {}
    const constructorCallCounts = this.constructorCallCounts

    for (const [ key, value ] of Object.entries(this.library)) {
      if (value.prototype instanceof createjs.MovieClip) {
        const wrappedLibraryFunction = function (...args) {
          this.cocoSchema.constructorArgs = args

          constructorCallCounts[key] = constructorCallCounts[key] || 0
          constructorCallCounts[key] += 1

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

    for (const [ key , value ] of Object.entries(this.constructorCallCounts)) {
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

  parseTree () {
    this.animateParser = new AnimateParser()
    this._parsedEntryPoint = this.animateParser.parseMovieClip(this.animationTrees[this.entryPointName])

    // For now assume top level is a movie clip and the top level has
    // a self referencing tween that we do not support.
    // We assume this self referencing tween is always the first tween.
    this._parsedEntryPoint.data.tweens = this._parsedEntryPoint.data.tweens.filter((tween) => {
      return this._parsedEntryPoint.id !== tween.node.id
    })

    this.libraryProperties = this.library.properties || {}
    this._parsedEntryPoint.id = this.entryPointName

    this.treeParsed = true
  }
}
