"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _doramaQuery = require("./doramaQuery.js");

var _doramaQuery2 = _interopRequireDefault(_doramaQuery);

var _doramaMutation = require("./doramaMutation.js");

var _doramaMutation2 = _interopRequireDefault(_doramaMutation);

var _doramaTypes = require("./doramaTypes.js");

var _doramaTypes2 = _interopRequireDefault(_doramaTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeDefs = [_doramaQuery2.default, _doramaMutation2.default, _doramaTypes2.default];

exports.default = typeDefs;