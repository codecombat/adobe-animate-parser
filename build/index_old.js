"use strict";var _fs = _interopRequireDefault(require("fs"));

var _cjs = _interopRequireDefault(require("./lib/cjs"));





var _parse = require("./lib/parse");
var _translate = _interopRequireDefault(require("./lib/translate"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}

var cjs = _cjs["default"];
var animate;
var library = {};

var importedFile = _fs["default"].readFileSync('../fixtures/ninjawalk/NinjaWalk_animate.original.js');
var execution = "\n    createjs = cjs;\n   \n    try {\n        lib = library;\n    } catch (e) {} // If lib is defined overwrite it\n\n    ".concat(






importedFile, ";\n    \n    animate = AdobeAn;\n");




eval(execution);

// If animate compositions is present, extract library from it, otherwise assume script will set it
if (animate.compositions) {
  var animateCompositions = animate.compositions;
  var compositionKeys = Object.keys(animateCompositions);

  if (compositionKeys.length !== 1) {
    throw new Error('Unexpected number of compositions');
  }

  library = animateCompositions[compositionKeys[0]].getLibrary();
}

if (Object.keys(library).length === 0) {
  throw new Error('Nothing in library');
}

var keyCounts = {};
var movieClips = {};var _loop = function _loop() {var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),

  key = _Object$entries$_i[0],value = _Object$entries$_i[1];
  if (value.prototype instanceof cjs.MovieClip) {
    var usageTrackingFn = function usageTrackingFn() {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
      this.cocoSchema.constructorArgs = args;

      keyCounts[key] = keyCounts[key] || 0;
      keyCounts[key] += 1;

      return value.call.apply(value, [this].concat(args));
    };

    usageTrackingFn.prototype = value.prototype;

    library[key] = usageTrackingFn;
    movieClips[key] = usageTrackingFn;
  }};for (var _i = 0, _Object$entries = Object.entries(library); _i < _Object$entries.length; _i++) {_loop();
}

for (var _i2 = 0, _Object$entries2 = Object.entries(movieClips); _i2 < _Object$entries2.length; _i2++) {var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),key = _Object$entries2$_i[0],value = _Object$entries2$_i[1];
  movieClips[key] = new value();
}

var minKey;
var minCount = Infinity;

for (var _i3 = 0, _Object$entries3 = Object.entries(keyCounts); _i3 < _Object$entries3.length; _i3++) {var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),key = _Object$entries3$_i[0],value = _Object$entries3$_i[1];
  if (value < minCount) {
    minCount = value;
    minKey = key;
  }
}

// TODO handle case where there is no clear minimum

var parsedMovieClip = (0, _parse.parseMovieClip)(movieClips[minKey]);

// For now assume top level is a movie clip and the top level has
// a self referencing tween that we do not support.
// We assume this self referencing tween is always the first tween.
parsedMovieClip.tweens = parsedMovieClip.tweens.filter(function (tween) {
  // TODO remove direct _cocoId reference here
  return parsedMovieClip._cocoId !== tween.target.reference;
});

