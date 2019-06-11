"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _CocoSchema2 = _interopRequireDefault(require("./CocoSchema"));
var _Graphics = _interopRequireDefault(require("./Graphics"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function _typeof(obj) {if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}var

Shape = /*#__PURE__*/function (_CocoSchema) {_inherits(Shape, _CocoSchema);
  function Shape() {var _this;_classCallCheck(this, Shape);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Shape).call(this));

    _this.graphics = new _Graphics["default"]();return _this;
  }_createClass(Shape, [{ key: "setTransform", value: function setTransform(

    x, y) {
      this.cocoSchema.transform = {
        x: x, y: y };


      return this;
    } }]);return Shape;}(_CocoSchema2["default"]);exports["default"] = Shape;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY2pzL1NoYXBlLmpzIl0sIm5hbWVzIjpbIlNoYXBlIiwiZ3JhcGhpY3MiLCJHcmFwaGljcyIsIngiLCJ5IiwiY29jb1NjaGVtYSIsInRyYW5zZm9ybSIsIkNvY29TY2hlbWEiXSwibWFwcGluZ3MiOiJ1R0FBQTtBQUNBLDhEOztBQUVxQkEsSztBQUNqQixtQkFBYztBQUNWOztBQUVBLFVBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsb0JBQUosRUFBaEIsQ0FIVTtBQUliLEc7O0FBRVlDLElBQUFBLEMsRUFBR0MsQyxFQUFHO0FBQ2YsV0FBS0MsVUFBTCxDQUFnQkMsU0FBaEIsR0FBNEI7QUFDeEJILFFBQUFBLENBQUMsRUFBREEsQ0FEd0IsRUFDckJDLENBQUMsRUFBREEsQ0FEcUIsRUFBNUI7OztBQUlBLGFBQU8sSUFBUDtBQUNILEssb0JBYjhCRyx1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2NvU2NoZW1hIGZyb20gJy4vQ29jb1NjaGVtYSdcbmltcG9ydCBHcmFwaGljcyBmcm9tICcuL0dyYXBoaWNzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFwZSBleHRlbmRzIENvY29TY2hlbWEge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpXG5cbiAgICAgICAgdGhpcy5ncmFwaGljcyA9IG5ldyBHcmFwaGljcygpXG4gICAgfVxuXG4gICAgc2V0VHJhbnNmb3JtKHgsIHkpIHtcbiAgICAgICAgdGhpcy5jb2NvU2NoZW1hLnRyYW5zZm9ybSA9IHtcbiAgICAgICAgICAgIHgsIHlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufVxuIl19