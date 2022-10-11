"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _database = require("../../database.js");

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userSchema = new _database2.default.Schema({
  email: {
    type: String
  },
  username: {
    type: String
  },
  password: {
    type: String
  },
  doramas: [{
    type: _database2.default.Schema.Types.ObjectId,
    ref: "doramas"
  }],
  role: {
    type: String
  }
});

var User = _database2.default.model("users", userSchema);

exports.default = User;