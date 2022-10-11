"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userTypes = require("./userTypes.js");

var _userTypes2 = _interopRequireDefault(_userTypes);

var _userMutation = require("./userMutation.js");

var _userMutation2 = _interopRequireDefault(_userMutation);

var _userQuery = require("./userQuery.js");

var _userQuery2 = _interopRequireDefault(_userQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var typeDefs = [_userQuery2.default, _userMutation2.default, _userTypes2.default];

exports.default = typeDefs;