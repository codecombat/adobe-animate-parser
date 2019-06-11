"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _lodash = _interopRequireDefault(require("lodash.create"));

var _CocoSchema = _interopRequireDefault(require("./CocoSchema"));

var _Shape = _interopRequireDefault(require("./Shape"));
var _Rectangle = _interopRequireDefault(require("./Rectangle"));
var _MovieClip = _interopRequireDefault(require("./MovieClip"));
var _Stage = _interopRequireDefault(require("./Stage"));
var _Tween = _interopRequireDefault(require("./Tween"));
var _Shadow = _interopRequireDefault(require("./Shadow"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}

// function extend (subclass, superclass) {
// 	"use strict";
//
// 	function o() { this.constructor = subclass; }
// 	o.prototype = superclass.prototype;
// 	return (subclass.prototype = new o());
// }


function extend(subclass, superclass) {
  function ExtendedClass() {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
    superclass.call.apply(superclass, [this].concat(args));
  }

  ExtendedClass.prototype = (0, _lodash["default"])(superclass.prototype, {
    constructor: ExtendedClass });


  var extendedClassInstance = new ExtendedClass();
  if (extendedClassInstance instanceof _CocoSchema["default"]) {
    extendedClassInstance.deleteCocoSchema();
  }

  return extendedClassInstance;
}var _default =

{
  extend: extend,

  Shape: _Shape["default"],
  Rectangle: _Rectangle["default"],
  MovieClip: _MovieClip["default"],
  Stage: _Stage["default"],
  Tween: _Tween["default"],

  Shadow: _Shadow["default"] };exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbImV4dGVuZCIsInN1YmNsYXNzIiwic3VwZXJjbGFzcyIsIkV4dGVuZGVkQ2xhc3MiLCJhcmdzIiwiY2FsbCIsInByb3RvdHlwZSIsImNvbnN0cnVjdG9yIiwiZXh0ZW5kZWRDbGFzc0luc3RhbmNlIiwiQ29jb1NjaGVtYSIsImRlbGV0ZUNvY29TY2hlbWEiLCJTaGFwZSIsIlJlY3RhbmdsZSIsIk1vdmllQ2xpcCIsIlN0YWdlIiwiVHdlZW4iLCJTaGFkb3ciXSwibWFwcGluZ3MiOiJ1R0FBQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLFNBQVNBLE1BQVQsQ0FBaUJDLFFBQWpCLEVBQTJCQyxVQUEzQixFQUF1QztBQUNyQyxXQUFTQyxhQUFULEdBQWlDLG1DQUFOQyxJQUFNLG9EQUFOQSxJQUFNO0FBQy9CRixJQUFBQSxVQUFVLENBQUNHLElBQVgsT0FBQUgsVUFBVSxHQUFNLElBQU4sU0FBZUUsSUFBZixFQUFWO0FBQ0Q7O0FBRURELEVBQUFBLGFBQWEsQ0FBQ0csU0FBZCxHQUEwQix3QkFBT0osVUFBVSxDQUFDSSxTQUFsQixFQUE2QjtBQUNyREMsSUFBQUEsV0FBVyxFQUFFSixhQUR3QyxFQUE3QixDQUExQjs7O0FBSUEsTUFBTUsscUJBQXFCLEdBQUcsSUFBSUwsYUFBSixFQUE5QjtBQUNBLE1BQUlLLHFCQUFxQixZQUFZQyxzQkFBckMsRUFBaUQ7QUFDL0NELElBQUFBLHFCQUFxQixDQUFDRSxnQkFBdEI7QUFDRDs7QUFFRCxTQUFPRixxQkFBUDtBQUNELEM7O0FBRWM7QUFDWFIsRUFBQUEsTUFBTSxFQUFOQSxNQURXOztBQUdYVyxFQUFBQSxLQUFLLEVBQUxBLGlCQUhXO0FBSVhDLEVBQUFBLFNBQVMsRUFBVEEscUJBSlc7QUFLWEMsRUFBQUEsU0FBUyxFQUFUQSxxQkFMVztBQU1YQyxFQUFBQSxLQUFLLEVBQUxBLGlCQU5XO0FBT1hDLEVBQUFBLEtBQUssRUFBTEEsaUJBUFc7O0FBU2JDLEVBQUFBLE1BQU0sRUFBTkEsa0JBVGEsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGUgZnJvbSAnbG9kYXNoLmNyZWF0ZSdcblxuaW1wb3J0IENvY29TY2hlbWEgZnJvbSAnLi9Db2NvU2NoZW1hJ1xuXG5pbXBvcnQgU2hhcGUgZnJvbSAnLi9TaGFwZSdcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSAnLi9SZWN0YW5nbGUnXG5pbXBvcnQgTW92aWVDbGlwIGZyb20gJy4vTW92aWVDbGlwJ1xuaW1wb3J0IFN0YWdlIGZyb20gJy4vU3RhZ2UnXG5pbXBvcnQgVHdlZW4gZnJvbSAnLi9Ud2VlbidcbmltcG9ydCBTaGFkb3cgZnJvbSAnLi9TaGFkb3cnXG5cbi8vIGZ1bmN0aW9uIGV4dGVuZCAoc3ViY2xhc3MsIHN1cGVyY2xhc3MpIHtcbi8vIFx0XCJ1c2Ugc3RyaWN0XCI7XG4vL1xuLy8gXHRmdW5jdGlvbiBvKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gc3ViY2xhc3M7IH1cbi8vIFx0by5wcm90b3R5cGUgPSBzdXBlcmNsYXNzLnByb3RvdHlwZTtcbi8vIFx0cmV0dXJuIChzdWJjbGFzcy5wcm90b3R5cGUgPSBuZXcgbygpKTtcbi8vIH1cblxuXG5mdW5jdGlvbiBleHRlbmQgKHN1YmNsYXNzLCBzdXBlcmNsYXNzKSB7XG4gIGZ1bmN0aW9uIEV4dGVuZGVkQ2xhc3MgKC4uLmFyZ3MpIHtcbiAgICBzdXBlcmNsYXNzLmNhbGwodGhpcywgLi4uYXJncylcbiAgfVxuXG4gIEV4dGVuZGVkQ2xhc3MucHJvdG90eXBlID0gY3JlYXRlKHN1cGVyY2xhc3MucHJvdG90eXBlLCB7XG4gICAgY29uc3RydWN0b3I6IEV4dGVuZGVkQ2xhc3NcbiAgfSlcblxuICBjb25zdCBleHRlbmRlZENsYXNzSW5zdGFuY2UgPSBuZXcgRXh0ZW5kZWRDbGFzcygpXG4gIGlmIChleHRlbmRlZENsYXNzSW5zdGFuY2UgaW5zdGFuY2VvZiBDb2NvU2NoZW1hKSB7XG4gICAgZXh0ZW5kZWRDbGFzc0luc3RhbmNlLmRlbGV0ZUNvY29TY2hlbWEoKVxuICB9XG5cbiAgcmV0dXJuIGV4dGVuZGVkQ2xhc3NJbnN0YW5jZVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgZXh0ZW5kLFxuXG4gICAgU2hhcGUsXG4gICAgUmVjdGFuZ2xlLFxuICAgIE1vdmllQ2xpcCxcbiAgICBTdGFnZSxcbiAgICBUd2VlbixcblxuICBTaGFkb3dcbn1cbiJdfQ==