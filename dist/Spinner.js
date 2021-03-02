'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n        width: 100%;\n        height: 100vh;\n        position: fixed;\n        top: 0;\n        background: ', ';\n\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    '], ['\n        width: 100%;\n        height: 100vh;\n        position: fixed;\n        top: 0;\n        background: ', ';\n\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    ']),
    _templateObject2 = _taggedTemplateLiteral(['\n         div:after{\n            background:', ';\n        }\n    '], ['\n         div:after{\n            background:', ';\n        }\n    ']),
    _templateObject3 = _taggedTemplateLiteral(['\n        \n        :nth-child(1) > * {\n            background: ', ';\n        }\n    '], ['\n        \n        :nth-child(1) > * {\n            background: ', ';\n        }\n    ']);

require('./_spinner.scss');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Spinner = function Spinner(_ref) {
    var type = _ref.type,
        backgroundColor = _ref.backgroundColor,
        spinnerColor = _ref.spinnerColor;


    var defaultBackground = "rgba(90, 90, 90, 0.5)";

    var SpinnerBackground = _styledComponents2.default.div(_templateObject, backgroundColor === undefined || backgroundColor.length === 0 ? defaultBackground : backgroundColor);

    var SpinnerCircle = _styledComponents2.default.div(_templateObject2, spinnerColor === undefined || spinnerColor.length === 0 ? defaultBackground : spinnerColor);

    var SpinnerSquare = _styledComponents2.default.div(_templateObject3, spinnerColor === undefined || spinnerColor.length === 0 ? defaultBackground : spinnerColor);

    var renderSwitch = function renderSwitch(param) {
        switch (param) {
            case 'square':
                return _react2.default.createElement(
                    SpinnerSquare,
                    { className: 'spinner' },
                    _react2.default.createElement('div', { className: '' }),
                    _react2.default.createElement('div', { className: '' }),
                    _react2.default.createElement('div', { className: '' })
                );
            case 'circle':
                return _react2.default.createElement(
                    SpinnerCircle,
                    { className: 'spinner__circle' },
                    _react2.default.createElement('div', { className: '' }),
                    _react2.default.createElement('div', { className: '' }),
                    _react2.default.createElement('div', { className: '' }),
                    _react2.default.createElement('div', { className: '' }),
                    _react2.default.createElement('div', { className: '' }),
                    _react2.default.createElement('div', { className: '' }),
                    _react2.default.createElement('div', { className: '' }),
                    _react2.default.createElement('div', { className: '' }),
                    _react2.default.createElement('div', { className: '' }),
                    _react2.default.createElement('div', { className: '' }),
                    _react2.default.createElement('div', { className: '' }),
                    _react2.default.createElement('div', { className: '' })
                );
            case undefined:
                return _react2.default.createElement(
                    SpinnerSquare,
                    { className: 'spinner' },
                    _react2.default.createElement('div', { className: '' }),
                    _react2.default.createElement('div', { className: '' }),
                    _react2.default.createElement('div', { className: '' })
                );
            default:
                return _react2.default.createElement(
                    'p',
                    null,
                    'There is no such type'
                );
        }
    };

    return _react2.default.createElement(
        SpinnerBackground,
        null,
        renderSwitch(type)
    );
};

exports.default = Spinner;