webpackHotUpdate_N_E("pages/register",{

/***/ "./lib/utils.js":
/*!**********************!*\
  !*** ./lib/utils.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"));

var _bluebird = _interopRequireDefault(__webpack_require__(/*! bluebird */ "./node_modules/bluebird/js/browser/bluebird.js"));

__webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");

function getLoginInfo(user_info) {
  var header = {
    'Accept': "application/json",
    "Content-Type": "application/x-www-form-urlencoded"
  };
  var searchParams = new URLSearchParams(user_info);
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: header,
    body: searchParams
  }).then(function (resp) {
    return resp.json();
  });
}

function getRegisterInfo(user_info) {
  var header = {
    'Accept': "application/json",
    "Content-Type": "application/x-www-form-urlencoded"
  };
  var searchParams = new URLSearchParams(user_info);
  return fetch("http://localhost:8080/create", {
    method: "POST",
    headers: header,
    body: searchParams
  }).then(function (resp) {
    return resp.json();
  });
}

function getCommunityLoggedInInfo(searchTerm) {
  return fetch("http://localhost:8080/search?searchTerm=".concat(searchTerm)).then(function (resp) {
    console.log(searchTerm);
    return resp.json();
  });
}

function checkLogin(_x) {
  return _checkLogin.apply(this, arguments);
}

function _checkLogin() {
  _checkLogin = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userpw) {
    var info;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(userpw); //{username: , password: }

            _context.next = 3;
            return getLoginInfo(userpw);

          case 3:
            info = _context.sent;
            console.log(info); //{status: , screenname: }

            console.log(info.status);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _checkLogin.apply(this, arguments);
}

function handleError(error) {
  console.warn(error);
  return null;
}

