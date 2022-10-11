"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _database = require("../../database.js");

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doramaSchema = new _database2.default.Schema({
  title: {
    type: String
  },
  summary: {
    type: String
  },
  genre: {
    type: String
  },
  episodes: {
    type: Number
  },
  year: {
    type: Number
  },
  trailer: {
    type: String
  },
  image: {
    type: String
  }
});

var Dorama = _database2.default.model("doramas", doramaSchema);

exports.default = Dorama;