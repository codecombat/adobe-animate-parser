"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = _default;function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};var ownKeys = Object.keys(source);if (typeof Object.getOwnPropertySymbols === 'function') {ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {return Object.getOwnPropertyDescriptor(source, sym).enumerable;}));}ownKeys.forEach(function (key) {_defineProperty(target, key, source[key]);});}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _typeof(obj) {if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance");}function _iterableToArrayLimit(arr, i) {var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}var blockNameCounter = {};

// TODO we need to figure out how to generate unqiue block names for all variables
// If an object is used twice in the same block it will have duplicate blocknames, which will not work
// so we have to generate them separately and make sure they are mapped properly
//
// IDEA: Count usages of the ID and append _0, _1, _2, etc to them
function getBlockNameVar(targetId, blockNameMappings) {
  blockNameCounter[targetId] = blockNameCounter[targetId] || 0;

  var blockName = "bn_".concat(targetId, "_").concat(blockNameCounter[targetId]++);
  blockNameMappings[targetId] = blockName;

  return blockName;
}

function dereferenceNativeObject(nativeObject) {var movieClipRefs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];var shapeRefs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var blockNameMappings = arguments.length > 3 ? arguments[3] : undefined;
  var outputObject = Array.isArray(nativeObject.object) ? [] : {};

  for (var _i = 0, _Object$entries = Object.entries(nativeObject.object); _i < _Object$entries.length; _i++) {var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),key = _Object$entries$_i[0],value = _Object$entries$_i[1];
    var dereferencedValue = value;
    if (_typeof(value) === 'object') {
      var resolvedValue = value;

      // TODO this should be done elsewhere
      if (value.reference) {
        resolvedValue = value.original;
      }

      // If this is an object we have a complex type that we need to unwind
      if (resolvedValue.type === 'movie_clip') {
        movieClipRefs.push({
          bn: getBlockNameVar(resolvedValue._cocoId, blockNameMappings),
          gn: resolvedValue._cocoId,
          a: resolvedValue.constructorArgs,
          t: resolvedValue.transform });


        // Replace with the ID, it will be properly handled when rebuilt
        dereferencedValue = blockNameMappings[resolvedValue._cocoId]; // TODO can we pull this out in a better way
      } else if (resolvedValue.type === 'shape') {
        shapeRefs.push({
          bn: getBlockNameVar(resolvedValue._cocoId, blockNameMappings),
          gn: resolvedValue._cocoId });


        // Replace with the ID, it will be properly handled when rebuilt
        dereferencedValue = blockNameMappings[resolvedValue._cocoId]; // TODO can we pull this out in a better way
      } else if (value.type === 'native_object') {
        dereferencedValue = dereferenceNativeObject(resolvedValue, movieClipRefs, shapeRefs, blockNameMappings);
      } else {
        throw new Error('Invalid target type');
      }
    }

    outputObject[key] = dereferencedValue;
  }

  return outputObject;
}

