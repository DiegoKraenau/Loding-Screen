"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

require("./_spinner.scss");

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Spinner = function Spinner() {
    return _react2.default.createElement(
        "div",
        { className: "overlay center" },
        _react2.default.createElement(
            "div",
            { className: "spinner" },
            _react2.default.createElement("div", { className: "" }),
            _react2.default.createElement("div", { className: "" }),
            _react2.default.createElement("div", { className: "" })
        )
    );
};

exports.default = Spinner;