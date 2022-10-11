"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  type Mutation {\n    createDorama(dorama: DoramaInput): Dorama\n    updateDorama(id: String, dorama: DoramaInput): Dorama\n    deleteDorama(id: String): Dorama\n  }\n  input DoramaInput {\n    title: String\n    summary: String\n    episodes: Int\n    genre: String\n    year: Int\n    trailer: String\n    image: String\n  }\n"], ["\n  type Mutation {\n    createDorama(dorama: DoramaInput): Dorama\n    updateDorama(id: String, dorama: DoramaInput): Dorama\n    deleteDorama(id: String): Dorama\n  }\n  input DoramaInput {\n    title: String\n    summary: String\n    episodes: Int\n    genre: String\n    year: Int\n    trailer: String\n    image: String\n  }\n"]);

var _apolloServerExpress = require("apollo-server-express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doramaMutation = (0, _apolloServerExpress.gql)(_templateObject);
exports.default = doramaMutation;