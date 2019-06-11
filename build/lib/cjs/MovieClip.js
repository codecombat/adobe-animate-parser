"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports["default"] = void 0;var _CocoSchema3 = _interopRequireDefault(require("./CocoSchema"));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { "default": obj };}function _typeof(obj) {if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {_typeof = function _typeof(obj) {return typeof obj;};} else {_typeof = function _typeof(obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;};}return _typeof(obj);}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _possibleConstructorReturn(self, call) {if (call && (_typeof(call) === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}var

Timeline = /*#__PURE__*/function (_CocoSchema) {_inherits(Timeline, _CocoSchema);
  function Timeline() {var _this;_classCallCheck(this, Timeline);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Timeline).call(this));

    _this.cocoSchema.tweens = [];return _this;
  }_createClass(Timeline, [{ key: "addTween", value: function addTween(

    tween) {
      this.cocoSchema.tweens.push(tween);
    }

    // Override Tween property
  }, { key: "tweens", get: function get() {
      return this.cocoSchema.tweens;
    } }]);return Timeline;}(_CocoSchema3["default"]);var


MovieClip = /*#__PURE__*/function (_CocoSchema2) {_inherits(MovieClip, _CocoSchema2);
  function MovieClip() {var _this2;_classCallCheck(this, MovieClip);
    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(MovieClip).call(this));for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}

    _this2.cocoSchema.constructorArgs = args;return _this2;
  }_createClass(MovieClip, [{ key: "initialize", value: function initialize()

    {
    } }, { key: "on", value: function on()

    {} }, { key: "setTransform", value: function setTransform()

    {for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {args[_key2] = arguments[_key2];}
      this.cocoSchema.transform = args;

      return this;
    }

    // Lazily create timeline to make sure that each instance of a movie clip has
    // its own timeline.  Due to the way that animate chains prototypes setting this
    // in the constructor results in shared state across multiple instances of the
    // movie clip subclass
  }, { key: "timeline", get: function get() {
      if (!this._timeline) {
        this._timeline = new Timeline();
      }

      return this._timeline;
    } }]);return MovieClip;}(_CocoSchema3["default"]);exports["default"] = MovieClip;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvY2pzL01vdmllQ2xpcC5qcyJdLCJuYW1lcyI6WyJUaW1lbGluZSIsImNvY29TY2hlbWEiLCJ0d2VlbnMiLCJ0d2VlbiIsInB1c2giLCJDb2NvU2NoZW1hIiwiTW92aWVDbGlwIiwiYXJncyIsImNvbnN0cnVjdG9yQXJncyIsInRyYW5zZm9ybSIsIl90aW1lbGluZSJdLCJtYXBwaW5ncyI6InVHQUFBLG1FOztBQUVNQSxRO0FBQ0Ysc0JBQWU7QUFDWDs7QUFFQSxVQUFLQyxVQUFMLENBQWdCQyxNQUFoQixHQUF5QixFQUF6QixDQUhXO0FBSWQsRzs7QUFFU0MsSUFBQUEsSyxFQUFPO0FBQ2IsV0FBS0YsVUFBTCxDQUFnQkMsTUFBaEIsQ0FBdUJFLElBQXZCLENBQTRCRCxLQUE1QjtBQUNIOztBQUVEOzBDQUNjO0FBQ1YsYUFBTyxLQUFLRixVQUFMLENBQWdCQyxNQUF2QjtBQUNILEssdUJBZGtCRyx1Qjs7O0FBaUJGQyxTO0FBQ2pCLHVCQUFxQjtBQUNqQixxRkFEaUIsa0NBQU5DLElBQU0sb0RBQU5BLElBQU07O0FBR2pCLFdBQUtOLFVBQUwsQ0FBZ0JPLGVBQWhCLEdBQWtDRCxJQUFsQyxDQUhpQjtBQUlwQixHOztBQUVhO0FBQ2IsSzs7QUFFSyxLQUFFLEM7O0FBRWUsd0NBQU5BLElBQU0seURBQU5BLElBQU07QUFDbkIsV0FBS04sVUFBTCxDQUFnQlEsU0FBaEIsR0FBNEJGLElBQTVCOztBQUVBLGFBQU8sSUFBUDtBQUNIOztBQUVEO0FBQ0E7QUFDQTtBQUNBOzRDQUNnQjtBQUNaLFVBQUksQ0FBQyxLQUFLRyxTQUFWLEVBQXFCO0FBQ2pCLGFBQUtBLFNBQUwsR0FBaUIsSUFBSVYsUUFBSixFQUFqQjtBQUNIOztBQUVELGFBQU8sS0FBS1UsU0FBWjtBQUNILEssd0JBNUJrQ0wsdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29jb1NjaGVtYSBmcm9tICcuL0NvY29TY2hlbWEnXG5cbmNsYXNzIFRpbWVsaW5lIGV4dGVuZHMgQ29jb1NjaGVtYSB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpXG5cbiAgICAgICAgdGhpcy5jb2NvU2NoZW1hLnR3ZWVucyA9IFtdXG4gICAgfVxuXG4gICAgYWRkVHdlZW4gKHR3ZWVuKSB7XG4gICAgICAgIHRoaXMuY29jb1NjaGVtYS50d2VlbnMucHVzaCh0d2VlbilcbiAgICB9XG5cbiAgICAvLyBPdmVycmlkZSBUd2VlbiBwcm9wZXJ0eVxuICAgIGdldCB0d2VlbnMgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb2NvU2NoZW1hLnR3ZWVuc1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWVDbGlwIGV4dGVuZHMgQ29jb1NjaGVtYSB7XG4gICAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgICAgICBzdXBlcigpXG5cbiAgICAgICAgdGhpcy5jb2NvU2NoZW1hLmNvbnN0cnVjdG9yQXJncyA9IGFyZ3NcbiAgICB9XG5cbiAgICBpbml0aWFsaXplICgpIHtcbiAgICB9XG5cbiAgICBvbiAoKSB7fVxuXG4gICAgc2V0VHJhbnNmb3JtICguLi5hcmdzKSB7XG4gICAgICAgIHRoaXMuY29jb1NjaGVtYS50cmFuc2Zvcm0gPSBhcmdzXG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvLyBMYXppbHkgY3JlYXRlIHRpbWVsaW5lIHRvIG1ha2Ugc3VyZSB0aGF0IGVhY2ggaW5zdGFuY2Ugb2YgYSBtb3ZpZSBjbGlwIGhhc1xuICAgIC8vIGl0cyBvd24gdGltZWxpbmUuICBEdWUgdG8gdGhlIHdheSB0aGF0IGFuaW1hdGUgY2hhaW5zIHByb3RvdHlwZXMgc2V0dGluZyB0aGlzXG4gICAgLy8gaW4gdGhlIGNvbnN0cnVjdG9yIHJlc3VsdHMgaW4gc2hhcmVkIHN0YXRlIGFjcm9zcyBtdWx0aXBsZSBpbnN0YW5jZXMgb2YgdGhlXG4gICAgLy8gbW92aWUgY2xpcCBzdWJjbGFzc1xuICAgIGdldCB0aW1lbGluZSAoKSB7XG4gICAgICAgIGlmICghdGhpcy5fdGltZWxpbmUpIHtcbiAgICAgICAgICAgIHRoaXMuX3RpbWVsaW5lID0gbmV3IFRpbWVsaW5lKClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl90aW1lbGluZVxuICAgIH1cbn1cbiJdfQ==