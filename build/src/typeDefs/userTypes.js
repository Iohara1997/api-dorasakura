"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  type User {\n    id: ID!\n    username: String!\n    email: String!\n    role: String\n    doramas: [ID!]\n  }\n"], ["\n  type User {\n    id: ID!\n    username: String!\n    email: String!\n    role: String\n    doramas: [ID!]\n  }\n"]);

var _apolloServerExpress = require("apollo-server-express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userTypes = (0, _apolloServerExpress.gql)(_templateObject);
exports.default = userTypes;