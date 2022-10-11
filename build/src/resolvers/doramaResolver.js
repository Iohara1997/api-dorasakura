"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _doramaSchema = require("../models/doramaSchema.js");

var _doramaSchema2 = _interopRequireDefault(_doramaSchema);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var doramaResolver = {
  Query: {
    allDoramas: function allDoramas(root, args, _ref) {
      var _this = this;

      var user = _ref.user;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;

                if (user) {
                  _context.next = 3;
                  break;
                }

                throw new Error("You are not authenticated!");

              case 3:
                _context.next = 5;
                return _doramaSchema2.default.find({});

              case 5:
                return _context.abrupt("return", _context.sent);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                throw new Error(_context.t0.message);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 8]]);
      }))();
    },
    dorama: function dorama(_, _ref2, _ref3) {
      var _this2 = this;

      var id = _ref2.id;
      var user = _ref3.user;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (user) {
                  _context2.next = 2;
                  break;
                }

                throw new Error("You are not authenticated!");

              case 2:
                _context2.next = 4;
                return _doramaSchema2.default.findById(id);

              case 4:
                return _context2.abrupt("return", _context2.sent);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, _this2);
      }))();
    }
  },
  Mutation: {
    createDorama: function createDorama(_, _ref4, _ref5) {
      var _this3 = this;

      var dorama = _ref4.dorama;
      var user = _ref5.user;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
        var newDorama;
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (user) {
                  _context3.next = 2;
                  break;
                }

                throw new Error("You are not authenticated!");

              case 2:
                newDorama = new _doramaSchema2.default(dorama);
                _context3.next = 5;
                return newDorama.save();

              case 5:
                return _context3.abrupt("return", _context3.sent);

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, _this3);
      }))();
    },
    updateDorama: function updateDorama(_, _ref6, _ref7) {
      var _this4 = this;

      var id = _ref6.id,
          dorama = _ref6.dorama;
      var user = _ref7.user;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                if (user) {
                  _context4.next = 2;
                  break;
                }

                throw new Error("You are not authenticated!");

              case 2:
                _context4.next = 4;
                return _doramaSchema2.default.findByIdAndUpdate(id, dorama, {
                  new: true
                });

              case 4:
                return _context4.abrupt("return", _context4.sent);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this4);
      }))();
    },
    deleteDorama: function deleteDorama(_, _ref8, _ref9) {
      var _this5 = this;

      var id = _ref8.id;
      var user = _ref9.user;
      return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
        return _regenerator2.default.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                if (user) {
                  _context5.next = 2;
                  break;
                }

                throw new Error("You are not authenticated!");

              case 2:
                _context5.next = 4;
                return _doramaSchema2.default.findByIdAndRemove(id, {
                  useFindAndModify: false
                });

              case 4:
                return _context5.abrupt("return", _context5.sent);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, _this5);
      }))();
    }
  }
};
exports.default = doramaResolver;