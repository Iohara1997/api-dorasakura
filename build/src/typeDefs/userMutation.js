"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _taggedTemplateLiteral2 = require("babel-runtime/helpers/taggedTemplateLiteral");

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(["\n  type Mutation {\n    registerUser(\n      username: String!\n      email: String!\n      password: String!\n      role: String\n    ): AuthPayload!\n    login(email: String!, password: String!): AuthPayload!\n    updateUser(id: String, password: String, doramas: [ID]): UpdatePayload!\n  }\n  type AuthPayload {\n    token: String!\n    username: String!\n    email: String!\n    role: String\n  }\n  type UpdatePayload {\n    password: String!\n    doramas: [ID!]\n  }\n"], ["\n  type Mutation {\n    registerUser(\n      username: String!\n      email: String!\n      password: String!\n      role: String\n    ): AuthPayload!\n    login(email: String!, password: String!): AuthPayload!\n    updateUser(id: String, password: String, doramas: [ID]): UpdatePayload!\n  }\n  type AuthPayload {\n    token: String!\n    username: String!\n    email: String!\n    role: String\n  }\n  type UpdatePayload {\n    password: String!\n    doramas: [ID!]\n  }\n"]);

var _apolloServerExpress = require("apollo-server-express");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mutation = (0, _apolloServerExpress.gql)(_templateObject);

exports.default = mutation;