function _default(schema) {
  var finalShapes = {};var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {
    for (var _iterator = schema.shapes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var shape = _step.value;
      var transform = void 0;
      if (shape.transform) {
        transform = [
        shape.transform.x,
        shape.transform.y];

      }

      finalShapes[shape._cocoId] = _objectSpread({
        t: transform,

        bounds: shape.bounds,
        frameBounds: shape.frameBounds },

      shape.graphics || {});

    }} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator["return"] != null) {_iterator["return"]();}} finally {if (_didIteratorError) {throw _iteratorError;}}}

  var finalAnimations = {};var _iteratorNormalCompletion2 = true;var _didIteratorError2 = false;var _iteratorError2 = undefined;try {
    for (var _iterator2 = schema.animations[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {var animation = _step2.value;
      var shapes = [];
      var animations = [];
      var tweens = [];

      var blockNameMappings = {};var _iteratorNormalCompletion3 = true;var _didIteratorError3 = false;var _iteratorError3 = undefined;try {

        for (var _iterator3 = animation.tweens[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {var tween = _step3.value;
          var finalTween = [];

          // TODO this should be generalized to a resolve method
          var resolvedTween = tween;
          if (resolvedTween.reference) {
            resolvedTween = resolvedTween.originalParsed;
          }

          switch (resolvedTween.target.type) {
            case 'movie_clip':
              animations.push({
                bn: getBlockNameVar(tween.target.reference, blockNameMappings),
                gn: tween.target.reference,
                a: tween.target.original.constructorArgs,
                t: tween.target.original.transform });


              finalTween.push({
                n: 'get',
                a: [blockNameMappings[tween.target.reference]] });


              break;


            case 'shape':
              shapes.push({
                bn: getBlockNameVar(tween.target.reference, blockNameMappings),
                gn: tween.target.reference });


              finalTween.push({
                n: 'get',
                a: [blockNameMappings[tween.target.reference]] });


              break;

            case 'native_object':
              finalTween.push({
                n: 'get',
                a: [tween.target.original.object] });


              break;

            default:
              throw new Error('Invalid target type');}



          var dereferencedTweenCalls = dereferenceNativeObject(
          tween.tweenCalls, animations, shapes, blockNameMappings);var _iteratorNormalCompletion4 = true;var _didIteratorError4 = false;var _iteratorError4 = undefined;try {


            for (var _iterator4 = dereferencedTweenCalls[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {var methodCall = _step4.value;
              finalTween.push({
                n: methodCall.name,
                a: methodCall.args });

            }} catch (err) {_didIteratorError4 = true;_iteratorError4 = err;} finally {try {if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {_iterator4["return"]();}} finally {if (_didIteratorError4) {throw _iteratorError4;}}}

          tweens.push(finalTween);
        }} catch (err) {_didIteratorError3 = true;_iteratorError3 = err;} finally {try {if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {_iterator3["return"]();}} finally {if (_didIteratorError3) {throw _iteratorError3;}}}

      finalAnimations[animation._cocoId] = {
        animations: animations,
        shapes: shapes,
        tweens: tweens,
        containers: [],
        graphics: [],
        bounds: animation.bounds,
        frameBounds: animation.frameBounds };

    }} catch (err) {_didIteratorError2 = true;_iteratorError2 = err;} finally {try {if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {_iterator2["return"]();}} finally {if (_didIteratorError2) {throw _iteratorError2;}}}

  return {
    shapes: finalShapes,
    animations: finalAnimations };

}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvdHJhbnNsYXRlL2luZGV4LmpzIl0sIm5hbWVzIjpbImJsb2NrTmFtZUNvdW50ZXIiLCJnZXRCbG9ja05hbWVWYXIiLCJ0YXJnZXRJZCIsImJsb2NrTmFtZU1hcHBpbmdzIiwiYmxvY2tOYW1lIiwiZGVyZWZlcmVuY2VOYXRpdmVPYmplY3QiLCJuYXRpdmVPYmplY3QiLCJtb3ZpZUNsaXBSZWZzIiwic2hhcGVSZWZzIiwib3V0cHV0T2JqZWN0IiwiQXJyYXkiLCJpc0FycmF5Iiwib2JqZWN0IiwiT2JqZWN0IiwiZW50cmllcyIsImtleSIsInZhbHVlIiwiZGVyZWZlcmVuY2VkVmFsdWUiLCJyZXNvbHZlZFZhbHVlIiwicmVmZXJlbmNlIiwib3JpZ2luYWwiLCJ0eXBlIiwicHVzaCIsImJuIiwiX2NvY29JZCIsImduIiwiYSIsImNvbnN0cnVjdG9yQXJncyIsInQiLCJ0cmFuc2Zvcm0iLCJFcnJvciIsInNjaGVtYSIsImZpbmFsU2hhcGVzIiwic2hhcGVzIiwic2hhcGUiLCJ4IiwieSIsImJvdW5kcyIsImZyYW1lQm91bmRzIiwiZ3JhcGhpY3MiLCJmaW5hbEFuaW1hdGlvbnMiLCJhbmltYXRpb25zIiwiYW5pbWF0aW9uIiwidHdlZW5zIiwidHdlZW4iLCJmaW5hbFR3ZWVuIiwicmVzb2x2ZWRUd2VlbiIsIm9yaWdpbmFsUGFyc2VkIiwidGFyZ2V0IiwibiIsImRlcmVmZXJlbmNlZFR3ZWVuQ2FsbHMiLCJ0d2VlbkNhbGxzIiwibWV0aG9kQ2FsbCIsIm5hbWUiLCJhcmdzIiwiY29udGFpbmVycyJdLCJtYXBwaW5ncyI6Imd3REFBQSxJQUFJQSxnQkFBZ0IsR0FBRyxFQUF2Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBU0MsZUFBVCxDQUEwQkMsUUFBMUIsRUFBb0NDLGlCQUFwQyxFQUF1RDtBQUNuREgsRUFBQUEsZ0JBQWdCLENBQUNFLFFBQUQsQ0FBaEIsR0FBNkJGLGdCQUFnQixDQUFDRSxRQUFELENBQWhC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O0FBQ3BEdUMsVUFBQUEsS0FBSyxDQUFDTyxVQUQ4QyxFQUNsQ1YsVUFEa0MsRUFDdEJSLE1BRHNCLEVBQ2Q5QixpQkFEYyxDQUF0RCxDQXBEa0M7OztBQXdEbEMsa0NBQXlCK0Msc0JBQXpCLG1JQUFpRCxLQUF0Q0UsVUFBc0M7QUFDN0NQLGNBQUFBLFVBQVUsQ0FBQ3ZCLElBQVgsQ0FBZ0I7QUFDWjJCLGdCQUFBQSxDQUFDLEVBQUVHLFVBQVUsQ0FBQ0MsSUFERjtBQUVaM0IsZ0JBQUFBLENBQUMsRUFBRTBCLFVBQVUsQ0FBQ0UsSUFGRixFQUFoQjs7QUFJSCxhQTdEaUM7O0FBK0RsQ1gsVUFBQUEsTUFBTSxDQUFDckIsSUFBUCxDQUFZdUIsVUFBWjtBQUNILFNBdkVzQzs7QUF5RXZDTCxNQUFBQSxlQUFlLENBQUNFLFNBQVMsQ0FBQ2xCLE9BQVgsQ0FBZixHQUFxQztBQUNqQ2lCLFFBQUFBLFVBQVUsRUFBVkEsVUFEaUM7QUFFakNSLFFBQUFBLE1BQU0sRUFBTkEsTUFGaUM7QUFHakNVLFFBQUFBLE1BQU0sRUFBTkEsTUFIaUM7QUFJakNZLFFBQUFBLFVBQVUsRUFBRSxFQUpxQjtBQUtqQ2hCLFFBQUFBLFFBQVEsRUFBRSxFQUx1QjtBQU1qQ0YsUUFBQUEsTUFBTSxFQUFFSyxTQUFTLENBQUNMLE1BTmU7QUFPakNDLFFBQUFBLFdBQVcsRUFBRUksU0FBUyxDQUFDSixXQVBVLEVBQXJDOztBQVNILEtBeEc0Qjs7QUEwRzdCLFNBQU87QUFDSEwsSUFBQUEsTUFBTSxFQUFFRCxXQURMO0FBRUhTLElBQUFBLFVBQVUsRUFBRUQsZUFGVCxFQUFQOztBQUlIIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGJsb2NrTmFtZUNvdW50ZXIgPSB7fVxuXG4vLyBUT0RPIHdlIG5lZWQgdG8gZmlndXJlIG91dCBob3cgdG8gZ2VuZXJhdGUgdW5xaXVlIGJsb2NrIG5hbWVzIGZvciBhbGwgdmFyaWFibGVzXG4vLyBJZiBhbiBvYmplY3QgaXMgdXNlZCB0d2ljZSBpbiB0aGUgc2FtZSBibG9jayBpdCB3aWxsIGhhdmUgZHVwbGljYXRlIGJsb2NrbmFtZXMsIHdoaWNoIHdpbGwgbm90IHdvcmtcbi8vIHNvIHdlIGhhdmUgdG8gZ2VuZXJhdGUgdGhlbSBzZXBhcmF0ZWx5IGFuZCBtYWtlIHN1cmUgdGhleSBhcmUgbWFwcGVkIHByb3Blcmx5XG4vL1xuLy8gSURFQTogQ291bnQgdXNhZ2VzIG9mIHRoZSBJRCBhbmQgYXBwZW5kIF8wLCBfMSwgXzIsIGV0YyB0byB0aGVtXG5mdW5jdGlvbiBnZXRCbG9ja05hbWVWYXIgKHRhcmdldElkLCBibG9ja05hbWVNYXBwaW5ncykge1xuICAgIGJsb2NrTmFtZUNvdW50ZXJbdGFyZ2V0SWRdID0gYmxvY2tOYW1lQ291bnRlclt0YXJnZXRJZF0gfHwgMFxuXG4gICAgY29uc3QgYmxvY2tOYW1lID0gYGJuXyR7dGFyZ2V0SWR9XyR7YmxvY2tOYW1lQ291bnRlclt0YXJnZXRJZF0rK31gXG4gICAgYmxvY2tOYW1lTWFwcGluZ3NbdGFyZ2V0SWRdID0gYmxvY2tOYW1lXG5cbiAgICByZXR1cm4gYmxvY2tOYW1lXG59XG5cbmZ1bmN0aW9uIGRlcmVmZXJlbmNlTmF0aXZlT2JqZWN0IChuYXRpdmVPYmplY3QsIG1vdmllQ2xpcFJlZnMgPSBbXSwgc2hhcGVSZWZzID0gW10sIGJsb2NrTmFtZU1hcHBpbmdzKSB7XG4gICAgY29uc3Qgb3V0cHV0T2JqZWN0ID0gKEFycmF5LmlzQXJyYXkobmF0aXZlT2JqZWN0Lm9iamVjdCkpID8gW10gOiB7fVxuXG4gICAgZm9yIChjb25zdCBbIGtleSwgdmFsdWUgXSBvZiBPYmplY3QuZW50cmllcyhuYXRpdmVPYmplY3Qub2JqZWN0KSkge1xuICAgICAgICBsZXQgZGVyZWZlcmVuY2VkVmFsdWUgPSB2YWx1ZVxuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgbGV0IHJlc29sdmVkVmFsdWUgPSB2YWx1ZVxuXG4gICAgICAgICAgICAvLyBUT0RPIHRoaXMgc2hvdWxkIGJlIGRvbmUgZWxzZXdoZXJlXG4gICAgICAgICAgICBpZiAodmFsdWUucmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRWYWx1ZSA9IHZhbHVlLm9yaWdpbmFsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIElmIHRoaXMgaXMgYW4gb2JqZWN0IHdlIGhhdmUgYSBjb21wbGV4IHR5cGUgdGhhdCB3ZSBuZWVkIHRvIHVud2luZFxuICAgICAgICAgICAgaWYgKHJlc29sdmVkVmFsdWUudHlwZSA9PT0gJ21vdmllX2NsaXAnKSB7XG4gICAgICAgICAgICAgICAgbW92aWVDbGlwUmVmcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgYm46IGdldEJsb2NrTmFtZVZhcihyZXNvbHZlZFZhbHVlLl9jb2NvSWQsIGJsb2NrTmFtZU1hcHBpbmdzKSxcbiAgICAgICAgICAgICAgICAgICAgZ246IHJlc29sdmVkVmFsdWUuX2NvY29JZCxcbiAgICAgICAgICAgICAgICAgICAgYTogcmVzb2x2ZWRWYWx1ZS5jb25zdHJ1Y3RvckFyZ3MsXG4gICAgICAgICAgICAgICAgICAgIHQ6IHJlc29sdmVkVmFsdWUudHJhbnNmb3JtXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIC8vIFJlcGxhY2Ugd2l0aCB0aGUgSUQsIGl0IHdpbGwgYmUgcHJvcGVybHkgaGFuZGxlZCB3aGVuIHJlYnVpbHRcbiAgICAgICAgICAgICAgICBkZXJlZmVyZW5jZWRWYWx1ZSA9IGJsb2NrTmFtZU1hcHBpbmdzW3Jlc29sdmVkVmFsdWUuX2NvY29JZF0gLy8gVE9ETyBjYW4gd2UgcHVsbCB0aGlzIG91dCBpbiBhIGJldHRlciB3YXlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzb2x2ZWRWYWx1ZS50eXBlID09PSAnc2hhcGUnKSB7XG4gICAgICAgICAgICAgICAgc2hhcGVSZWZzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBibjogZ2V0QmxvY2tOYW1lVmFyKHJlc29sdmVkVmFsdWUuX2NvY29JZCwgYmxvY2tOYW1lTWFwcGluZ3MpLFxuICAgICAgICAgICAgICAgICAgICBnbjogcmVzb2x2ZWRWYWx1ZS5fY29jb0lkLFxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIHdpdGggdGhlIElELCBpdCB3aWxsIGJlIHByb3Blcmx5IGhhbmRsZWQgd2hlbiByZWJ1aWx0XG4gICAgICAgICAgICAgICAgZGVyZWZlcmVuY2VkVmFsdWUgPSBibG9ja05hbWVNYXBwaW5nc1tyZXNvbHZlZFZhbHVlLl9jb2NvSWRdIC8vIFRPRE8gY2FuIHdlIHB1bGwgdGhpcyBvdXQgaW4gYSBiZXR0ZXIgd2F5XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlLnR5cGUgPT09ICduYXRpdmVfb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGRlcmVmZXJlbmNlZFZhbHVlID0gZGVyZWZlcmVuY2VOYXRpdmVPYmplY3QocmVzb2x2ZWRWYWx1ZSwgbW92aWVDbGlwUmVmcywgc2hhcGVSZWZzLCBibG9ja05hbWVNYXBwaW5ncylcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHRhcmdldCB0eXBlJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG91dHB1dE9iamVjdFtrZXldID0gZGVyZWZlcmVuY2VkVmFsdWVcbiAgICB9XG5cbiAgICByZXR1cm4gb3V0cHV0T2JqZWN0XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChzY2hlbWEpIHtcbiAgICBjb25zdCBmaW5hbFNoYXBlcyA9IHt9XG4gICAgZm9yIChjb25zdCBzaGFwZSBvZiBzY2hlbWEuc2hhcGVzKSB7XG4gICAgICAgIGxldCB0cmFuc2Zvcm1cbiAgICAgICAgaWYgKHNoYXBlLnRyYW5zZm9ybSkge1xuICAgICAgICAgICAgdHJhbnNmb3JtID0gW1xuICAgICAgICAgICAgICAgIHNoYXBlLnRyYW5zZm9ybS54LFxuICAgICAgICAgICAgICAgIHNoYXBlLnRyYW5zZm9ybS55XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cblxuICAgICAgICBmaW5hbFNoYXBlc1tzaGFwZS5fY29jb0lkXSA9IHtcbiAgICAgICAgICAgIHQ6IHRyYW5zZm9ybSxcblxuICAgICAgICAgICAgYm91bmRzOiBzaGFwZS5ib3VuZHMsXG4gICAgICAgICAgICBmcmFtZUJvdW5kczogc2hhcGUuZnJhbWVCb3VuZHMsXG5cbiAgICAgICAgICAgIC4uLihzaGFwZS5ncmFwaGljcyB8fCB7fSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGZpbmFsQW5pbWF0aW9ucyA9IHt9XG4gICAgZm9yIChjb25zdCBhbmltYXRpb24gb2Ygc2NoZW1hLmFuaW1hdGlvbnMpIHtcbiAgICAgICAgY29uc3Qgc2hhcGVzID0gW11cbiAgICAgICAgY29uc3QgYW5pbWF0aW9ucyA9IFtdXG4gICAgICAgIGNvbnN0IHR3ZWVucyA9IFtdXG5cbiAgICAgICAgY29uc3QgYmxvY2tOYW1lTWFwcGluZ3MgPSB7fVxuXG4gICAgICAgIGZvciAoY29uc3QgdHdlZW4gb2YgYW5pbWF0aW9uLnR3ZWVucykge1xuICAgICAgICAgICAgY29uc3QgZmluYWxUd2VlbiA9IFtdXG5cbiAgICAgICAgICAgIC8vIFRPRE8gdGhpcyBzaG91bGQgYmUgZ2VuZXJhbGl6ZWQgdG8gYSByZXNvbHZlIG1ldGhvZFxuICAgICAgICAgICAgbGV0IHJlc29sdmVkVHdlZW4gPSB0d2VlblxuICAgICAgICAgICAgaWYgKHJlc29sdmVkVHdlZW4ucmVmZXJlbmNlKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZWRUd2VlbiA9IHJlc29sdmVkVHdlZW4ub3JpZ2luYWxQYXJzZWRcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dpdGNoIChyZXNvbHZlZFR3ZWVuLnRhcmdldC50eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbW92aWVfY2xpcCc6XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBibjogZ2V0QmxvY2tOYW1lVmFyKHR3ZWVuLnRhcmdldC5yZWZlcmVuY2UsIGJsb2NrTmFtZU1hcHBpbmdzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGduOiB0d2Vlbi50YXJnZXQucmVmZXJlbmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYTogdHdlZW4udGFyZ2V0Lm9yaWdpbmFsLmNvbnN0cnVjdG9yQXJncyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHQ6IHR3ZWVuLnRhcmdldC5vcmlnaW5hbC50cmFuc2Zvcm1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBmaW5hbFR3ZWVuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgbjogJ2dldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhOiBbIGJsb2NrTmFtZU1hcHBpbmdzW3R3ZWVuLnRhcmdldC5yZWZlcmVuY2VdIF1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBicmVha1xuXG5cbiAgICAgICAgICAgICAgICBjYXNlICdzaGFwZSc6XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJuOiBnZXRCbG9ja05hbWVWYXIodHdlZW4udGFyZ2V0LnJlZmVyZW5jZSwgYmxvY2tOYW1lTWFwcGluZ3MpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ246IHR3ZWVuLnRhcmdldC5yZWZlcmVuY2VcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBmaW5hbFR3ZWVuLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgbjogJ2dldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhOiBbIGJsb2NrTmFtZU1hcHBpbmdzW3R3ZWVuLnRhcmdldC5yZWZlcmVuY2VdIF1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBicmVha1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnbmF0aXZlX29iamVjdCc6XG4gICAgICAgICAgICAgICAgICAgIGZpbmFsVHdlZW4ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuOiAnZ2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGE6IFsgdHdlZW4udGFyZ2V0Lm9yaWdpbmFsLm9iamVjdCBdXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcblxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCB0YXJnZXQgdHlwZScpXG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGVyZWZlcmVuY2VkVHdlZW5DYWxscyA9IGRlcmVmZXJlbmNlTmF0aXZlT2JqZWN0KFxuICAgICAgICAgICAgICB0d2Vlbi50d2VlbkNhbGxzLCBhbmltYXRpb25zLCBzaGFwZXMsIGJsb2NrTmFtZU1hcHBpbmdzXG4gICAgICAgICAgICApXG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgbWV0aG9kQ2FsbCBvZiBkZXJlZmVyZW5jZWRUd2VlbkNhbGxzKSB7XG4gICAgICAgICAgICAgICAgZmluYWxUd2Vlbi5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbjogbWV0aG9kQ2FsbC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBhOiBtZXRob2RDYWxsLmFyZ3NcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0d2VlbnMucHVzaChmaW5hbFR3ZWVuKVxuICAgICAgICB9XG5cbiAgICAgICAgZmluYWxBbmltYXRpb25zW2FuaW1hdGlvbi5fY29jb0lkXSA9IHtcbiAgICAgICAgICAgIGFuaW1hdGlvbnMsXG4gICAgICAgICAgICBzaGFwZXMsXG4gICAgICAgICAgICB0d2VlbnMsXG4gICAgICAgICAgICBjb250YWluZXJzOiBbXSxcbiAgICAgICAgICAgIGdyYXBoaWNzOiBbXSxcbiAgICAgICAgICAgIGJvdW5kczogYW5pbWF0aW9uLmJvdW5kcyxcbiAgICAgICAgICAgIGZyYW1lQm91bmRzOiBhbmltYXRpb24uZnJhbWVCb3VuZHNcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHNoYXBlczogZmluYWxTaGFwZXMsXG4gICAgICAgIGFuaW1hdGlvbnM6IGZpbmFsQW5pbWF0aW9uc1xuICAgIH1cbn1cbiJdfQ==