// Translate bounding boxes of top level animation.
//
// The game engine requires that the bounds are centered around the
// center of the top level movie clip.
if (library.properties) {var _library$properties =



  library.properties,width = _library$properties.width,height = _library$properties.height;

  if (typeof width !== 'undefined' && typeof height !== 'undefined') {
    var quarterWidth = width / 4;
    var quarterHeight = height / 4;var


    bounds =

    parsedMovieClip.bounds,frameBounds = parsedMovieClip.frameBounds;

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

// Manually override the entrypoint ID for output
parsedMovieClip._cocoId = minKey;

var outputSchema = (0, _translate["default"])(_parse.schema);
console.log(JSON.stringify(outputSchema));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleF9vbGQuanMiXSwibmFtZXMiOlsiY2pzIiwiY3JlYXRlanMiLCJhbmltYXRlIiwibGlicmFyeSIsImltcG9ydGVkRmlsZSIsImZzIiwicmVhZEZpbGVTeW5jIiwiZXhlY3V0aW9uIiwiZXZhbCIsImNvbXBvc2l0aW9ucyIsImFuaW1hdGVDb21wb3NpdGlvbnMiLCJjb21wb3NpdGlvbktleXMiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwiRXJyb3IiLCJnZXRMaWJyYXJ5Iiwia2V5Q291bnRzIiwibW92aWVDbGlwcyIsImtleSIsInZhbHVlIiwicHJvdG90eXBlIiwiTW92aWVDbGlwIiwidXNhZ2VUcmFja2luZ0ZuIiwiYXJncyIsImNvY29TY2hlbWEiLCJjb25zdHJ1Y3RvckFyZ3MiLCJjYWxsIiwiZW50cmllcyIsIm1pbktleSIsIm1pbkNvdW50IiwiSW5maW5pdHkiLCJwYXJzZWRNb3ZpZUNsaXAiLCJ0d2VlbnMiLCJmaWx0ZXIiLCJ0d2VlbiIsIl9jb2NvSWQiLCJ0YXJnZXQiLCJyZWZlcmVuY2UiLCJwcm9wZXJ0aWVzIiwid2lkdGgiLCJoZWlnaHQiLCJxdWFydGVyV2lkdGgiLCJxdWFydGVySGVpZ2h0IiwiYm91bmRzIiwiZnJhbWVCb3VuZHMiLCJmcmFtZUJvdW5kIiwib3V0cHV0U2NoZW1hIiwic2NoZW1hIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiJhQUFBOztBQUVBOzs7Ozs7QUFNQTtBQUNBLG9FOztBQUVBLElBQU1BLEdBQUcsR0FBR0MsZUFBWjtBQUNBLElBQUlDLE9BQUo7QUFDQSxJQUFJQyxPQUFPLEdBQUcsRUFBZDs7QUFFQSxJQUFNQyxZQUFZLEdBQUdDLGVBQUdDLFlBQUgsQ0FBZ0IscURBQWhCLENBQXJCO0FBQ0EsSUFBTUMsU0FBUzs7Ozs7OztBQU9USCxZQVBTLHNDQUFmOzs7OztBQVlBSSxJQUFJLENBQUNELFNBQUQsQ0FBSjs7QUFFQTtBQUNBLElBQUlMLE9B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RmtCLENBR2xCQyxNQUhrQix1QkFHbEJBLE1BSGtCOztBQU1wQixNQUFJLE9BQU9ELEtBQVAsS0FBaUIsV0FBakIsSUFBZ0MsT0FBT0MsTUFBUCxLQUFrQixXQUF0RCxFQUFtRTtBQUMvRCxRQUFNQyxZQUFZLEdBQUdGLEtBQUssR0FBRyxDQUE3QjtBQUNBLFFBQU1HLGFBQWEsR0FBR0YsTUFBTSxHQUFHLENBQS9CLENBRitEOzs7QUFLM0RHLElBQUFBLE1BTDJEOztBQU8zRFosSUFBQUEsZUFQMkQsQ0FLM0RZLE1BTDJELENBTTNEQyxXQU4yRCxHQU8zRGIsZUFQMkQsQ0FNM0RhLFdBTjJEOztBQVMvRCxRQUFJRCxNQUFNLENBQUM5QixNQUFQLEdBQWdCLENBQXBCLEVBQXVCO0FBQ25COEIsTUFBQUEsTUFBTSxDQUFDLENBQUQsQ0FBTixJQUFhRixZQUFiO0FBQ0FFLE1BQUFBLE1BQU0sQ0FBQyxDQUFELENBQU4sSUFBYUQsYUFBYjtBQUNIOztBQUVELFFBQUlFLFdBQVcsQ0FBQy9CLE1BQVosR0FBcUIsQ0FBekIsRUFBNEI7QUFDeEIsNkJBQXlCK0IsV0FBekIsOEhBQXNDLEtBQTNCQyxVQUEyQjtBQUNsQ0EsVUFBQUEsVUFBVSxDQUFDLENBQUQsQ0FBVixJQUFpQkosWUFBakI7QUFDQUksVUFBQUEsVUFBVSxDQUFDLENBQUQsQ0FBVixJQUFpQkgsYUFBakI7QUFDSCxTQUp1QjtBQUszQjtBQUNKO0FBQ0o7O0FBRUQ7QUFDQVgsZUFBZSxDQUFDSSxPQUFoQixHQUEwQlAsTUFBMUI7O0FBRUEsSUFBTWtCLFlBQVksR0FBRywyQkFBVUMsYUFBVixDQUFyQjtBQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBSSxDQUFDQyxTQUFMLENBQWVMLFlBQWYsQ0FBWiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tICdmcydcblxuaW1wb3J0IGNyZWF0ZWpzIGZyb20gJy4vbGliL2NqcydcblxuLy8gaW1wb3J0IGxpbmVUd2VlbiBmcm9tICcuL2ZpeHR1cmVzL2xpbmUtdHdlZW4vbGluZS10d2Vlbl9IVE1MNSdcbi8vIGltcG9ydCBuaW5qYVdhbGsgZnJvbSAnLi9maXh0dXJlcy9uaW5qYXdhbGsvTmluamFXYWxrX2FuaW1hdGUnXG4vLyBpbXBvcnQgc3RhdGVUd2VlbiBmcm9tICcuL2ZpeHR1cmVzL3N0YXRlX3R3ZWVuL3N0YXRlVHdlZW4nXG5cbmltcG9ydCB7IHBhcnNlTW92aWVDbGlwLCBzY2hlbWEgfSBmcm9tICcuL2xpYi9wYXJzZSdcbmltcG9ydCB0cmFuc2xhdGUgZnJvbSAnLi9saWIvdHJhbnNsYXRlJ1xuXG5jb25zdCBjanMgPSBjcmVhdGVqc1xubGV0IGFuaW1hdGVcbmxldCBsaWJyYXJ5ID0ge31cblxuY29uc3QgaW1wb3J0ZWRGaWxlID0gZnMucmVhZEZpbGVTeW5jKCcuLi9maXh0dXJlcy9uaW5qYXdhbGsvTmluamFXYWxrX2FuaW1hdGUub3JpZ2luYWwuanMnKVxuY29uc3QgZXhlY3V0aW9uID0gYFxuICAgIGNyZWF0ZWpzID0gY2pzO1xuICAgXG4gICAgdHJ5IHtcbiAgICAgICAgbGliID0gbGlicmFyeTtcbiAgICB9IGNhdGNoIChlKSB7fSAvLyBJZiBsaWIgaXMgZGVmaW5lZCBvdmVyd3JpdGUgaXRcblxuICAgICR7aW1wb3J0ZWRGaWxlfTtcbiAgICBcbiAgICBhbmltYXRlID0gQWRvYmVBbjtcbmBcblxuZXZhbChleGVjdXRpb24pXG5cbi8vIElmIGFuaW1hdGUgY29tcG9zaXRpb25zIGlzIHByZXNlbnQsIGV4dHJhY3QgbGlicmFyeSBmcm9tIGl0LCBvdGhlcndpc2UgYXNzdW1lIHNjcmlwdCB3aWxsIHNldCBpdFxuaWYgKGFuaW1hdGUuY29tcG9zaXRpb25zKSB7XG4gICAgY29uc3QgYW5pbWF0ZUNvbXBvc2l0aW9ucyA9IGFuaW1hdGUuY29tcG9zaXRpb25zXG4gICAgY29uc3QgY29tcG9zaXRpb25LZXlzID0gT2JqZWN0LmtleXMoYW5pbWF0ZUNvbXBvc2l0aW9ucylcblxuICAgIGlmIChjb21wb3NpdGlvbktleXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBudW1iZXIgb2YgY29tcG9zaXRpb25zJylcbiAgICB9XG5cbiAgICBsaWJyYXJ5ID0gYW5pbWF0ZUNvbXBvc2l0aW9uc1tjb21wb3NpdGlvbktleXNbMF1dLmdldExpYnJhcnkoKVxufVxuXG5pZiAoT2JqZWN0LmtleXMobGlicmFyeSkubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdOb3RoaW5nIGluIGxpYnJhcnknKVxufVxuXG5jb25zdCBrZXlDb3VudHMgPSB7fVxuY29uc3QgbW92aWVDbGlwcyA9IHt9XG5cbmZvciAoY29uc3QgWyBrZXksIHZhbHVlIF0gb2YgT2JqZWN0LmVudHJpZXMobGlicmFyeSkpIHtcbiAgICBpZiAodmFsdWUucHJvdG90eXBlIGluc3RhbmNlb2YgY2pzLk1vdmllQ2xpcCkge1xuICAgICAgICBjb25zdCB1c2FnZVRyYWNraW5nRm4gPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAgICAgdGhpcy5jb2NvU2NoZW1hLmNvbnN0cnVjdG9yQXJncyA9IGFyZ3NcblxuICAgICAgICAgICAga2V5Q291bnRzW2tleV0gPSBrZXlDb3VudHNba2V5XSB8fCAwXG4gICAgICAgICAgICBrZXlDb3VudHNba2V5XSArPSAxXG5cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS5jYWxsKHRoaXMsIC4uLmFyZ3MpXG4gICAgICAgIH1cblxuICAgICAgICB1c2FnZVRyYWNraW5nRm4ucHJvdG90eXBlID0gdmFsdWUucHJvdG90eXBlXG5cbiAgICAgICAgbGlicmFyeVtrZXldID0gdXNhZ2VUcmFja2luZ0ZuXG4gICAgICAgIG1vdmllQ2xpcHNba2V5XSA9IHVzYWdlVHJhY2tpbmdGblxuICAgIH1cbn1cblxuZm9yIChjb25zdCBbIGtleSAsIHZhbHVlIF0gb2YgT2JqZWN0LmVudHJpZXMobW92aWVDbGlwcykpIHtcbiAgICBtb3ZpZUNsaXBzW2tleV0gPSBuZXcgdmFsdWUoKVxufVxuXG5sZXQgbWluS2V5XG5sZXQgbWluQ291bnQgPSBJbmZpbml0eVxuXG5mb3IgKGNvbnN0IFsga2V5ICwgdmFsdWUgXSBvZiBPYmplY3QuZW50cmllcyhrZXlDb3VudHMpKSB7XG4gICAgaWYgKHZhbHVlIDwgbWluQ291bnQpIHtcbiAgICAgICAgbWluQ291bnQgPSB2YWx1ZVxuICAgICAgICBtaW5LZXkgPSBrZXlcbiAgICB9XG59XG5cbi8vIFRPRE8gaGFuZGxlIGNhc2Ugd2hlcmUgdGhlcmUgaXMgbm8gY2xlYXIgbWluaW11bVxuXG5sZXQgcGFyc2VkTW92aWVDbGlwID0gcGFyc2VNb3ZpZUNsaXAobW92aWVDbGlwc1ttaW5LZXldKVxuXG4vLyBGb3Igbm93IGFzc3VtZSB0b3AgbGV2ZWwgaXMgYSBtb3ZpZSBjbGlwIGFuZCB0aGUgdG9wIGxldmVsIGhhc1xuLy8gYSBzZWxmIHJlZmVyZW5jaW5nIHR3ZWVuIHRoYXQgd2UgZG8gbm90IHN1cHBvcnQuXG4vLyBXZSBhc3N1bWUgdGhpcyBzZWxmIHJlZmVyZW5jaW5nIHR3ZWVuIGlzIGFsd2F5cyB0aGUgZmlyc3QgdHdlZW4uXG5wYXJzZWRNb3ZpZUNsaXAudHdlZW5zID0gcGFyc2VkTW92aWVDbGlwLnR3ZWVucy5maWx0ZXIoKHR3ZWVuKSA9PiB7XG4gICAgLy8gVE9ETyByZW1vdmUgZGlyZWN0IF9jb2NvSWQgcmVmZXJlbmNlIGhlcmVcbiAgICByZXR1cm4gcGFyc2VkTW92aWVDbGlwLl9jb2NvSWQgIT09IHR3ZWVuLnRhcmdldC5yZWZlcmVuY2Vcbn0pXG5cbi8vIFRyYW5zbGF0ZSBib3VuZGluZyBib3hlcyBvZiB0b3AgbGV2ZWwgYW5pbWF0aW9uLlxuLy9cbi8vIFRoZSBnYW1lIGVuZ2luZSByZXF1aXJlcyB0aGF0IHRoZSBib3VuZHMgYXJlIGNlbnRlcmVkIGFyb3VuZCB0aGVcbi8vIGNlbnRlciBvZiB0aGUgdG9wIGxldmVsIG1vdmllIGNsaXAuXG5pZiAobGlicmFyeS5wcm9wZXJ0aWVzKSB7XG4gICAgY29uc3Qge1xuICAgICAgd2lkdGgsXG4gICAgICBoZWlnaHRcbiAgICB9ID0gbGlicmFyeS5wcm9wZXJ0aWVzXG5cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaGVpZ2h0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zdCBxdWFydGVyV2lkdGggPSB3aWR0aCAvIDRcbiAgICAgICAgY29uc3QgcXVhcnRlckhlaWdodCA9IGhlaWdodCAvIDRcblxuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBib3VuZHMsXG4gICAgICAgICAgICBmcmFtZUJvdW5kc1xuICAgICAgICB9ID0gcGFyc2VkTW92aWVDbGlwXG5cbiAgICAgICAgaWYgKGJvdW5kcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBib3VuZHNbMF0gLT0gcXVhcnRlcldpZHRoXG4gICAgICAgICAgICBib3VuZHNbMV0gLT0gcXVhcnRlckhlaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZyYW1lQm91bmRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZnJhbWVCb3VuZCBvZiBmcmFtZUJvdW5kcykge1xuICAgICAgICAgICAgICAgIGZyYW1lQm91bmRbMF0gLT0gcXVhcnRlcldpZHRoXG4gICAgICAgICAgICAgICAgZnJhbWVCb3VuZFsxXSAtPSBxdWFydGVySGVpZ2h0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIE1hbnVhbGx5IG92ZXJyaWRlIHRoZSBlbnRyeXBvaW50IElEIGZvciBvdXRwdXRcbnBhcnNlZE1vdmllQ2xpcC5fY29jb0lkID0gbWluS2V5XG5cbmNvbnN0IG91dHB1dFNjaGVtYSA9IHRyYW5zbGF0ZShzY2hlbWEpXG5jb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShvdXRwdXRTY2hlbWEpKVxuXG4iXX0=