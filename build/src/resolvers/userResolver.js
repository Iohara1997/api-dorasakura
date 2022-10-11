"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _bcryptjs = require("bcryptjs");

var _jsonwebtoken = require("jsonwebtoken");

var _userSchema = require("../models/userSchema.js");

var _userSchema2 = _interopRequireDefault(_userSchema);

var _config = require("../../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var userResolver = {
  Query: {
    me: function me(_, args, _ref) {
      var _this = this;

      var user = _ref.user;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (user) {
                  _context.next = 2;
                  break;
                }

                throw new Error("You are not authenticated");

              case 2:
                _context.next = 4;
                return _userSchema2.default.findById(user.id);

              case 4:
                return _context.abrupt("return", _context.sent);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    },
    user: function user(root, _ref2, _ref3) {
      var _this2 = this;

      var id = _ref2.id;
      var user = _ref3.user;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;

                if (user) {
                  _context2.next = 3;
                  break;
                }

                throw new Error("You are not authenticated!");

              case 3:
                _context2.next = 5;
                return _userSchema2.default.findById(id);

              case 5:
                return _context2.abrupt("return", _context2.sent);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                throw new Error(_context2.t0.message);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2, [[0, 8]]);
      }))();
    },
    allUsers: function allUsers(root, args, _ref4) {
      var _this3 = this;

      var user = _ref4.user;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;

                if (user) {
                  _context3.next = 3;
                  break;
                }

                throw new Error("You are not authenticated!");

              case 3:
                _context3.next = 5;
                return _userSchema2.default.find({});

              case 5:
                return _context3.abrupt("return", _context3.sent);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](0);
                throw new Error(_context3.t0.message);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this3, [[0, 8]]);
      }))();
    }
  },
  Mutation: {
    registerUser: function registerUser(root, _ref5) {
      var _this4 = this;

      var username = _ref5.username,
          email = _ref5.email,
          password = _ref5.password,
          role = _ref5.role;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        var user, newUser, userSaved, token;
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.prev = 0;
                _context4.next = 3;
                return _userSchema2.default.findOne({
                  $or: [{ email: email }, { username: username }]
                }).exec();

              case 3:
                user = _context4.sent;

                if (!user) {
                  _context4.next = 6;
                  break;
                }

                throw new Error("User already exists");

              case 6:
                if (!role) role = "user";
                _context4.t0 = _userSchema2.default;
                _context4.t1 = email;
                _context4.t2 = username;
                _context4.next = 12;
                return (0, _bcryptjs.hash)(password, 10);

              case 12:
                _context4.t3 = _context4.sent;
                _context4.t4 = role;
                _context4.t5 = {
                  email: _context4.t1,
                  username: _context4.t2,
                  password: _context4.t3,
                  role: _context4.t4
                };
                newUser = new _context4.t0(_context4.t5);
                _context4.next = 18;
                return newUser.save();

              case 18:
                userSaved = _context4.sent;
                token = (0, _jsonwebtoken.sign)({ id: userSaved.id, email: userSaved.email, role: userSaved.role }, _config2.default.jwtConfig, { expiresIn: "1y" });
                return _context4.abrupt("return", {
                  token: token,
                  username: userSaved.username,
                  email: userSaved.email
                });

              case 23:
                _context4.prev = 23;
                _context4.t6 = _context4["catch"](0);
                throw new Error(_context4.t6.message);

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this4, [[0, 23]]);
      }))();
    },
    login: function login(_, _ref6) {
      var _this5 = this;

      var email = _ref6.email,
          password = _ref6.password;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
        var user, isValid, token;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _userSchema2.default.findOne({ email: email }).exec();

              case 3:
                user = _context5.sent;

                if (user) {
                  _context5.next = 6;
                  break;
                }

                throw new Error("No user with that email");

              case 6:
                _context5.next = 8;
                return (0, _bcryptjs.compare)(password, user.password);

              case 8:
                isValid = _context5.sent;

                if (isValid) {
                  _context5.next = 11;
                  break;
                }

                throw new Error("Incorrect password");

              case 11:
                token = (0, _jsonwebtoken.sign)({ id: user.id, email: user.email }, _config2.default.jwtConfig, { expiresIn: "1d" });
                return _context5.abrupt("return", {
                  token: token,
                  username: user.username,
                  email: user.email
                });

              case 15:
                _context5.prev = 15;
                _context5.t0 = _context5["catch"](0);
                throw new Error(_context5.t0.message);

              case 18:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, _this5, [[0, 15]]);
      }))();
    },
    updateUser: function updateUser(_, _ref7, _ref8) {
      var _this6 = this;

      var id = _ref7.id,
          doramas = _ref7.doramas,
          password = _ref7.password;
      var user = _ref8.user;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6() {
        return _regenerator2.default.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (user) {
                  _context6.next = 2;
                  break;
                }

                throw new Error("You are not authenticated!");

              case 2:
                _context6.t0 = _userSchema2.default;
                _context6.t1 = id;
                _context6.next = 6;
                return (0, _bcryptjs.hash)(password, 10);

              case 6:
                _context6.t2 = _context6.sent;
                _context6.t3 = { doramas: doramas };
                _context6.t4 = {
                  password: _context6.t2,
                  $push: _context6.t3
                };
                _context6.t5 = { safe: true, upsert: true, new: true };
                _context6.next = 12;
                return _context6.t0.findByIdAndUpdate.call(_context6.t0, _context6.t1, _context6.t4, _context6.t5);

              case 12:
                return _context6.abrupt("return", _context6.sent);

              case 13:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, _this6);
      }))();
    }
  }
};
exports.default = userResolver;