module.exports = {
  createAccount: function createAccount(user_info) {
    console.log(user_info);
    return getRegisterInfo(user_info)["catch"](handleError);
  },
  getLogin: function getLogin(user_info) {
    return getLoginInfo(user_info)["catch"](handleError);
  },
  getLoggedInfo: function getLoggedInfo(community_info) {
    return getCommunityLoggedInInfo(community_info)["catch"](handleError);
  },
  getScreenname: function getScreenname(user_info) {
    console.log(user_info);
    return getRegisterInfo(user_info)["catch"](handleError);
  }
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJnZXRMb2dpbkluZm8iLCJ1c2VyX2luZm8iLCJoZWFkZXIiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwidGhlbiIsInJlc3AiLCJqc29uIiwiZ2V0UmVnaXN0ZXJJbmZvIiwiZ2V0Q29tbXVuaXR5TG9nZ2VkSW5JbmZvIiwic2VhcmNoVGVybSIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0xvZ2luIiwidXNlcnB3IiwiaW5mbyIsInN0YXR1cyIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJ3YXJuIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUFjY291bnQiLCJnZXRMb2dpbiIsImdldExvZ2dlZEluZm8iLCJjb21tdW5pdHlfaW5mbyIsImdldFNjcmVlbm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQURBQSxtQkFBTyxDQUFDLGlGQUFELENBQVA7O0FBR0EsU0FBU0MsWUFBVCxDQUFzQkMsU0FBdEIsRUFBaUM7QUFDL0IsTUFBTUMsTUFBTSxHQUFHO0FBQUMsY0FBVyxrQkFBWjtBQUNDLG9CQUFnQjtBQURqQixHQUFmO0FBRUEsTUFBTUMsWUFBWSxHQUFHLElBQUlDLGVBQUosQ0FBb0JILFNBQXBCLENBQXJCO0FBQ0EsU0FBT0ksS0FBSyxDQUFDLDZCQUFELEVBQ1o7QUFBRUMsVUFBTSxFQUFFLE1BQVY7QUFDRUMsV0FBTyxFQUFFTCxNQURYO0FBRUVNLFFBQUksRUFBRUw7QUFGUixHQURZLENBQUwsQ0FHZ0JNLElBSGhCLENBR3FCLFVBQVVDLElBQVYsRUFBZTtBQUN2QyxXQUFPQSxJQUFJLENBQUNDLElBQUwsRUFBUDtBQUNELEdBTEksQ0FBUDtBQU1EOztBQUVELFNBQVNDLGVBQVQsQ0FBeUJYLFNBQXpCLEVBQW9DO0FBQ2xDLE1BQU1DLE1BQU0sR0FBRztBQUFDLGNBQVcsa0JBQVo7QUFDQyxvQkFBZ0I7QUFEakIsR0FBZjtBQUVBLE1BQU1DLFlBQVksR0FBRyxJQUFJQyxlQUFKLENBQW9CSCxTQUFwQixDQUFyQjtBQUNBLFNBQU9JLEtBQUssQ0FBQyw4QkFBRCxFQUNaO0FBQUVDLFVBQU0sRUFBRSxNQUFWO0FBQ0VDLFdBQU8sRUFBRUwsTUFEWDtBQUVFTSxRQUFJLEVBQUVMO0FBRlIsR0FEWSxDQUFMLENBR2dCTSxJQUhoQixDQUdxQixVQUFVQyxJQUFWLEVBQWU7QUFDdkMsV0FBT0EsSUFBSSxDQUFDQyxJQUFMLEVBQVA7QUFDRCxHQUxJLENBQVA7QUFNRDs7QUFHRCxTQUFTRSx3QkFBVCxDQUFrQ0MsVUFBbEMsRUFBNkM7QUFDM0MsU0FBT1QsS0FBSyxtREFBNENTLFVBQTVDLEVBQUwsQ0FBK0RMLElBQS9ELENBQW9FLFVBQVNDLElBQVQsRUFBYztBQUNyRkssV0FBTyxDQUFDQyxHQUFSLENBQVlGLFVBQVo7QUFDQSxXQUFPSixJQUFJLENBQUNDLElBQUwsRUFBUDtBQUNELEdBSEksQ0FBUDtBQUtEOztTQUVjTSxVOzs7Ozs4RkFBZixpQkFBMEJDLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFSCxtQkFBTyxDQUFDQyxHQUFSLENBQVlFLE1BQVosRUFERixDQUNzQjs7QUFEdEI7QUFBQSxtQkFFcUJsQixZQUFZLENBQUNrQixNQUFELENBRmpDOztBQUFBO0FBRVFDLGdCQUZSO0FBR0VKLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUcsSUFBWixFQUhGLENBR29COztBQUNsQkosbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRyxJQUFJLENBQUNDLE1BQWpCOztBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFPQSxTQUFTQyxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUMxQlAsU0FBTyxDQUFDUSxJQUFSLENBQWFELEtBQWI7QUFDQSxTQUFPLElBQVA7QUFDRDs7QUFFREUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZDLGVBQWEsRUFBRSx1QkFBVXpCLFNBQVYsRUFBcUI7QUFDbENjLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZixTQUFaO0FBQ0EsV0FBT1csZUFBZSxDQUFDWCxTQUFELENBQWYsVUFBaUNvQixXQUFqQyxDQUFQO0FBQ0QsR0FKYztBQUtmTSxVQUFRLEVBQUUsa0JBQVUxQixTQUFWLEVBQXFCO0FBQzdCLFdBQU9ELFlBQVksQ0FBQ0MsU0FBRCxDQUFaLFVBQThCb0IsV0FBOUIsQ0FBUDtBQUNELEdBUGM7QUFRZk8sZUFBYSxFQUFFLHVCQUFTQyxjQUFULEVBQXdCO0FBQ3JDLFdBQU9oQix3QkFBd0IsQ0FBQ2dCLGNBQUQsQ0FBeEIsVUFBK0NSLFdBQS9DLENBQVA7QUFDRCxHQVZjO0FBV2ZTLGVBQWEsRUFBRSx1QkFBVTdCLFNBQVYsRUFBcUI7QUFDbENjLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZixTQUFaO0FBQ0EsV0FBT1csZUFBZSxDQUFDWCxTQUFELENBQWYsVUFBaUNvQixXQUFqQyxDQUFQO0FBQ0Q7QUFkYyxDQUFqQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci42N2MzOTQ5MjI1NTJhYjI3NDRmMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7XHJcbmltcG9ydCBCUHJvbWlzZSBmcm9tIFwiYmx1ZWJpcmRcIjtcclxuXHJcbmZ1bmN0aW9uIGdldExvZ2luSW5mbyh1c2VyX2luZm8pIHtcclxuICBjb25zdCBoZWFkZXIgPSB7J0FjY2VwdCcgOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIn07XHJcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1c2VyX2luZm8pO1xyXG4gIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9sb2dpblwiLFxyXG4gIHsgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IGhlYWRlcixcclxuICAgIGJvZHk6IHNlYXJjaFBhcmFtc30pLnRoZW4oZnVuY3Rpb24gKHJlc3Ape1xyXG4gICAgICByZXR1cm4gcmVzcC5qc29uKCk7XHJcbiAgICB9KTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlZ2lzdGVySW5mbyh1c2VyX2luZm8pIHtcclxuICBjb25zdCBoZWFkZXIgPSB7J0FjY2VwdCcgOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIn07XHJcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1c2VyX2luZm8pO1xyXG4gIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jcmVhdGVcIixcclxuICB7IG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiBoZWFkZXIsXHJcbiAgICBib2R5OiBzZWFyY2hQYXJhbXN9KS50aGVuKGZ1bmN0aW9uIChyZXNwKXtcclxuICAgICAgcmV0dXJuIHJlc3AuanNvbigpO1xyXG4gICAgfSk7IFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0Q29tbXVuaXR5TG9nZ2VkSW5JbmZvKHNlYXJjaFRlcm0pe1xyXG4gIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3NlYXJjaD9zZWFyY2hUZXJtPSR7c2VhcmNoVGVybX1gKS50aGVuKGZ1bmN0aW9uKHJlc3Ape1xyXG4gICAgICBjb25zb2xlLmxvZyhzZWFyY2hUZXJtKTtcclxuICAgICAgcmV0dXJuIHJlc3AuanNvbigpO1xyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrTG9naW4odXNlcnB3KXtcclxuICBjb25zb2xlLmxvZyh1c2VycHcpOy8ve3VzZXJuYW1lOiAsIHBhc3N3b3JkOiB9XHJcbiAgY29uc3QgaW5mbyA9IGF3YWl0IGdldExvZ2luSW5mbyh1c2VycHcpO1xyXG4gIGNvbnNvbGUubG9nKGluZm8pOy8ve3N0YXR1czogLCBzY3JlZW5uYW1lOiB9XHJcbiAgY29uc29sZS5sb2coaW5mby5zdGF0dXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvcikge1xyXG4gIGNvbnNvbGUud2FybihlcnJvcik7XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGNyZWF0ZUFjY291bnQ6IGZ1bmN0aW9uICh1c2VyX2luZm8pIHtcclxuICAgIGNvbnNvbGUubG9nKHVzZXJfaW5mbyk7XHJcbiAgICByZXR1cm4gZ2V0UmVnaXN0ZXJJbmZvKHVzZXJfaW5mbykuY2F0Y2goaGFuZGxlRXJyb3IpO1xyXG4gIH0sXHJcbiAgZ2V0TG9naW46IGZ1bmN0aW9uICh1c2VyX2luZm8pIHtcclxuICAgIHJldHVybiBnZXRMb2dpbkluZm8odXNlcl9pbmZvKS5jYXRjaChoYW5kbGVFcnJvcik7XHJcbiAgfSxcclxuICBnZXRMb2dnZWRJbmZvOiBmdW5jdGlvbihjb21tdW5pdHlfaW5mbyl7XHJcbiAgICByZXR1cm4gZ2V0Q29tbXVuaXR5TG9nZ2VkSW5JbmZvKGNvbW11bml0eV9pbmZvKS5jYXRjaChoYW5kbGVFcnJvcik7XHJcbiAgfSxcclxuICBnZXRTY3JlZW5uYW1lOiBmdW5jdGlvbiAodXNlcl9pbmZvKSB7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyX2luZm8pO1xyXG4gICAgcmV0dXJuIGdldFJlZ2lzdGVySW5mbyh1c2VyX2luZm8pLmNhdGNoKGhhbmRsZUVycm9yKTtcclxuICB9LFxyXG4gXHJcbn07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9