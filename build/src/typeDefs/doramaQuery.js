"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  type Query {\n    allDoramas: [Dorama!]!\n    dorama(id: ID!): Dorama\n  }\n"], ["\n  type Query {\n    allDoramas: [Dorama!]!\n    dorama(id: ID!): Dorama\n  }\n"]);

var _apolloServerExpress = require("apollo-server-express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doramaQuery = (0, _apolloServerExpress.gql)(_templateObject);
exports.default = doramaQuery;