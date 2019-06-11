"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _sandboxedFunction = _interopRequireDefault(require("./util/sandboxedFunction"));
var _cjs = _interopRequireDefault(require("./lib/cjs"));

var _parse = _interopRequireDefault(require("./lib/parse"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var

AdobeAnimation = /*#__PURE__*/function () {
  function AdobeAnimation(animationFile) {_classCallCheck(this, AdobeAnimation);
    this.animateFile = animationFile || '';

    this.library = {};
    this.movieClips = {};
    this.animationTrees = {};

    if (this.animateFile.trim().length === 0) {
      throw new Error('Invalid file format - animate file is empty');
    }
  }_createClass(AdobeAnimation, [{ key: "parse", value: function parse()

    {
      this["import"]();
      this.findAndMonitorLibraryMovieClips();
      this.buildAnimationTrees();

      this.findEntryPoint();

      this.parseTree();
    } }, { key: "import", value: function _import()

















    {
      this.library = {};
      var animate = {};

      var compiledAnimateFile = (0, _sandboxedFunction["default"])("\n      createjs = cocoCjs;\n     \n      try {\n          lib = cocoLibrary;\n      } catch (e) {} // If lib is defined overwrite it\n   \n      try {\n          AdobeAn = cocoAnimate;\n      } catch (e) {} // If lib is defined overwrite it\n      \n      ".concat(










      this.animateFile, "\n    "));


      try {
        compiledAnimateFile({
          cocoLibrary: this.library,
          cocoAnimate: animate,
          cocoCjs: _cjs["default"],
          console: console });

      } catch (e) {
        throw new Error('Failed parsing animate file', e);
      }

      // If animate compositions is present, extract library from it, otherwise assume script will set it
      if (animate.compositions) {
        var animateCompositions = animate.compositions;
        var compositionKeys = Object.keys(animateCompositions);

        if (compositionKeys.length !== 1) {
          throw new Error('Unexpected number of compositions');
        }

        this.library = animateCompositions[compositionKeys[0]].getLibrary();
      }

      if (Object.keys(this.library).length === 0) {
        throw new Error('Nothing in library');
      }

      this.findAndMonitorLibraryMovieClips();

      this.imported = true;
    }

    /**
       * Find every top level movie clip exposed from the library and mod
       */ }, { key: "findAndMonitorLibraryMovieClips", value: function findAndMonitorLibraryMovieClips()
    {var _this = this;
      this.constructorCallCounts = {};
      var constructorCallCounts = this.constructorCallCounts;var _loop = function _loop() {var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),

        key = _Object$entries$_i[0],value = _Object$entries$_i[1];
        if (value.prototype instanceof _cjs["default"].MovieClip) {
          var wrappedLibraryFunction = function wrappedLibraryFunction() {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
            this.cocoSchema.constructorArgs = args;

            constructorCallCounts[key] = constructorCallCounts[key] || 0;
            constructorCallCounts[key] += 1;

            return value.call.apply(value, [this].concat(args));
          };

          wrappedLibraryFunction.prototype = value.prototype;

          _this.library[key] = wrappedLibraryFunction;
          _this.movieClips[key] = wrappedLibraryFunction;
        }};for (var _i = 0, _Object$entries = Object.entries(this.library); _i < _Object$entries.length; _i++) {_loop();
      }
    } }, { key: "buildAnimationTrees", value: function buildAnimationTrees()

    {
      for (var _i2 = 0, _Object$entries2 = Object.entries(this.movieClips); _i2 < _Object$entries2.length; _i2++) {var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),key = _Object$entries2$_i[0],value = _Object$entries2$_i[1];
        this.animationTrees[key] = new value();
      }
    }

    /**
       * We track the number of times each library movie clip is constructed and select
       * the one that was constructed the smallest number of times.
       */ }, { key: "findEntryPoint", value: function findEntryPoint()
    {
      var minKey;
      var minCount = Infinity;
      var numOccurrencesOfMin;

      for (var _i3 = 0, _Object$entries3 = Object.entries(this.constructorCallCounts); _i3 < _Object$entries3.length; _i3++) {var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),key = _Object$entries3$_i[0],value = _Object$entries3$_i[1];
        if (value < minCount) {
          minCount = value;
          minKey = key;
          numOccurrencesOfMin = 1;
        } else if (value === minCount) {
          numOccurrencesOfMin += 1;
        }
      }

      if (typeof minKey === 'undefined') {
        throw new Error('No minimum found');
      }

      // If more than one movie clip had the minimum number of constructions we
      // are in an unexpected state.
      if (numOccurrencesOfMin > 1) {
        throw new Error('No clear entry point');
      }

      this.entryPointName = minKey;
      return this.entryPointName;
    } }, { key: "parseTree", value: function parseTree()

    {var _this2 = this;
      this.animateParser = new _parse["default"]();
      this._parsedEntryPoint = this.animateParser.parseMovieClip(this.animationTrees[this.entryPointName]);

      // For now assume top level is a movie clip and the top level has
      // a self referencing tween that we do not support.
      // We assume this self referencing tween is always the first tween.
      this._parsedEntryPoint.tweens = this._parsedEntryPoint.tweens.filter(function (tween) {
        // TODO remove direct _cocoId reference here
        return _this2._parsedEntryPoint._cocoId !== tween.target.reference;
      });

      // Translate bounding boxes of top level animation.
      //
      // The game engine requires that the bounds are centered around the
      // center of the top level movie clip.
      if (this.library.properties) {var _this$library$propert =



        this.library.properties,width = _this$library$propert.width,height = _this$library$propert.height;

        if (typeof width !== 'undefined' && typeof height !== 'undefined') {
          var quarterWidth = width / 4;
          var quarterHeight = height / 4;var _this$_parsedEntryPoi =




          this._parsedEntryPoint,bounds = _this$_parsedEntryPoi.bounds,frameBounds = _this$_parsedEntryPoi.frameBounds;

          if (bounds.length > 0) {
            bounds[0] -= quarterWidth;
            bounds[1] -= quarterHeight;
          }

          if (frameBounds.length > 0) {var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
              for (var _iterator = frameBounds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var frameBound = _step.value;
                frameBound[0] -= quarterWidth;
                frameBound[1] -= quarterHeight;
              }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator["return"] != null) {_iterator["return"]();}} finally {if (_didIteratorError) {throw _iteratorError;}}}
          }
        }
      }

      this._parsedEntryPoint._cocoId = this.entryPointName;

      this.treeParsed = true;
    } }, { key: "entryPoint", get: function get() {if (!this.imported) {throw new Error('Animate file not imported');}return this.movieClips[this.entryPointName];} }, { key: "parsedEntryPoint", get: function get() {if (!this.treeParsed) {throw new Error('Entry point not parsed');}return this.animateParser.schema;} }]);return AdobeAnimation;}();exports["default"] = AdobeAnimation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJBZG9iZUFuaW1hdGlvbiIsImFuaW1hdGlvbkZpbGUiLCJhbmltYXRlRmlsZSIsImxpYnJhcnkiLCJtb3ZpZUNsaXBzIiwiYW5pbWF0aW9uVHJlZXMiLCJ0cmltIiwibGVuZ3RoIiwiRXJyb3IiLCJmaW5kQW5kTW9uaXRvckxpYnJhcnlNb3ZpZUNsaXBzIiwiYnVpbGRBbmltYXRpb25UcmVlcyIsImZpbmRFbnRyeVBvaW50IiwicGFyc2VUcmVlIiwiYW5pbWF0ZSIsImNvbXBpbGVkQW5pbWF0ZUZpbGUiLCJjb2NvTGlicmFyeSIsImNvY29BbmltYXRlIiwiY29jb0NqcyIsImNyZWF0ZWpzIiwiY29uc29sZSIsImUiLCJjb21wb3NpdGlvbnMiLCJhbmltYXRlQ29tcG9zaXRpb25zIiwiY29tcG9zaXRpb25LZXlzIiwiT2JqZWN0Iiwia2V5cyIsImdldExpYnJhcnkiLCJpbXBvcnRlZCIsImNvbnN0cnVjdG9yQ2FsbENvdW50cyIsImtleSIsInZhbHVlIiwicHJvdG90eXBlIiwiTW92aWVDbGlwIiwid3JhcHBlZExpYnJhcnlGdW5jdGlvbiIsImFyZ3MiLCJjb2NvU2NoZW1hIiwiY29uc3RydWN0b3JBcmdzIiwiY2FsbCIsImVudHJpZXMiLCJtaW5LZXkiLCJtaW5Db3VudCIsIkluZmluaXR5IiwibnVtT2NjdXJyZW5jZXNPZk1pbiIsImVudHJ5UG9pbnROYW1lIiwiYW5pbWF0ZVBhcnNlciIsIkFuaW1hdGVQYXJzZXIiLCJfcGFyc2VkRW50cnlQb2ludCIsInBhcnNlTW92aWVDbGlwIiwidHdlZW5zIiwiZmlsdGVyIiwidHdlZW4iLCJfY29jb0lkIiwidGFyZ2V0IiwicmVmZXJlbmNlIiwicHJvcGVydGllcyIsIndpZHRoIiwiaGVpZ2h0IiwicXVhcnRlcldpZHRoIiwicXVhcnRlckhlaWdodCIsImJvdW5kcyIsImZyYW1lQm91bmRzIiwiZnJhbWVCb3VuZCIsInRyZWVQYXJzZWQiLCJzY2hlbWEiXSwibWFw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Q0FFLFlBQUFBLE1BQU0sQ0FBQyxDQUFELENBQU4sSUFBYUQsYUFBYjtBQUNEOztBQUVELGNBQUlFLFdBQVcsQ0FBQ3JELE1BQVosR0FBcUIsQ0FBekIsRUFBNEI7QUFDMUIsbUNBQXlCcUQsV0FBekIsOEhBQXNDLEtBQTNCQyxVQUEyQjtBQUNwQ0EsZ0JBQUFBLFVBQVUsQ0FBQyxDQUFELENBQVYsSUFBaUJKLFlBQWpCO0FBQ0FJLGdCQUFBQSxVQUFVLENBQUMsQ0FBRCxDQUFWLElBQWlCSCxhQUFqQjtBQUNELGVBSnlCO0FBSzNCO0FBQ0Y7QUFDRjs7QUFFRCxXQUFLWixpQkFBTCxDQUF1QkssT0FBdkIsR0FBaUMsS0FBS1IsY0FBdEM7O0FBRUEsV0FBS21CLFVBQUwsR0FBa0IsSUFBbEI7QUFDRCxLLDZDQW5MaUIsQ0FDaEIsSUFBSSxDQUFDLEtBQUtuQyxRQUFWLEVBQW9CLENBQ2xCLE1BQU0sSUFBSW5CLEtBQUosQ0FBVSwyQkFBVixDQUFOLENBQ0QsQ0FFRCxPQUFPLEtBQUtKLFVBQUwsQ0FBZ0IsS0FBS3VDLGNBQXJCLENBQVAsQ0FDRCxDLG1EQUV1QixDQUN0QixJQUFJLENBQUMsS0FBS21CLFVBQVYsRUFBc0IsQ0FDcEIsTUFBTSxJQUFJdEQsS0FBSixDQUFVLHdCQUFWLENBQU4sQ0FDRCxDQUVELE9BQU8sS0FBS29DLGFBQUwsQ0FBbUJtQixNQUExQixDQUNELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2FuZGJveEZ1bmN0aW9uIGZyb20gJy4vdXRpbC9zYW5kYm94ZWRGdW5jdGlvbidcbmltcG9ydCBjcmVhdGVqcyBmcm9tICcuL2xpYi9janMnXG5cbmltcG9ydCBBbmltYXRlUGFyc2VyIGZyb20gJy4vbGliL3BhcnNlJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZG9iZUFuaW1hdGlvbiB7XG4gIGNvbnN0cnVjdG9yIChhbmltYXRpb25GaWxlKSB7XG4gICAgdGhpcy5hbmltYXRlRmlsZSA9IGFuaW1hdGlvbkZpbGUgfHwgJydcblxuICAgIHRoaXMubGlicmFyeSA9IHt9XG4gICAgdGhpcy5tb3ZpZUNsaXBzID0ge31cbiAgICB0aGlzLmFuaW1hdGlvblRyZWVzID0ge31cblxuICAgIGlmICh0aGlzLmFuaW1hdGVGaWxlLnRyaW0oKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBmaWxlIGZvcm1hdCAtIGFuaW1hdGUgZmlsZSBpcyBlbXB0eScpXG4gICAgfVxuICB9XG5cbiAgcGFyc2UgKCkge1xuICAgIHRoaXMuaW1wb3J0KClcbiAgICB0aGlzLmZpbmRBbmRNb25pdG9yTGlicmFyeU1vdmllQ2xpcHMoKVxuICAgIHRoaXMuYnVpbGRBbmltYXRpb25UcmVlcygpXG5cbiAgICB0aGlzLmZpbmRFbnRyeVBvaW50KClcblxuICAgIHRoaXMucGFyc2VUcmVlKClcbiAgfVxuXG4gIGdldCBlbnRyeVBvaW50ICgpIHtcbiAgICBpZiAoIXRoaXMuaW1wb3J0ZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQW5pbWF0ZSBmaWxlIG5vdCBpbXBvcnRlZCcpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMubW92aWVDbGlwc1t0aGlzLmVudHJ5UG9pbnROYW1lXVxuICB9XG5cbiAgZ2V0IHBhcnNlZEVudHJ5UG9pbnQgKCkge1xuICAgIGlmICghdGhpcy50cmVlUGFyc2VkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VudHJ5IHBvaW50IG5vdCBwYXJzZWQnKVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmFuaW1hdGVQYXJzZXIuc2NoZW1hXG4gIH1cblxuICBpbXBvcnQgKCkge1xuICAgIHRoaXMubGlicmFyeSA9IHt9XG4gICAgY29uc3QgYW5pbWF0ZSA9IHt9XG5cbiAgICBjb25zdCBjb21waWxlZEFuaW1hdGVGaWxlID0gc2FuZGJveEZ1bmN0aW9uKGBcbiAgICAgIGNyZWF0ZWpzID0gY29jb0NqcztcbiAgICAgXG4gICAgICB0cnkge1xuICAgICAgICAgIGxpYiA9IGNvY29MaWJyYXJ5O1xuICAgICAgfSBjYXRjaCAoZSkge30gLy8gSWYgbGliIGlzIGRlZmluZWQgb3ZlcndyaXRlIGl0XG4gICBcbiAgICAgIHRyeSB7XG4gICAgICAgICAgQWRvYmVBbiA9IGNvY29BbmltYXRlO1xuICAgICAgfSBjYXRjaCAoZSkge30gLy8gSWYgbGliIGlzIGRlZmluZWQgb3ZlcndyaXRlIGl0XG4gICAgICBcbiAgICAgICR7dGhpcy5hbmltYXRlRmlsZX1cbiAgICBgKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbXBpbGVkQW5pbWF0ZUZpbGUoe1xuICAgICAgICBjb2NvTGlicmFyeTogdGhpcy5saWJyYXJ5LFxuICAgICAgICBjb2NvQW5pbWF0ZTogYW5pbWF0ZSxcbiAgICAgICAgY29jb0NqczogY3JlYXRlanMsXG4gICAgICAgIGNvbnNvbGVcbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgcGFyc2luZyBhbmltYXRlIGZpbGUnLCBlKVxuICAgIH1cblxuICAgIC8vIElmIGFuaW1hdGUgY29tcG9zaXRpb25zIGlzIHByZXNlbnQsIGV4dHJhY3QgbGlicmFyeSBmcm9tIGl0LCBvdGhlcndpc2UgYXNzdW1lIHNjcmlwdCB3aWxsIHNldCBpdFxuICAgIGlmIChhbmltYXRlLmNvbXBvc2l0aW9ucykge1xuICAgICAgY29uc3QgYW5pbWF0ZUNvbXBvc2l0aW9ucyA9IGFuaW1hdGUuY29tcG9zaXRpb25zXG4gICAgICBjb25zdCBjb21wb3NpdGlvbktleXMgPSBPYmplY3Qua2V5cyhhbmltYXRlQ29tcG9zaXRpb25zKVxuXG4gICAgICBpZiAoY29tcG9zaXRpb25LZXlzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgbnVtYmVyIG9mIGNvbXBvc2l0aW9ucycpXG4gICAgICB9XG5cbiAgICAgIHRoaXMubGlicmFyeSA9IGFuaW1hdGVDb21wb3NpdGlvbnNbY29tcG9zaXRpb25LZXlzWzBdXS5nZXRMaWJyYXJ5KClcbiAgICB9XG5cbiAgICBpZiAoT2JqZWN0LmtleXModGhpcy5saWJyYXJ5KS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTm90aGluZyBpbiBsaWJyYXJ5JylcbiAgICB9XG5cbiAgICB0aGlzLmZpbmRBbmRNb25pdG9yTGlicmFyeU1vdmllQ2xpcHMoKVxuXG4gICAgdGhpcy5pbXBvcnRlZCA9IHRydWVcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIGV2ZXJ5IHRvcCBsZXZlbCBtb3ZpZSBjbGlwIGV4cG9zZWQgZnJvbSB0aGUgbGlicmFyeSBhbmQgbW9kXG4gICAqL1xuICBmaW5kQW5kTW9uaXRvckxpYnJhcnlNb3ZpZUNsaXBzICgpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9yQ2FsbENvdW50cyA9IHt9XG4gICAgY29uc3QgY29uc3RydWN0b3JDYWxsQ291bnRzID0gdGhpcy5jb25zdHJ1Y3RvckNhbGxDb3VudHNcblxuICAgIGZvciAoY29uc3QgWyBrZXksIHZhbHVlIF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5saWJyYXJ5KSkge1xuICAgICAgaWYgKHZhbHVlLnByb3RvdHlwZSBpbnN0YW5jZW9mIGNyZWF0ZWpzLk1vdmllQ2xpcCkge1xuICAgICAgICBjb25zdCB3cmFwcGVkTGlicmFyeUZ1bmN0aW9uID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICB0aGlzLmNvY29TY2hlbWEuY29uc3RydWN0b3JBcmdzID0gYXJnc1xuXG4gICAgICAgICAgY29uc3RydWN0b3JDYWxsQ291bnRzW2tleV0gPSBjb25zdHJ1Y3RvckNhbGxDb3VudHNba2V5XSB8fCAwXG4gICAgICAgICAgY29uc3RydWN0b3JDYWxsQ291bnRzW2tleV0gKz0gMVxuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlLmNhbGwodGhpcywgLi4uYXJncylcbiAgICAgICAgfVxuXG4gICAgICAgIHdyYXBwZWRMaWJyYXJ5RnVuY3Rpb24ucHJvdG90eXBlID0gdmFsdWUucHJvdG90eXBlXG5cbiAgICAgICAgdGhpcy5saWJyYXJ5W2tleV0gPSB3cmFwcGVkTGlicmFyeUZ1bmN0aW9uXG4gICAgICAgIHRoaXMubW92aWVDbGlwc1trZXldID0gd3JhcHBlZExpYnJhcnlGdW5jdGlvblxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGJ1aWxkQW5pbWF0aW9uVHJlZXMgKCkge1xuICAgIGZvciAoY29uc3QgWyBrZXkgLCB2YWx1ZSBdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMubW92aWVDbGlwcykpIHtcbiAgICAgIHRoaXMuYW5pbWF0aW9uVHJlZXNba2V5XSA9IG5ldyB2YWx1ZSgpXG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdlIHRyYWNrIHRoZSBudW1iZXIgb2YgdGltZXMgZWFjaCBsaWJyYXJ5IG1vdmllIGNsaXAgaXMgY29uc3RydWN0ZWQgYW5kIHNlbGVjdFxuICAgKiB0aGUgb25lIHRoYXQgd2FzIGNvbnN0cnVjdGVkIHRoZSBzbWFsbGVzdCBudW1iZXIgb2YgdGltZXMuXG4gICAqL1xuICBmaW5kRW50cnlQb2ludCAoKSB7XG4gICAgbGV0IG1pbktleVxuICAgIGxldCBtaW5Db3VudCA9IEluZmluaXR5XG4gICAgbGV0IG51bU9jY3VycmVuY2VzT2ZNaW5cblxuICAgIGZvciAoY29uc3QgWyBrZXkgLCB2YWx1ZSBdIG9mIE9iamVjdC5lbnRyaWVzKHRoaXMuY29uc3RydWN0b3JDYWxsQ291bnRzKSkge1xuICAgICAgaWYgKHZhbHVlIDwgbWluQ291bnQpIHtcbiAgICAgICAgbWluQ291bnQgPSB2YWx1ZVxuICAgICAgICBtaW5LZXkgPSBrZXlcbiAgICAgICAgbnVtT2NjdXJyZW5jZXNPZk1pbiA9IDFcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG1pbkNvdW50KSB7XG4gICAgICAgIG51bU9jY3VycmVuY2VzT2ZNaW4gKz0gMVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlb2YgbWluS2V5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBtaW5pbXVtIGZvdW5kJylcbiAgICB9XG5cbiAgICAvLyBJZiBtb3JlIHRoYW4gb25lIG1vdmllIGNsaXAgaGFkIHRoZSBtaW5pbXVtIG51bWJlciBvZiBjb25zdHJ1Y3Rpb25zIHdlXG4gICAgLy8gYXJlIGluIGFuIHVuZXhwZWN0ZWQgc3RhdGUuXG4gICAgaWYgKG51bU9jY3VycmVuY2VzT2ZNaW4gPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNsZWFyIGVudHJ5IHBvaW50JylcbiAgICB9XG5cbiAgICB0aGlzLmVudHJ5UG9pbnROYW1lID0gbWluS2V5XG4gICAgcmV0dXJuIHRoaXMuZW50cnlQb2ludE5hbWVcbiAgfVxuXG4gIHBhcnNlVHJlZSAoKSB7XG4gICAgdGhpcy5hbmltYXRlUGFyc2VyID0gbmV3IEFuaW1hdGVQYXJzZXIoKVxuICAgIHRoaXMuX3BhcnNlZEVudHJ5UG9pbnQgPSB0aGlzLmFuaW1hdGVQYXJzZXIucGFyc2VNb3ZpZUNsaXAodGhpcy5hbmltYXRpb25UcmVlc1t0aGlzLmVudHJ5UG9pbnROYW1lXSlcblxuICAgIC8vIEZvciBub3cgYXNzdW1lIHRvcCBsZXZlbCBpcyBhIG1vdmllIGNsaXAgYW5kIHRoZSB0b3AgbGV2ZWwgaGFzXG4gICAgLy8gYSBzZWxmIHJlZmVyZW5jaW5nIHR3ZWVuIHRoYXQgd2UgZG8gbm90IHN1cHBvcnQuXG4gICAgLy8gV2UgYXNzdW1lIHRoaXMgc2VsZiByZWZlcmVuY2luZyB0d2VlbiBpcyBhbHdheXMgdGhlIGZpcnN0IHR3ZWVuLlxuICAgIHRoaXMuX3BhcnNlZEVudHJ5UG9pbnQudHdlZW5zID0gdGhpcy5fcGFyc2VkRW50cnlQb2ludC50d2VlbnMuZmlsdGVyKCh0d2VlbikgPT4ge1xuICAgICAgLy8gVE9ETyByZW1vdmUgZGlyZWN0IF9jb2NvSWQgcmVmZXJlbmNlIGhlcmVcbiAgICAgIHJldHVybiB0aGlzLl9wYXJzZWRFbnRyeVBvaW50Ll9jb2NvSWQgIT09IHR3ZWVuLnRhcmdldC5yZWZlcmVuY2VcbiAgICB9KVxuXG4gICAgLy8gVHJhbnNsYXRlIGJvdW5kaW5nIGJveGVzIG9mIHRvcCBsZXZlbCBhbmltYXRpb24uXG4gICAgLy9cbiAgICAvLyBUaGUgZ2FtZSBlbmdpbmUgcmVxdWlyZXMgdGhhdCB0aGUgYm91bmRzIGFyZSBjZW50ZXJlZCBhcm91bmQgdGhlXG4gICAgLy8gY2VudGVyIG9mIHRoZSB0b3AgbGV2ZWwgbW92aWUgY2xpcC5cbiAgICBpZiAodGhpcy5saWJyYXJ5LnByb3BlcnRpZXMpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodFxuICAgICAgfSA9IHRoaXMubGlicmFyeS5wcm9wZXJ0aWVzXG5cbiAgICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBoZWlnaHQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnN0IHF1YXJ0ZXJXaWR0aCA9IHdpZHRoIC8gNFxuICAgICAgICBjb25zdCBxdWFydGVySGVpZ2h0ID0gaGVpZ2h0IC8gNFxuXG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBib3VuZHMsXG4gICAgICAgICAgZnJhbWVCb3VuZHNcbiAgICAgICAgfSA9IHRoaXMuX3BhcnNlZEVudHJ5UG9pbnRcblxuICAgICAgICBpZiAoYm91bmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBib3VuZHNbMF0gLT0gcXVhcnRlcldpZHRoXG4gICAgICAgICAgYm91bmRzWzFdIC09IHF1YXJ0ZXJIZWlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmcmFtZUJvdW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBmcmFtZUJvdW5kIG9mIGZyYW1lQm91bmRzKSB7XG4gICAgICAgICAgICBmcmFtZUJvdW5kWzBdIC09IHF1YXJ0ZXJXaWR0aFxuICAgICAgICAgICAgZnJhbWVCb3VuZFsxXSAtPSBxdWFydGVySGVpZ2h0XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fcGFyc2VkRW50cnlQb2ludC5fY29jb0lkID0gdGhpcy5lbnRyeVBvaW50TmFtZVxuXG4gICAgdGhpcy50cmVlUGFyc2VkID0gdHJ1ZVxuICB9XG59XG4iXX0=