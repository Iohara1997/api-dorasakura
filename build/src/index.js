"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var startApolloServer = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(typeDefs, resolvers) {
    var getUser, server, app;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            getUser = function getUser(token) {
              try {
                if (token) {
                  return _jsonwebtoken2.default.verify(token, jwtSecret);
                }
                return null;
              } catch (error) {
                return null;
              }
            };

            server = new _apolloServerExpress.ApolloServer({
              typeDefs: typeDefs,
              resolvers: resolvers,
              context: function context(_ref2) {
                var req = _ref2.req;

                var token = req.get("Authorization") || "";
                return { user: getUser(token.replace("Bearer", "")) };
              },
              playground: true
            });
            _context.next = 4;
            return server.start();

          case 4:
            app = (0, _express2.default)();


            server.applyMiddleware({
              app: app,
              path: "/"
            });

            _context.next = 8;
            return new _promise2.default(function (resolvers) {
              return app.listen(port, resolvers);
            });

          case 8:
            console.log("\uD83D\uDE80 Server ready at http://localhost:" + port + server.graphqlPath);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function startApolloServer(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

var _config = require("../config.js");

var _config2 = _interopRequireDefault(_config);

var _apolloServerExpress = require("apollo-server-express");

var _userTypeDefs = require("./typeDefs/userTypeDefs.js");

var _userTypeDefs2 = _interopRequireDefault(_userTypeDefs);

var _doramaTypeDefs = require("./typeDefs/doramaTypeDefs.js");

var _doramaTypeDefs2 = _interopRequireDefault(_doramaTypeDefs);

var _userResolver = require("./resolvers/userResolver.js");

var _userResolver2 = _interopRequireDefault(_userResolver);

var _doramaResolver = require("./resolvers/doramaResolver.js");

var _doramaResolver2 = _interopRequireDefault(_doramaResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = _config2.default.port;
var jwtSecret = _config2.default.jwtConfig;

startApolloServer([_userTypeDefs2.default, _doramaTypeDefs2.default], [_userResolver2.default, _doramaResolver2.default]);