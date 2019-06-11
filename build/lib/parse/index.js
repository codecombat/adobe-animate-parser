"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _lodash = _interopRequireDefault(require("lodash.clone"));
var _objectHash = _interopRequireDefault(require("object-hash"));

var _MovieClip = _interopRequireDefault(require("../cjs/MovieClip"));
var _Shadow = _interopRequireDefault(require("../cjs/Shadow"));
var _Shape = _interopRequireDefault(require("../cjs/Shape"));
var _Tween = _interopRequireDefault(require("../cjs/Tween"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function _typeof(obj) {if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _objectWithoutProperties(source, excluded) {if (source == null) return {};var target = _objectWithoutPropertiesLoose(source, excluded);var key, i;if (Object.getOwnPropertySymbols) {var sourceSymbolKeys = Object.getOwnPropertySymbols(source);for (i = 0; i < sourceSymbolKeys.length; i++) {key = sourceSymbolKeys[i];if (excluded.indexOf(key) >= 0) continue;if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;target[key] = source[key];}}return target;}function _objectWithoutPropertiesLoose(source, excluded) {if (source == null) return {};var target = {};var sourceKeys = Object.keys(source);var key, i;for (i = 0; i < sourceKeys.length; i++) {key = sourceKeys[i];if (excluded.indexOf(key) >= 0) continue;target[key] = source[key];}return target;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}

function randomString(length) {
  var result = '';
  var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;

  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}var

AnimateParser = /*#__PURE__*/function () {
  function AnimateParser() {_classCallCheck(this, AnimateParser);
    this.targetCache = {
      parsed: {},
      original: {} };


    this.schema = {
      shapes: [],
      animations: [],
      references: [],
      nativeObjects: [] };


    this.idCounter = 0;
  }_createClass(AnimateParser, [{ key: "markParsed", value: function markParsed(

    target) {
      if (this.haveParsed(target)) {
        return;
      }

      this.applyId(target, "temp_".concat(this.idCounter++));
      this.targetCache.original[target._cocoId] = target;
    } }, { key: "haveParsed", value: function haveParsed(

    target) {
      return typeof this.getId(target) !== 'undefined';
    } }, { key: "getId", value: function getId(

    target) {
      return target._cocoId;
    } }, { key: "applyId", value: function applyId(

    target, id) {
      target._cocoId = id;
      return target;
    } }, { key: "finalizeId", value: function finalizeId(

    parsedObject) {var

      _cocoId =

      parsedObject._cocoId,objectWithoutId = _objectWithoutProperties(parsedObject, ["_cocoId"]);

      var finalId = (0, _objectHash["default"])(objectWithoutId);

      this.applyId(parsedObject, finalId);
      this.targetCache.original[finalId] = parsedObject;
      delete this.targetCache.original[_cocoId];

      // TODO potentially inefficient
      this.schema.references.forEach(function (reference) {
        if (reference.reference === _cocoId) {
          reference.reference = finalId;
        }
      });

      this.targetCache.parsed[finalId] = this.targetCache.parsed[_cocoId];
      delete this.targetCache.parsed[_cocoId];
    } }, { key: "getReference", value: function getReference(

    entityOrReference) {
      if (entityOrReference.reference) {
        return entityOrReference;
      }

      // TODO this type logic should be consolidated with the logic below
      var type = entityOrReference.type;
      if (!entityOrReference.type) {
        if (entityOrReference instanceof _MovieClip["default"]) {
          type = 'movie_clip';
        } else if (entityOrReference instanceof _Shape["default"]) {
          type = 'shape';
        } else if (entityOrReference instanceof _Shadow["default"]) {
          type = 'shadow';
        } else if (entityOrReference instanceof _Tween["default"]) {
          type = 'tween';
        } else {
          throw new Error('Invalid tween target');
        }
      }

      var reference = {
        type: type,

        // TODO reference should NOT contain original
        original: entityOrReference,
        originalParsed: this.targetCache.parsed[this.getId(entityOrReference)],

        reference: this.getId(entityOrReference) };


      this.markParsed(reference);

      this.schema.references.push(reference);
      return reference;
    } }, { key: "resolveEntity", value: function resolveEntity(

    entityOrReference) {
      if (entityOrReference.reference) {
        return this.targetCache[entityOrReference.reference];
      }

      return entityOrReference;
    } }, { key: "parseRectangle", value: function parseRectangle(

    rectangle) {
      if (!rectangle) {
        return undefined;
      }

      return rectangle.cocoSchema.rectangleConfig;
    } }, { key: "parseShape", value: function parseShape(

    shape) {
      if (this.haveParsed(shape)) {
        return this.getReference(shape);
      }

      this.markParsed(shape);var


      frameBounds =

      shape.frameBounds,nominalBounds = shape.nominalBounds;

      var result = this.applyId({
        type: 'shape',

        frameBounds: frameBounds,
        bounds: nominalBounds,

        transform: shape.cocoSchema.transform,
        graphics: (shape.graphics || {}).cocoSchema },
      this.getId(shape));

      this.finalizeId(result);
      this.schema.shapes.push(result);
      this.targetCache.parsed[this.getId(result)] = result;

      return result;
    } }, { key: "parseMovieClip", value: function parseMovieClip(

    movieClip) {var _this = this;
      if (this.haveParsed(movieClip)) {
        return this.getReference(movieClip);
      }

      this.markParsed(movieClip);var


      frameBounds =

      movieClip.frameBounds,nominalBounds = movieClip.nominalBounds;var


      tweens = movieClip.timeline.tweens;

      var parsedFrameBounds;
      if (frameBounds) {
        parsedFrameBounds = frameBounds.map(function (fb) {return _this.parseRectangle(fb);});
      }

      var result = this.applyId({
        type: 'movie_clip',

        // TODO probably use object spread operator for these
        constructorArgs: movieClip.cocoSchema.constructorArgs,
        transform: movieClip.cocoSchema.transform,

        bounds: this.parseRectangle(nominalBounds),
        frameBounds: parsedFrameBounds,

        tweens: tweens.map(function (t) {return _this.parseTween(t);}) },
      this.getId(movieClip));

      this.finalizeId(result);
      this.schema.animations.push(result);
      this.targetCache.parsed[this.getId(result)] = result;

      return result;
    } }, { key: "parseTween", value: function parseTween(

    tween) {
      if (this.haveParsed(tween)) {
        return this.getReference(tween);
      }

      this.markParsed(tween);var

      target = tween.target;

      var parsedTarget;
      if (target instanceof _MovieClip["default"]) {
        parsedTarget = this.parseMovieClip(target);
      } else if (target instanceof _Shape["default"]) {
        parsedTarget = this.parseShape(target);
      } else if (target.constructor === Object) {
        // If tween target is a plain object make sure to handle it in code
        parsedTarget = this.parseNativeJsObject(target);
      } else {
        throw new Error('Invalid tween target');
      }

      var result = this.applyId({
        type: 'tween',

        target: this.getReference(parsedTarget),
        tweenCalls: this.parseNativeJsObject(tween.cocoSchema.methodCalls) },
      this.getId(tween));

      this.finalizeId(result);
      this.targetCache.parsed[this.getId(result)] = result;

      return result;
    }

    // This function only supports simple JSON objects but does not exactly check for them
  }, { key: "parseNativeJsObject", value: function parseNativeJsObject(object) {
      if (this.haveParsed(object)) {
        return getReference(object);
      }

      // We shallow clone so we can capture the object without the parsing metadata.  We
      // may need to deep clone at some point.
      var shallowClone = (0, _lodash["default"])(object);
      this.markParsed(object);

      var parsedObject = Array.isArray(shallowClone) ? [] : {};
      for (var _i = 0, _Object$entries = Object.entries(shallowClone); _i < _Object$entries.length; _i++) {var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),key = _Object$entries$_i[0],value = _Object$entries$_i[1];
        var parsedTarget = value;

        if (_typeof(value) === 'object') {
          // TODO can we find a way to make this dyanmic so we dont have to remember to add support for each new cjs object we add

          if (value instanceof _MovieClip["default"]) {
            parsedTarget = this.parseMovieClip(value);
          } else if (value instanceof _Shape["default"]) {
            parsedTarget = this.parseShape(value);
          } else if (value instanceof _Tween["default"]) {
            parsedTarget = this.parseTween(value);
          } else if (value instanceof _Tween["default"]) {
            // TODO throwing to be safe here - we have not tested tween support in native JS objects
            throw new Error('Do no support tween here');
          } else if (value.constructor === Object || Array.isArray(value)) {
            parsedTarget = this.parseNativeJsObject(value);
          } else {
            throw new Error('Unexpected value type');
          }
        }

        parsedObject[key] = parsedTarget;
      }

      var result = this.applyId({
        type: 'native_object',
        object: parsedObject },
      this.getId(object));

      this.finalizeId(result);
      this.targetCache.parsed[this.getId(result)] = result;

      return result;
    } }]);return AnimateParser;}();exports["default"] = AnimateParser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvcGFyc2UvaW5kZXguanMiXSwibmFtZXMiOlsicmFuZG9tU3RyaW5nIiwibGVuZ3RoIiwicmVzdWx0IiwiY2hhcmFjdGVycyIsImNoYXJhY3RlcnNMZW5ndGgiLCJpIiwiY2hhckF0IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiQW5pbWF0ZVBhcnNlciIsInRhcmdldENhY2hlIiwicGFyc2VkIiwib3JpZ2luYWwiLCJzY2hlbWEiLCJzaGFwZXMiLCJhbmltYXRpb25zIiwicmVmZXJlbmNlcyIsIm5hdGl2ZU9iamVjdHMiLCJpZENvdW50ZXIiLCJ0YXJnZXQiLCJoYXZlUGFyc2VkIiwiYXBwbHlJZCIsIl9jb2NvSWQiLCJnZXRJZCIsImlkIiwicGFyc2VkT2JqZWN0Iiwib2JqZWN0V2l0aG91dElkIiwiZmluYWxJZCIsImZvckVhY2giLCJyZWZlcmVuY2UiLCJlbnRpdHlPclJlZmVyZW5jZSIsInR5cGUiLCJNb3ZpZUNsaXAiLCJTaGFwZSIsIlNoYWRvdyIsIlR3ZWVuIiwiRXJyb3IiLCJvcmlnaW5hbFBhcnNlZCIsIm1hcmtQYXJzZWQiLCJwdXNoIiwicmVjdGFuZ2xlIiwidW5kZWZpbmVkIiwiY29jb1NjaGVtYSIsInJlY3RhbmdsZUNvbmZpZyIsInNoYXBlIiwiZ2V0UmVmZXJlbmNlIiwiZnJhbWVCb3VuZHMiLCJub21pbmFsQm91bmRzIiwiYm91bmRzIiwidHJhbnNmb3JtIiwiZ3JhcGhpY3MiLCJmaW5hbGl6ZUlkIiwibW92aWVDbGlwIiwidHdlZW5zIiwidGltZWxpbmUiLCJwYXJzZWRGcmFtZUJvdW5kcyIsIm1hcCIsImZiIiwicGFyc2VSZWN0YW5nbGUiLCJjb25zdHJ1Y3RvckFyZ3MiLCJ0IiwicGFyc2VUd2VlbiIsInR3ZWVuIiwicGFyc2VkVGFyZ2V0IiwicGFyc2VNb3ZpZUNsaXAiLCJwYXJzZVNoYXBlIiwiY29uc3RydWN0b3IiLCJPYmplY3QiLCJwYXJzZU5hdGl2ZUpzT2JqZWN0IiwidHdlZW5DYWxscyIsIm1ldGhvZENhbGxzIiwib2JqZWN0Iiwic2hhbGxvd0Nsb25lIiwiQXJyYXkiLCJpc0FycmF5IiwiZW50cmllcyIsImtleSIsInZhbHVlIl0sIm1hcHBpbmdzIjoidUdBQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw2RDs7QUFFQSxTQUFTQSxZQUFULENBQXNCQyxNQUF0QixFQUE4QjtBQUMxQixNQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUNBLE1BQUlDLFVBQVUsR0FBRyxzQ0FBakI7QUFDQSxNQUFJQyxnQkFBZ0IsR0FBR0QsVUFBVSxDQUFDRixNQUFsQzs7QUFFQSxPQUFNLElBQUlJLENBQUMsR0FBRyxDQUFkLEVBQWlCQSxDQUFDLEdBQUdKLE1BQXJCLEVBQTZCSSxDQUFDLEVBQTlCLEVBQW1DO0FBQy9CSCxJQUFBQSxNQUFNLElBQUlDLFVBQVUsQ0FBQ0csTUFBWCxDQUFrQkMsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkwsZ0JBQTNCLENBQWxCLENBQVY7QUFDSDs7QUFFRCxTQUFPRixNQUFQO0FBQ0gsQzs7QUFFb0JRLGE7QUFDakIsMkJBQWU7QUFDWCxTQUFLQyxXQUFMLEdBQW1CO0FBQ2ZDLE1BQUFBLE1BQU0sRUFBRSxFQURPO0FBRWZDLE1BQUFBLFFBQVEsRUFBRSxFQUZLLEVBQW5COzs7QUFLQSxTQUFLQyxNQUFMLEdBQWM7QUFDVkMsTUFBQUEsTUFBTSxFQUFFLEVBREU7QUFFVkMsTUFBQUEsVUFBVSxFQUFFLEVBRkY7QUFHVkMsTUFBQUEsVUFBVSxFQUFFLEVBSEY7QUFJVkMsTUFBQUEsYUFBYSxFQUFFLEVBSkwsRUFBZDs7O0FBT0EsU0FBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNILEc7O0FBRVdDLElBQUFBLE0sRUFBUTtBQUNoQixVQUFJLEtBQUtDLFVBQUwsQ0FBZ0JELE1BQWhCLENBQUosRUFBNkI7QUFDekI7QUFDSDs7QUFFRCxXQUFLRSxPQUFMLENBQWFGLE1BQWIsaUJBQTZCLEtBQUtELFNBQUwsRUFBN0I7QUFDQSxXQUFLUixXQUFM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QixFQUE0QjtBQUMvQjRCLFlBQUFBLFlBQVksR0FBRyxLQUFLRixVQUFMLENBQWdCZ0IsS0FBaEIsQ0FBZjtBQUNILFdBRk0sTUFFQSxJQUFJQSxLQUFLLFlBQVkxQyxpQkFBckIsRUFBNEI7QUFDL0I7QUFDQSxrQkFBTSxJQUFJQyxLQUFKLENBQVUsMEJBQVYsQ0FBTjtBQUNILFdBSE0sTUFHQSxJQUFJeUMsS0FBSyxDQUFDWCxXQUFOLEtBQXNCQyxNQUF0QixJQUFnQ00sS0FBSyxDQUFDQyxPQUFOLENBQWNHLEtBQWQsQ0FBcEMsRUFBMEQ7QUFDN0RkLFlBQUFBLFlBQVksR0FBRyxLQUFLSyxtQkFBTCxDQUF5QlMsS0FBekIsQ0FBZjtBQUNILFdBRk0sTUFFQTtBQUNILGtCQUFNLElBQUl6QyxLQUFKLENBQVUsdUJBQVYsQ0FBTjtBQUNIO0FBQ0o7O0FBRURYLFFBQUFBLFlBQVksQ0FBQ21ELEdBQUQsQ0FBWixHQUFvQmIsWUFBcEI7QUFDSDs7QUFFRCxVQUFNOUQsTUFBTSxHQUFHLEtBQUtvQixPQUFMLENBQWE7QUFDeEJVLFFBQUFBLElBQUksRUFBRSxlQURrQjtBQUV4QndDLFFBQUFBLE1BQU0sRUFBRTlDLFlBRmdCLEVBQWI7QUFHWixXQUFLRixLQUFMLENBQVdnRCxNQUFYLENBSFksQ0FBZjs7QUFLQSxXQUFLcEIsVUFBTCxDQUFnQmxELE1BQWhCO0FBQ0EsV0FBS1MsV0FBTCxDQUFpQkMsTUFBakIsQ0FBd0IsS0FBS1ksS0FBTCxDQUFXdEIsTUFBWCxDQUF4QixJQUE4Q0EsTUFBOUM7O0FBRUEsYUFBT0EsTUFBUDtBQUNILEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xvbmUgZnJvbSAnbG9kYXNoLmNsb25lJ1xuaW1wb3J0IG9iamVjdEhhc2ggZnJvbSAnb2JqZWN0LWhhc2gnXG5cbmltcG9ydCBNb3ZpZUNsaXAgZnJvbSAnLi4vY2pzL01vdmllQ2xpcCc7XG5pbXBvcnQgU2hhZG93IGZyb20gJy4uL2Nqcy9TaGFkb3cnO1xuaW1wb3J0IFNoYXBlIGZyb20gJy4uL2Nqcy9TaGFwZSc7XG5pbXBvcnQgVHdlZW4gZnJvbSAnLi4vY2pzL1R3ZWVuJztcblxuZnVuY3Rpb24gcmFuZG9tU3RyaW5nKGxlbmd0aCkge1xuICAgIHZhciByZXN1bHQgPSAnJ1xuICAgIHZhciBjaGFyYWN0ZXJzID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSdcbiAgICB2YXIgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoXG5cbiAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKyApIHtcbiAgICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW5pbWF0ZVBhcnNlciB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLnRhcmdldENhY2hlID0ge1xuICAgICAgICAgICAgcGFyc2VkOiB7fSxcbiAgICAgICAgICAgIG9yaWdpbmFsOiB7fVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zY2hlbWEgPSB7XG4gICAgICAgICAgICBzaGFwZXM6IFtdLFxuICAgICAgICAgICAgYW5pbWF0aW9uczogW10sXG4gICAgICAgICAgICByZWZlcmVuY2VzOiBbXSxcbiAgICAgICAgICAgIG5hdGl2ZU9iamVjdHM6IFtdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlkQ291bnRlciA9IDBcbiAgICB9XG5cbiAgICBtYXJrUGFyc2VkICh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRoaXMuaGF2ZVBhcnNlZCh0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXBwbHlJZCh0YXJnZXQsIGB0ZW1wXyR7dGhpcy5pZENvdW50ZXIrK31gKVxuICAgICAgICB0aGlzLnRhcmdldENhY2hlLm9yaWdpbmFsW3RhcmdldC5fY29jb0lkXSA9IHRhcmdldFxuICAgIH1cblxuICAgIGhhdmVQYXJzZWQgKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gKHR5cGVvZiB0aGlzLmdldElkKHRhcmdldCkgIT09ICd1bmRlZmluZWQnKVxuICAgIH1cblxuICAgIGdldElkICh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5fY29jb0lkXG4gICAgfVxuXG4gICAgYXBwbHlJZCAodGFyZ2V0LCBpZCkge1xuICAgICAgICB0YXJnZXQuX2NvY29JZCA9IGlkXG4gICAgICAgIHJldHVybiB0YXJnZXRcbiAgICB9XG5cbiAgICBmaW5hbGl6ZUlkIChwYXJzZWRPYmplY3QpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgX2NvY29JZCxcbiAgICAgICAgICAgIC4uLm9iamVjdFdpdGhvdXRJZFxuICAgICAgICB9ID0gcGFyc2VkT2JqZWN0XG5cbiAgICAgICAgY29uc3QgZmluYWxJZCA9IG9iamVjdEhhc2gob2JqZWN0V2l0aG91dElkKVxuXG4gICAgICAgIHRoaXMuYXBwbHlJZChwYXJzZWRPYmplY3QsIGZpbmFsSWQpXG4gICAgICAgIHRoaXMudGFyZ2V0Q2FjaGUub3JpZ2luYWxbZmluYWxJZF0gPSBwYXJzZWRPYmplY3RcbiAgICAgICAgZGVsZXRlIHRoaXMudGFyZ2V0Q2FjaGUub3JpZ2luYWxbX2NvY29JZF1cblxuICAgICAgICAvLyBUT0RPIHBvdGVudGlhbGx5IGluZWZmaWNpZW50XG4gICAgICAgIHRoaXMuc2NoZW1hLnJlZmVyZW5jZXMuZm9yRWFjaCgocmVmZXJlbmNlKSA9PiB7XG4gICAgICAgICAgICBpZiAocmVmZXJlbmNlLnJlZmVyZW5jZSA9PT0gX2NvY29JZCkge1xuICAgICAgICAgICAgICAgIHJlZmVyZW5jZS5yZWZlcmVuY2UgPSBmaW5hbElkXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy50YXJnZXRDYWNoZS5wYXJzZWRbZmluYWxJZF0gPSB0aGlzLnRhcmdldENhY2hlLnBhcnNlZFtfY29jb0lkXVxuICAgICAgICBkZWxldGUgdGhpcy50YXJnZXRDYWNoZS5wYXJzZWRbX2NvY29JZF1cbiAgICB9XG5cbiAgICBnZXRSZWZlcmVuY2UgKGVudGl0eU9yUmVmZXJlbmNlKSB7XG4gICAgICAgIGlmIChlbnRpdHlPclJlZmVyZW5jZS5yZWZlcmVuY2UpIHtcbiAgICAgICAgICAgIHJldHVybiBlbnRpdHlPclJlZmVyZW5jZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gVE9ETyB0aGlzIHR5cGUgbG9naWMgc2hvdWxkIGJlIGNvbnNvbGlkYXRlZCB3aXRoIHRoZSBsb2dpYyBiZWxvd1xuICAgICAgICBsZXQgdHlwZSA9IGVudGl0eU9yUmVmZXJlbmNlLnR5cGVcbiAgICAgICAgaWYoIWVudGl0eU9yUmVmZXJlbmNlLnR5cGUpIHtcbiAgICAgICAgICAgIGlmIChlbnRpdHlPclJlZmVyZW5jZSBpbnN0YW5jZW9mIE1vdmllQ2xpcCkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSAnbW92aWVfY2xpcCdcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZW50aXR5T3JSZWZlcmVuY2UgaW5zdGFuY2VvZiBTaGFwZSkge1xuICAgICAgICAgICAgICAgIHR5cGUgPSAnc2hhcGUnXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudGl0eU9yUmVmZXJlbmNlIGluc3RhbmNlb2YgU2hhZG93KSB7XG4gICAgICAgICAgICAgICAgdHlwZSA9ICdzaGFkb3cnXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGVudGl0eU9yUmVmZXJlbmNlIGluc3RhbmNlb2YgVHdlZW4pIHtcbiAgICAgICAgICAgICAgICB0eXBlID0gJ3R3ZWVuJ1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdHdlZW4gdGFyZ2V0JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlZmVyZW5jZSA9IHtcbiAgICAgICAgICAgIHR5cGUsXG5cbiAgICAgICAgICAgIC8vIFRPRE8gcmVmZXJlbmNlIHNob3VsZCBOT1QgY29udGFpbiBvcmlnaW5hbFxuICAgICAgICAgICAgb3JpZ2luYWw6IGVudGl0eU9yUmVmZXJlbmNlLFxuICAgICAgICAgICAgb3JpZ2luYWxQYXJzZWQ6IHRoaXMudGFyZ2V0Q2FjaGUucGFyc2VkW3RoaXMuZ2V0SWQoZW50aXR5T3JSZWZlcmVuY2UpXSxcblxuICAgICAgICAgICAgcmVmZXJlbmNlOiB0aGlzLmdldElkKGVudGl0eU9yUmVmZXJlbmNlKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXJrUGFyc2VkKHJlZmVyZW5jZSlcblxuICAgICAgICB0aGlzLnNjaGVtYS5yZWZlcmVuY2VzLnB1c2gocmVmZXJlbmNlKVxuICAgICAgICByZXR1cm4gcmVmZXJlbmNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZUVudGl0eSAoZW50aXR5T3JSZWZlcmVuY2UpIHtcbiAgICAgICAgaWYgKGVudGl0eU9yUmVmZXJlbmNlLnJlZmVyZW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0Q2FjaGVbZW50aXR5T3JSZWZlcmVuY2UucmVmZXJlbmNlXVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVudGl0eU9yUmVmZXJlbmNlXG4gICAgfVxuXG4gICAgcGFyc2VSZWN0YW5nbGUgKHJlY3RhbmdsZSkge1xuICAgICAgICBpZiAoIXJlY3RhbmdsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlY3RhbmdsZS5jb2NvU2NoZW1hLnJlY3RhbmdsZUNvbmZpZ1xuICAgIH1cblxuICAgIHBhcnNlU2hhcGUgKHNoYXBlKSB7XG4gICAgICAgIGlmICh0aGlzLmhhdmVQYXJzZWQoc2hhcGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSZWZlcmVuY2Uoc2hhcGUpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm1hcmtQYXJzZWQoc2hhcGUpXG5cbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgZnJhbWVCb3VuZHMsXG4gICAgICAgICAgICBub21pbmFsQm91bmRzXG4gICAgICAgIH0gPSBzaGFwZVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuYXBwbHlJZCh7XG4gICAgICAgICAgICB0eXBlOiAnc2hhcGUnLFxuXG4gICAgICAgICAgICBmcmFtZUJvdW5kcyxcbiAgICAgICAgICAgIGJvdW5kczogbm9taW5hbEJvdW5kcyxcblxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzaGFwZS5jb2NvU2NoZW1hLnRyYW5zZm9ybSxcbiAgICAgICAgICAgIGdyYXBoaWNzOiAoc2hhcGUuZ3JhcGhpY3MgfHwge30pLmNvY29TY2hlbWFcbiAgICAgICAgfSwgdGhpcy5nZXRJZChzaGFwZSkpXG5cbiAgICAgICAgdGhpcy5maW5hbGl6ZUlkKHJlc3VsdClcbiAgICAgICAgdGhpcy5zY2hlbWEuc2hhcGVzLnB1c2gocmVzdWx0KVxuICAgICAgICB0aGlzLnRhcmdldENhY2hlLnBhcnNlZFt0aGlzLmdldElkKHJlc3VsdCldID0gcmVzdWx0XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgIH1cblxuICAgIHBhcnNlTW92aWVDbGlwIChtb3ZpZUNsaXApIHtcbiAgICAgICAgaWYgKHRoaXMuaGF2ZVBhcnNlZChtb3ZpZUNsaXApKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSZWZlcmVuY2UobW92aWVDbGlwKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXJrUGFyc2VkKG1vdmllQ2xpcClcblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBmcmFtZUJvdW5kcyxcbiAgICAgICAgICAgIG5vbWluYWxCb3VuZHNcbiAgICAgICAgfSA9IG1vdmllQ2xpcFxuXG5cbiAgICAgICAgY29uc3QgeyB0d2VlbnMgfSA9IG1vdmllQ2xpcC50aW1lbGluZVxuXG4gICAgICAgIGxldCBwYXJzZWRGcmFtZUJvdW5kc1xuICAgICAgICBpZiAoZnJhbWVCb3VuZHMpIHtcbiAgICAgICAgICAgIHBhcnNlZEZyYW1lQm91bmRzID0gZnJhbWVCb3VuZHMubWFwKGZiID0+IHRoaXMucGFyc2VSZWN0YW5nbGUoZmIpKVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5hcHBseUlkKHtcbiAgICAgICAgICAgIHR5cGU6ICdtb3ZpZV9jbGlwJyxcblxuICAgICAgICAgICAgLy8gVE9ETyBwcm9iYWJseSB1c2Ugb2JqZWN0IHNwcmVhZCBvcGVyYXRvciBmb3IgdGhlc2VcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yQXJnczogbW92aWVDbGlwLmNvY29TY2hlbWEuY29uc3RydWN0b3JBcmdzLFxuICAgICAgICAgICAgdHJhbnNmb3JtOiBtb3ZpZUNsaXAuY29jb1NjaGVtYS50cmFuc2Zvcm0sXG5cbiAgICAgICAgICAgIGJvdW5kczogdGhpcy5wYXJzZVJlY3RhbmdsZShub21pbmFsQm91bmRzKSxcbiAgICAgICAgICAgIGZyYW1lQm91bmRzOiBwYXJzZWRGcmFtZUJvdW5kcyxcblxuICAgICAgICAgICAgdHdlZW5zOiB0d2VlbnMubWFwKHQgPT4gdGhpcy5wYXJzZVR3ZWVuKHQpKVxuICAgICAgICB9LCB0aGlzLmdldElkKG1vdmllQ2xpcCkpXG5cbiAgICAgICAgdGhpcy5maW5hbGl6ZUlkKHJlc3VsdClcbiAgICAgICAgdGhpcy5zY2hlbWEuYW5pbWF0aW9ucy5wdXNoKHJlc3VsdClcbiAgICAgICAgdGhpcy50YXJnZXRDYWNoZS5wYXJzZWRbdGhpcy5nZXRJZChyZXN1bHQpXSA9IHJlc3VsdFxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG5cbiAgICBwYXJzZVR3ZWVuICh0d2Vlbikge1xuICAgICAgICBpZiAodGhpcy5oYXZlUGFyc2VkKHR3ZWVuKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVmZXJlbmNlKHR3ZWVuKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5tYXJrUGFyc2VkKHR3ZWVuKVxuXG4gICAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSB0d2VlblxuXG4gICAgICAgIGxldCBwYXJzZWRUYXJnZXRcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIE1vdmllQ2xpcCkge1xuICAgICAgICAgICAgcGFyc2VkVGFyZ2V0ID0gdGhpcy5wYXJzZU1vdmllQ2xpcCh0YXJnZXQpXG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0IGluc3RhbmNlb2YgU2hhcGUpIHtcbiAgICAgICAgICAgIHBhcnNlZFRhcmdldCA9IHRoaXMucGFyc2VTaGFwZSh0YXJnZXQpXG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgIC8vIElmIHR3ZWVuIHRhcmdldCBpcyBhIHBsYWluIG9iamVjdCBtYWtlIHN1cmUgdG8gaGFuZGxlIGl0IGluIGNvZGVcbiAgICAgICAgICAgIHBhcnNlZFRhcmdldCA9IHRoaXMucGFyc2VOYXRpdmVKc09iamVjdCh0YXJnZXQpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgdHdlZW4gdGFyZ2V0JylcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuYXBwbHlJZCh7XG4gICAgICAgICAgICB0eXBlOiAndHdlZW4nLFxuXG4gICAgICAgICAgICB0YXJnZXQ6IHRoaXMuZ2V0UmVmZXJlbmNlKHBhcnNlZFRhcmdldCksXG4gICAgICAgICAgICB0d2VlbkNhbGxzOiB0aGlzLnBhcnNlTmF0aXZlSnNPYmplY3QodHdlZW4uY29jb1NjaGVtYS5tZXRob2RDYWxscylcbiAgICAgICAgfSwgdGhpcy5nZXRJZCh0d2VlbikpXG5cbiAgICAgICAgdGhpcy5maW5hbGl6ZUlkKHJlc3VsdClcbiAgICAgICAgdGhpcy50YXJnZXRDYWNoZS5wYXJzZWRbdGhpcy5nZXRJZChyZXN1bHQpXSA9IHJlc3VsdFxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG5cbi8vIFRoaXMgZnVuY3Rpb24gb25seSBzdXBwb3J0cyBzaW1wbGUgSlNPTiBvYmplY3RzIGJ1dCBkb2VzIG5vdCBleGFjdGx5IGNoZWNrIGZvciB0aGVtXG4gICAgcGFyc2VOYXRpdmVKc09iamVjdCAob2JqZWN0KSB7XG4gICAgICAgIGlmICh0aGlzLmhhdmVQYXJzZWQob2JqZWN0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGdldFJlZmVyZW5jZShvYmplY3QpXG4gICAgICAgIH1cblxuICAgICAgICAvLyBXZSBzaGFsbG93IGNsb25lIHNvIHdlIGNhbiBjYXB0dXJlIHRoZSBvYmplY3Qgd2l0aG91dCB0aGUgcGFyc2luZyBtZXRhZGF0YS4gIFdlXG4gICAgICAgIC8vIG1heSBuZWVkIHRvIGRlZXAgY2xvbmUgYXQgc29tZSBwb2ludC5cbiAgICAgICAgY29uc3Qgc2hhbGxvd0Nsb25lID0gY2xvbmUob2JqZWN0KVxuICAgICAgICB0aGlzLm1hcmtQYXJzZWQob2JqZWN0KVxuXG4gICAgICAgIGNvbnN0IHBhcnNlZE9iamVjdCA9IChBcnJheS5pc0FycmF5KHNoYWxsb3dDbG9uZSkpID8gW10gOiB7fVxuICAgICAgICBmb3IgKGNvbnN0IFsga2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoc2hhbGxvd0Nsb25lKSkge1xuICAgICAgICAgICAgbGV0IHBhcnNlZFRhcmdldCA9IHZhbHVlXG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETyBjYW4gd2UgZmluZCBhIHdheSB0byBtYWtlIHRoaXMgZHlhbm1pYyBzbyB3ZSBkb250IGhhdmUgdG8gcmVtZW1iZXIgdG8gYWRkIHN1cHBvcnQgZm9yIGVhY2ggbmV3IGNqcyBvYmplY3Qgd2UgYWRkXG5cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBNb3ZpZUNsaXApIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkVGFyZ2V0ID0gdGhpcy5wYXJzZU1vdmllQ2xpcCh2YWx1ZSlcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgU2hhcGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkVGFyZ2V0ID0gdGhpcy5wYXJzZVNoYXBlKHZhbHVlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgaW5zdGFuY2VvZiBUd2Vlbikge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRUYXJnZXQgPSB0aGlzLnBhcnNlVHdlZW4odmFsdWUpXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFR3ZWVuKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gdGhyb3dpbmcgdG8gYmUgc2FmZSBoZXJlIC0gd2UgaGF2ZSBub3QgdGVzdGVkIHR3ZWVuIHN1cHBvcnQgaW4gbmF0aXZlIEpTIG9iamVjdHNcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEbyBubyBzdXBwb3J0IHR3ZWVuIGhlcmUnKVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUuY29uc3RydWN0b3IgPT09IE9iamVjdCB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJzZWRUYXJnZXQgPSB0aGlzLnBhcnNlTmF0aXZlSnNPYmplY3QodmFsdWUpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIHZhbHVlIHR5cGUnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFyc2VkT2JqZWN0W2tleV0gPSBwYXJzZWRUYXJnZXRcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuYXBwbHlJZCh7XG4gICAgICAgICAgICB0eXBlOiAnbmF0aXZlX29iamVjdCcsXG4gICAgICAgICAgICBvYmplY3Q6IHBhcnNlZE9iamVjdFxuICAgICAgICB9LCB0aGlzLmdldElkKG9iamVjdCkpXG5cbiAgICAgICAgdGhpcy5maW5hbGl6ZUlkKHJlc3VsdClcbiAgICAgICAgdGhpcy50YXJnZXRDYWNoZS5wYXJzZWRbdGhpcy5nZXRJZChyZXN1bHQpXSA9IHJlc3VsdFxuXG4gICAgICAgIHJldHVybiByZXN1bHRcbiAgICB9XG59XG4iXX0=