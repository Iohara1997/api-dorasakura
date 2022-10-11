"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require("./config.js");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var username = encodeURIComponent(_config2.default.dbUsername);
var password = encodeURIComponent(_config2.default.dbPassword);
var uri = "mongodb+srv://" + username + ":" + password + "@cluster0.xossinr.mongodb.net/?retryWrites=true&w=majority";

_mongoose2.default.connect(uri, {
  dbName: "Dorasakura",
  useNewUrlParser: true,
  useUnifiedTopology: true
}, function (err) {
  return err ? console.log(err) : console.log("Connected to database");
});

exports.default = _mongoose2.default;