"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _CocoSchema2 = _interopRequireDefault(require("./CocoSchema"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function _typeof(obj) {if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}var
Tween = /*#__PURE__*/function (_CocoSchema) {_inherits(Tween, _CocoSchema);_createClass(Tween, null, [{ key: "get",
    // TODO: naming: movieclip & shape
    value: function get(movieClip) {
      return new Tween(movieClip);
    } }]);

  function Tween(target) {var _this;_classCallCheck(this, Tween);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tween).call(this));

    _this.cocoSchema.target = target;
    _this.cocoSchema.methodCalls = [];return _this;
  }_createClass(Tween, [{ key: "wait", value: function wait()

    {for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}
      this.cocoSchema.methodCalls.push({
        name: 'wait',
        args: args });


      return this;
    } }, { key: "call", value: function call(

    _call) {
      return this;
    } }, { key: "to", value: function to()

    {for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}
      this.cocoSchema.methodCalls.push({
        name: 'to',
        args: args });


      return this;
    } }, { key: "target", get: function get()

    {
      return this.cocoSchema.target;
    } }]);return Tween;}(_CocoSchema2["default"]);exports["default"] = Tween;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY2pzL1R3ZWVuLmpzIl0sIm5hbWVzIjpbIlR3ZWVuIiwibW92aWVDbGlwIiwidGFyZ2V0IiwiY29jb1NjaGVtYSIsIm1ldGhvZENhbGxzIiwiYXJncyIsInB1c2giLCJuYW1lIiwiY2FsbCIsIkNvY29TY2hlbWEiXSwibWFwcGluZ3MiOiJ1R0FBQSxtRTtBQUNxQkEsSztBQUNqQjt3QkFDWUMsUyxFQUFXO0FBQ25CLGFBQU8sSUFBSUQsS0FBSixDQUFXQyxTQUFYLENBQVA7QUFDSCxLOztBQUVELGlCQUFhQyxNQUFiLEVBQXFCO0FBQ2pCOztBQUVBLFVBQUtDLFVBQUwsQ0FBZ0JELE1BQWhCLEdBQXlCQSxNQUF6QjtBQUNBLFVBQUtDLFVBQUwsQ0FBZ0JDLFdBQWhCLEdBQThCLEVBQTlCLENBSmlCO0FBS3BCLEc7O0FBRWMsdUNBQU5DLElBQU0sb0RBQU5BLElBQU07QUFDWCxXQUFLRixVQUFMLENBQWdCQyxXQUFoQixDQUE0QkUsSUFBNUIsQ0FBaUM7QUFDN0JDLFFBQUFBLElBQUksRUFBRSxNQUR1QjtBQUU3QkYsUUFBQUEsSUFBSSxFQUFKQSxJQUY2QixFQUFqQzs7O0FBS0EsYUFBTyxJQUFQO0FBQ0gsSzs7QUFFS0csSUFBQUEsSyxFQUFNO0FBQ1IsYUFBTyxJQUFQO0FBQ0gsSzs7QUFFWSx3Q0FBTkgsSUFBTSx5REFBTkEsSUFBTTtBQUNULFdBQUtGLFVBQUwsQ0FBZ0JDLFdBQWhCLENBQTRCRSxJQUE1QixDQUFpQztBQUM3QkMsUUFBQUEsSUFBSSxFQUFFLElBRHVCO0FBRTdCRixRQUFBQSxJQUFJLEVBQUpBLElBRjZCLEVBQWpDOzs7QUFLQSxhQUFPLElBQVA7QUFDSCxLOztBQUVhO0FBQ1YsYUFBTyxLQUFLRixVQUFMLENBQWdCRCxNQUF2QjtBQUNILEssb0JBckM4Qk8sdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29jb1NjaGVtYSBmcm9tICcuL0NvY29TY2hlbWEnXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUd2VlbiBleHRlbmRzIENvY29TY2hlbWEge1xuICAgIC8vIFRPRE86IG5hbWluZzogbW92aWVjbGlwICYgc2hhcGVcbiAgICBzdGF0aWMgZ2V0IChtb3ZpZUNsaXApIHtcbiAgICAgICAgcmV0dXJuIG5ldyBUd2VlbiAobW92aWVDbGlwKVxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yICh0YXJnZXQpIHtcbiAgICAgICAgc3VwZXIgKClcblxuICAgICAgICB0aGlzLmNvY29TY2hlbWEudGFyZ2V0ID0gdGFyZ2V0XG4gICAgICAgIHRoaXMuY29jb1NjaGVtYS5tZXRob2RDYWxscyA9IFtdXG4gICAgfVxuXG4gICAgd2FpdCAoLi4uYXJncykge1xuICAgICAgICB0aGlzLmNvY29TY2hlbWEubWV0aG9kQ2FsbHMucHVzaCh7XG4gICAgICAgICAgICBuYW1lOiAnd2FpdCcsXG4gICAgICAgICAgICBhcmdzXG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICBjYWxsIChjYWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgdG8gKC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5jb2NvU2NoZW1hLm1ldGhvZENhbGxzLnB1c2goe1xuICAgICAgICAgICAgbmFtZTogJ3RvJyxcbiAgICAgICAgICAgIGFyZ3NcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGdldCB0YXJnZXQgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2NvU2NoZW1hLnRhcmdldFxuICAgIH1cbn1cbiJdfQ==