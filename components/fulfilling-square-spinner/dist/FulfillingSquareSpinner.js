'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  height: ', 'px;\n  width: ', 'px;\n  position: relative;\n  border: 4px solid ', ';\n  animation: fulfilling-square-spinner-animation\n    ', 'ms infinite ease;\n\n  * {\n    box-sizing: border-box;\n  }\n\n  .spinner-inner {\n    vertical-align: top;\n    display: inline-block;\n    background-color: ', ';\n    width: 100%;\n    opacity: 1;\n    animation: fulfilling-square-spinner-inner-animation\n      ', 'ms infinite ease-in;\n  }\n\n  @keyframes fulfilling-square-spinner-animation {\n    0% {\n      transform: rotate(0deg);\n    }\n    25% {\n      transform: rotate(180deg);\n    }\n    50% {\n      transform: rotate(180deg);\n    }\n    75% {\n      transform: rotate(360deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes fulfilling-square-spinner-inner-animation {\n    0% {\n      height: 0%;\n    }\n    25% {\n      height: 0%;\n    }\n    50% {\n      height: 100%;\n    }\n    75% {\n      height: 100%;\n    }\n    100% {\n      height: 0%;\n    }\n  }\n'], ['\n  height: ', 'px;\n  width: ', 'px;\n  position: relative;\n  border: 4px solid ', ';\n  animation: fulfilling-square-spinner-animation\n    ', 'ms infinite ease;\n\n  * {\n    box-sizing: border-box;\n  }\n\n  .spinner-inner {\n    vertical-align: top;\n    display: inline-block;\n    background-color: ', ';\n    width: 100%;\n    opacity: 1;\n    animation: fulfilling-square-spinner-inner-animation\n      ', 'ms infinite ease-in;\n  }\n\n  @keyframes fulfilling-square-spinner-animation {\n    0% {\n      transform: rotate(0deg);\n    }\n    25% {\n      transform: rotate(180deg);\n    }\n    50% {\n      transform: rotate(180deg);\n    }\n    75% {\n      transform: rotate(360deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n\n  @keyframes fulfilling-square-spinner-inner-animation {\n    0% {\n      height: 0%;\n    }\n    25% {\n      height: 0%;\n    }\n    50% {\n      height: 100%;\n    }\n    75% {\n      height: 100%;\n    }\n    100% {\n      height: 0%;\n    }\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SquareSpinner = _styledComponents2.default.div(_templateObject, function (props) {
  return props.size;
}, function (props) {
  return props.size;
}, function (props) {
  return props.color;
}, function (props) {
  return props.animationDuration;
}, function (props) {
  return props.color;
}, function (props) {
  return props.animationDuration;
});

var propTypes = {
  size: _propTypes2.default.number,
  animationDuration: _propTypes2.default.number,
  color: _propTypes2.default.string,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};

var defaultProps = {
  size: 50,
  color: '#fff',
  animationDuration: 4000,
  className: ''
};

var FulfillingSquareSpinner = function FulfillingSquareSpinner(_ref) {
  var size = _ref.size,
      color = _ref.color,
      animationDuration = _ref.animationDuration,
      className = _ref.className,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ['size', 'color', 'animationDuration', 'className', 'style']);

  return _react2.default.createElement(
    SquareSpinner,
    Object.assign({
      size: size,
      color: color,
      animationDuration: animationDuration,
      className: 'fulfilling-square-spinner' + (className ? ' ' + className : ''),
      style: style
    }, props),
    _react2.default.createElement('div', { className: 'spinner-inner' })
  );
};

FulfillingSquareSpinner.propTypes = propTypes;
FulfillingSquareSpinner.defaultProps = defaultProps;

exports.default = FulfillingSquareSpinner;

//# sourceMappingURL=FulfillingSquareSpinner.js.map