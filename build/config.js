"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dotenv = require("dotenv");

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

exports.default = {
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  port: process.env.PORT,
  jwtConfig: process.env.JWT
};