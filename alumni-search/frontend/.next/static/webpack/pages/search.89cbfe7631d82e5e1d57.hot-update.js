webpackHotUpdate_N_E("pages/search",{

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

function getCommunityNotLoggedInfo(name) {
  return fetch("http://localhost:8080/search?searchTerm=".concat(searc)).then(function (resp) {
    console.log(name);
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
  },
  getNotLogged: function getNotLogged(community_info) {
    return getCommunityNotLoggedInfo(community_info)["catch"](handleError);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJnZXRMb2dpbkluZm8iLCJ1c2VyX2luZm8iLCJoZWFkZXIiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwidGhlbiIsInJlc3AiLCJqc29uIiwiZ2V0UmVnaXN0ZXJJbmZvIiwiZ2V0Q29tbXVuaXR5Tm90TG9nZ2VkSW5mbyIsIm5hbWUiLCJzZWFyYyIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0xvZ2luIiwidXNlcnB3IiwiaW5mbyIsInN0YXR1cyIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJ3YXJuIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUFjY291bnQiLCJnZXRMb2dpbiIsImdldExvZ2dlZEluZm8iLCJjb21tdW5pdHlfaW5mbyIsImdldENvbW11bml0eUxvZ2dlZEluSW5mbyIsImdldFNjcmVlbm5hbWUiLCJnZXROb3RMb2dnZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQURBQSxtQkFBTyxDQUFDLGlGQUFELENBQVA7O0FBR0EsU0FBU0MsWUFBVCxDQUFzQkMsU0FBdEIsRUFBaUM7QUFDL0IsTUFBTUMsTUFBTSxHQUFHO0FBQUMsY0FBVyxrQkFBWjtBQUNDLG9CQUFnQjtBQURqQixHQUFmO0FBRUEsTUFBTUMsWUFBWSxHQUFHLElBQUlDLGVBQUosQ0FBb0JILFNBQXBCLENBQXJCO0FBQ0EsU0FBT0ksS0FBSyxDQUFDLDZCQUFELEVBQ1o7QUFBRUMsVUFBTSxFQUFFLE1BQVY7QUFDRUMsV0FBTyxFQUFFTCxNQURYO0FBRUVNLFFBQUksRUFBRUw7QUFGUixHQURZLENBQUwsQ0FHZ0JNLElBSGhCLENBR3FCLFVBQVVDLElBQVYsRUFBZTtBQUN2QyxXQUFPQSxJQUFJLENBQUNDLElBQUwsRUFBUDtBQUNELEdBTEksQ0FBUDtBQU1EOztBQUVELFNBQVNDLGVBQVQsQ0FBeUJYLFNBQXpCLEVBQW9DO0FBQ2xDLE1BQU1DLE1BQU0sR0FBRztBQUFDLGNBQVcsa0JBQVo7QUFDQyxvQkFBZ0I7QUFEakIsR0FBZjtBQUVBLE1BQU1DLFlBQVksR0FBRyxJQUFJQyxlQUFKLENBQW9CSCxTQUFwQixDQUFyQjtBQUNBLFNBQU9JLEtBQUssQ0FBQyw4QkFBRCxFQUNaO0FBQUVDLFVBQU0sRUFBRSxNQUFWO0FBQ0VDLFdBQU8sRUFBRUwsTUFEWDtBQUVFTSxRQUFJLEVBQUVMO0FBRlIsR0FEWSxDQUFMLENBR2dCTSxJQUhoQixDQUdxQixVQUFVQyxJQUFWLEVBQWU7QUFDdkMsV0FBT0EsSUFBSSxDQUFDQyxJQUFMLEVBQVA7QUFDRCxHQUxJLENBQVA7QUFNRDs7QUFHRCxTQUFTRSx5QkFBVCxDQUFtQ0MsSUFBbkMsRUFBd0M7QUFDdEMsU0FBT1QsS0FBSyxtREFBNENVLEtBQTVDLEVBQUwsQ0FBMEROLElBQTFELENBQStELFVBQVNDLElBQVQsRUFBYztBQUNoRk0sV0FBTyxDQUFDQyxHQUFSLENBQVlILElBQVo7QUFDQSxXQUFPSixJQUFJLENBQUNDLElBQUwsRUFBUDtBQUNELEdBSEksQ0FBUDtBQUtEOztTQUVjTyxVOzs7Ozs4RkFBZixpQkFBMEJDLE1BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNFSCxtQkFBTyxDQUFDQyxHQUFSLENBQVlFLE1BQVosRUFERixDQUNzQjs7QUFEdEI7QUFBQSxtQkFFcUJuQixZQUFZLENBQUNtQixNQUFELENBRmpDOztBQUFBO0FBRVFDLGdCQUZSO0FBR0VKLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUcsSUFBWixFQUhGLENBR29COztBQUNsQkosbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRyxJQUFJLENBQUNDLE1BQWpCOztBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFPQSxTQUFTQyxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUMxQlAsU0FBTyxDQUFDUSxJQUFSLENBQWFELEtBQWI7QUFDQSxTQUFPLElBQVA7QUFDRDs7QUFFREUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZDLGVBQWEsRUFBRSx1QkFBVTFCLFNBQVYsRUFBcUI7QUFDbENlLFdBQU8sQ0FBQ0MsR0FBUixDQUFZaEIsU0FBWjtBQUNBLFdBQU9XLGVBQWUsQ0FBQ1gsU0FBRCxDQUFmLFVBQWlDcUIsV0FBakMsQ0FBUDtBQUNELEdBSmM7QUFLZk0sVUFBUSxFQUFFLGtCQUFVM0IsU0FBVixFQUFxQjtBQUM3QixXQUFPRCxZQUFZLENBQUNDLFNBQUQsQ0FBWixVQUE4QnFCLFdBQTlCLENBQVA7QUFDRCxHQVBjO0FBUWZPLGVBQWEsRUFBRSx1QkFBU0MsY0FBVCxFQUF3QjtBQUNyQyxXQUFPQyx3QkFBd0IsQ0FBQ0QsY0FBRCxDQUF4QixVQUErQ1IsV0FBL0MsQ0FBUDtBQUNELEdBVmM7QUFXZlUsZUFBYSxFQUFFLHVCQUFVL0IsU0FBVixFQUFxQjtBQUNsQ2UsV0FBTyxDQUFDQyxHQUFSLENBQVloQixTQUFaO0FBQ0EsV0FBT1csZUFBZSxDQUFDWCxTQUFELENBQWYsVUFBaUNxQixXQUFqQyxDQUFQO0FBQ0QsR0FkYztBQWVmVyxjQUFZLEVBQUUsc0JBQVNILGNBQVQsRUFBd0I7QUFDcEMsV0FBT2pCLHlCQUF5QixDQUFDaUIsY0FBRCxDQUF6QixVQUFnRFIsV0FBaEQsQ0FBUDtBQUNEO0FBakJjLENBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NlYXJjaC44OWNiZmU3NjMxZDgyZTVlMWQ1Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZShcImlzb21vcnBoaWMtZmV0Y2hcIik7XHJcbmltcG9ydCBCUHJvbWlzZSBmcm9tIFwiYmx1ZWJpcmRcIjtcclxuXHJcbmZ1bmN0aW9uIGdldExvZ2luSW5mbyh1c2VyX2luZm8pIHtcclxuICBjb25zdCBoZWFkZXIgPSB7J0FjY2VwdCcgOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIn07XHJcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1c2VyX2luZm8pO1xyXG4gIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9sb2dpblwiLFxyXG4gIHsgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IGhlYWRlcixcclxuICAgIGJvZHk6IHNlYXJjaFBhcmFtc30pLnRoZW4oZnVuY3Rpb24gKHJlc3Ape1xyXG4gICAgICByZXR1cm4gcmVzcC5qc29uKCk7XHJcbiAgICB9KTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlZ2lzdGVySW5mbyh1c2VyX2luZm8pIHtcclxuICBjb25zdCBoZWFkZXIgPSB7J0FjY2VwdCcgOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIn07XHJcbiAgY29uc3Qgc2VhcmNoUGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh1c2VyX2luZm8pO1xyXG4gIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9jcmVhdGVcIixcclxuICB7IG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiBoZWFkZXIsXHJcbiAgICBib2R5OiBzZWFyY2hQYXJhbXN9KS50aGVuKGZ1bmN0aW9uIChyZXNwKXtcclxuICAgICAgcmV0dXJuIHJlc3AuanNvbigpO1xyXG4gICAgfSk7IFxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0Q29tbXVuaXR5Tm90TG9nZ2VkSW5mbyhuYW1lKXtcclxuICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9zZWFyY2g/c2VhcmNoVGVybT0ke3NlYXJjfWApLnRoZW4oZnVuY3Rpb24ocmVzcCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKG5hbWUpO1xyXG4gICAgICByZXR1cm4gcmVzcC5qc29uKCk7XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY2hlY2tMb2dpbih1c2VycHcpe1xyXG4gIGNvbnNvbGUubG9nKHVzZXJwdyk7Ly97dXNlcm5hbWU6ICwgcGFzc3dvcmQ6IH1cclxuICBjb25zdCBpbmZvID0gYXdhaXQgZ2V0TG9naW5JbmZvKHVzZXJwdyk7XHJcbiAgY29uc29sZS5sb2coaW5mbyk7Ly97c3RhdHVzOiAsIHNjcmVlbm5hbWU6IH1cclxuICBjb25zb2xlLmxvZyhpbmZvLnN0YXR1cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yKSB7XHJcbiAgY29uc29sZS53YXJuKGVycm9yKTtcclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgY3JlYXRlQWNjb3VudDogZnVuY3Rpb24gKHVzZXJfaW5mbykge1xyXG4gICAgY29uc29sZS5sb2codXNlcl9pbmZvKTtcclxuICAgIHJldHVybiBnZXRSZWdpc3RlckluZm8odXNlcl9pbmZvKS5jYXRjaChoYW5kbGVFcnJvcik7XHJcbiAgfSxcclxuICBnZXRMb2dpbjogZnVuY3Rpb24gKHVzZXJfaW5mbykge1xyXG4gICAgcmV0dXJuIGdldExvZ2luSW5mbyh1c2VyX2luZm8pLmNhdGNoKGhhbmRsZUVycm9yKTtcclxuICB9LFxyXG4gIGdldExvZ2dlZEluZm86IGZ1bmN0aW9uKGNvbW11bml0eV9pbmZvKXtcclxuICAgIHJldHVybiBnZXRDb21tdW5pdHlMb2dnZWRJbkluZm8oY29tbXVuaXR5X2luZm8pLmNhdGNoKGhhbmRsZUVycm9yKTtcclxuICB9LFxyXG4gIGdldFNjcmVlbm5hbWU6IGZ1bmN0aW9uICh1c2VyX2luZm8pIHtcclxuICAgIGNvbnNvbGUubG9nKHVzZXJfaW5mbyk7XHJcbiAgICByZXR1cm4gZ2V0UmVnaXN0ZXJJbmZvKHVzZXJfaW5mbykuY2F0Y2goaGFuZGxlRXJyb3IpO1xyXG4gIH0sXHJcbiAgZ2V0Tm90TG9nZ2VkOiBmdW5jdGlvbihjb21tdW5pdHlfaW5mbyl7XHJcbiAgICByZXR1cm4gZ2V0Q29tbXVuaXR5Tm90TG9nZ2VkSW5mbyhjb21tdW5pdHlfaW5mbykuY2F0Y2goaGFuZGxlRXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=