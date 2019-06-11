"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _CocoSchema2 = _interopRequireDefault(require("./CocoSchema"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function _typeof(obj) {if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}var

Graphics = /*#__PURE__*/function (_CocoSchema) {_inherits(Graphics, _CocoSchema);function Graphics() {_classCallCheck(this, Graphics);return _possibleConstructorReturn(this, _getPrototypeOf(Graphics).apply(this, arguments));}_createClass(Graphics, [{ key: "f", value: function f(
    _f) {
      this.cocoSchema.fc = _f;
      return this;
    } }, { key: "s", value: function s(

    _s) {
      // TODO may be able to call this multiple times.  If so will need to have each
      // call to s() return a new object that collects the data on subsequent calls
      //
      // Collect each of these objects in an array on coco schema
      return this;
    } }, { key: "p", value: function p(

    _p) {
      this.cocoSchema.p = _p;
      return this;
    } }, { key: "rf", value: function rf()

    {for (var _len = arguments.length, _rf = new Array(_len), _key = 0; _key < _len; _key++) {_rf[_key] = arguments[_key];}
      this.cocoSchema.rf = _rf;
      return this;
    } }, { key: "lf", value: function lf()

    {for (var _len2 = arguments.length, _lf = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {_lf[_key2] = arguments[_key2];}
      this.cocoSchema.lf = _lf;
      return this;
    } }]);return Graphics;}(_CocoSchema2["default"]);exports["default"] = Graphics;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY2pzL0dyYXBoaWNzLmpzIl0sIm5hbWVzIjpbIkdyYXBoaWNzIiwiZiIsImNvY29TY2hlbWEiLCJmYyIsInMiLCJwIiwicmYiLCJsZiIsIkNvY29TY2hlbWEiXSwibWFwcGluZ3MiOiJ1R0FBQSxtRTs7QUFFcUJBLFE7QUFDZEMsSUFBQUEsRSxFQUFHO0FBQ0YsV0FBS0MsVUFBTCxDQUFnQkMsRUFBaEIsR0FBcUJGLEVBQXJCO0FBQ0EsYUFBTyxJQUFQO0FBQ0gsSzs7QUFFRUcsSUFBQUEsRSxFQUFHO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFPLElBQVA7QUFDSCxLOztBQUVFQyxJQUFBQSxFLEVBQUc7QUFDRixXQUFLSCxVQUFMLENBQWdCRyxDQUFoQixHQUFvQkEsRUFBcEI7QUFDQSxhQUFPLElBQVA7QUFDSCxLOztBQUVVLHVDQUFKQyxHQUFJLG9EQUFKQSxHQUFJO0FBQ1AsV0FBS0osVUFBTCxDQUFnQkksRUFBaEIsR0FBcUJBLEdBQXJCO0FBQ0EsYUFBTyxJQUFQO0FBQ0gsSzs7QUFFVSx3Q0FBSkMsR0FBSSx5REFBSkEsR0FBSTtBQUNQLFdBQUtMLFVBQUwsQ0FBZ0JLLEVBQWhCLEdBQXFCQSxHQUFyQjtBQUNBLGFBQU8sSUFBUDtBQUNILEssdUJBM0JpQ0MsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29jb1NjaGVtYSBmcm9tICcuL0NvY29TY2hlbWEnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdyYXBoaWNzIGV4dGVuZHMgQ29jb1NjaGVtYSB7XG4gICAgZiAoZikge1xuICAgICAgICB0aGlzLmNvY29TY2hlbWEuZmMgPSBmXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgcyAocykge1xuICAgICAgICAvLyBUT0RPIG1heSBiZSBhYmxlIHRvIGNhbGwgdGhpcyBtdWx0aXBsZSB0aW1lcy4gIElmIHNvIHdpbGwgbmVlZCB0byBoYXZlIGVhY2hcbiAgICAgICAgLy8gY2FsbCB0byBzKCkgcmV0dXJuIGEgbmV3IG9iamVjdCB0aGF0IGNvbGxlY3RzIHRoZSBkYXRhIG9uIHN1YnNlcXVlbnQgY2FsbHNcbiAgICAgICAgLy9cbiAgICAgICAgLy8gQ29sbGVjdCBlYWNoIG9mIHRoZXNlIG9iamVjdHMgaW4gYW4gYXJyYXkgb24gY29jbyBzY2hlbWFcbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBwIChwKSB7XG4gICAgICAgIHRoaXMuY29jb1NjaGVtYS5wID0gcFxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIHJmICguLi5yZikge1xuICAgICAgICB0aGlzLmNvY29TY2hlbWEucmYgPSByZlxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGxmICguLi5sZikge1xuICAgICAgICB0aGlzLmNvY29TY2hlbWEubGYgPSBsZlxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cbn1cbiJdfQ==