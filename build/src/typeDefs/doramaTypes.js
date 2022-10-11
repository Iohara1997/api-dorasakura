"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  type Dorama {\n    id: ID!\n    title: String\n    summary: String\n    episodes: Int\n    genre: String\n    year: Int\n    trailer: String\n    image: String\n  }\n"], ["\n  type Dorama {\n    id: ID!\n    title: String\n    summary: String\n    episodes: Int\n    genre: String\n    year: Int\n    trailer: String\n    image: String\n  }\n"]);

var _apolloServerExpress = require("apollo-server-express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doramaTypes = (0, _apolloServerExpress.gql)(_templateObject);
exports.default = doramaTypes;