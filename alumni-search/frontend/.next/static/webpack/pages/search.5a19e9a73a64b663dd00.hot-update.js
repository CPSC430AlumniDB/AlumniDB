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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJnZXRMb2dpbkluZm8iLCJ1c2VyX2luZm8iLCJoZWFkZXIiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwidGhlbiIsInJlc3AiLCJqc29uIiwiZ2V0UmVnaXN0ZXJJbmZvIiwiZ2V0Q29tbXVuaXR5TG9nZ2VkSW5JbmZvIiwic2VhcmNoVGVybSIsImNvbnNvbGUiLCJsb2ciLCJjaGVja0xvZ2luIiwidXNlcnB3IiwiaW5mbyIsInN0YXR1cyIsImhhbmRsZUVycm9yIiwiZXJyb3IiLCJ3YXJuIiwibW9kdWxlIiwiZXhwb3J0cyIsImNyZWF0ZUFjY291bnQiLCJnZXRMb2dpbiIsImdldExvZ2dlZEluZm8iLCJjb21tdW5pdHlfaW5mbyIsImdldFNjcmVlbm5hbWUiLCJnZXROb3RMb2dnZWQiLCJnZXRDb21tdW5pdHlOb3RMb2dnZWRJbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFEQUEsbUJBQU8sQ0FBQyxpRkFBRCxDQUFQOztBQUdBLFNBQVNDLFlBQVQsQ0FBc0JDLFNBQXRCLEVBQWlDO0FBQy9CLE1BQU1DLE1BQU0sR0FBRztBQUFDLGNBQVcsa0JBQVo7QUFDQyxvQkFBZ0I7QUFEakIsR0FBZjtBQUVBLE1BQU1DLFlBQVksR0FBRyxJQUFJQyxlQUFKLENBQW9CSCxTQUFwQixDQUFyQjtBQUNBLFNBQU9JLEtBQUssQ0FBQyw2QkFBRCxFQUNaO0FBQUVDLFVBQU0sRUFBRSxNQUFWO0FBQ0VDLFdBQU8sRUFBRUwsTUFEWDtBQUVFTSxRQUFJLEVBQUVMO0FBRlIsR0FEWSxDQUFMLENBR2dCTSxJQUhoQixDQUdxQixVQUFVQyxJQUFWLEVBQWU7QUFDdkMsV0FBT0EsSUFBSSxDQUFDQyxJQUFMLEVBQVA7QUFDRCxHQUxJLENBQVA7QUFNRDs7QUFFRCxTQUFTQyxlQUFULENBQXlCWCxTQUF6QixFQUFvQztBQUNsQyxNQUFNQyxNQUFNLEdBQUc7QUFBQyxjQUFXLGtCQUFaO0FBQ0Msb0JBQWdCO0FBRGpCLEdBQWY7QUFFQSxNQUFNQyxZQUFZLEdBQUcsSUFBSUMsZUFBSixDQUFvQkgsU0FBcEIsQ0FBckI7QUFDQSxTQUFPSSxLQUFLLENBQUMsOEJBQUQsRUFDWjtBQUFFQyxVQUFNLEVBQUUsTUFBVjtBQUNFQyxXQUFPLEVBQUVMLE1BRFg7QUFFRU0sUUFBSSxFQUFFTDtBQUZSLEdBRFksQ0FBTCxDQUdnQk0sSUFIaEIsQ0FHcUIsVUFBVUMsSUFBVixFQUFlO0FBQ3ZDLFdBQU9BLElBQUksQ0FBQ0MsSUFBTCxFQUFQO0FBQ0QsR0FMSSxDQUFQO0FBTUQ7O0FBR0QsU0FBU0Usd0JBQVQsQ0FBa0NDLFVBQWxDLEVBQTZDO0FBQzNDLFNBQU9ULEtBQUssbURBQTRDUyxVQUE1QyxFQUFMLENBQStETCxJQUEvRCxDQUFvRSxVQUFTQyxJQUFULEVBQWM7QUFDckZLLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixVQUFaO0FBQ0EsV0FBT0osSUFBSSxDQUFDQyxJQUFMLEVBQVA7QUFDRCxHQUhJLENBQVA7QUFLRDs7U0FFY00sVTs7Ozs7OEZBQWYsaUJBQTBCQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUgsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRSxNQUFaLEVBREYsQ0FDc0I7O0FBRHRCO0FBQUEsbUJBRXFCbEIsWUFBWSxDQUFDa0IsTUFBRCxDQUZqQzs7QUFBQTtBQUVRQyxnQkFGUjtBQUdFSixtQkFBTyxDQUFDQyxHQUFSLENBQVlHLElBQVosRUFIRixDQUdvQjs7QUFDbEJKLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUcsSUFBSSxDQUFDQyxNQUFqQjs7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBT0EsU0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDMUJQLFNBQU8sQ0FBQ1EsSUFBUixDQUFhRCxLQUFiO0FBQ0EsU0FBTyxJQUFQO0FBQ0Q7O0FBRURFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmQyxlQUFhLEVBQUUsdUJBQVV6QixTQUFWLEVBQXFCO0FBQ2xDYyxXQUFPLENBQUNDLEdBQVIsQ0FBWWYsU0FBWjtBQUNBLFdBQU9XLGVBQWUsQ0FBQ1gsU0FBRCxDQUFmLFVBQWlDb0IsV0FBakMsQ0FBUDtBQUNELEdBSmM7QUFLZk0sVUFBUSxFQUFFLGtCQUFVMUIsU0FBVixFQUFxQjtBQUM3QixXQUFPRCxZQUFZLENBQUNDLFNBQUQsQ0FBWixVQUE4Qm9CLFdBQTlCLENBQVA7QUFDRCxHQVBjO0FBUWZPLGVBQWEsRUFBRSx1QkFBU0MsY0FBVCxFQUF3QjtBQUNyQyxXQUFPaEIsd0JBQXdCLENBQUNnQixjQUFELENBQXhCLFVBQStDUixXQUEvQyxDQUFQO0FBQ0QsR0FWYztBQVdmUyxlQUFhLEVBQUUsdUJBQVU3QixTQUFWLEVBQXFCO0FBQ2xDYyxXQUFPLENBQUNDLEdBQVIsQ0FBWWYsU0FBWjtBQUNBLFdBQU9XLGVBQWUsQ0FBQ1gsU0FBRCxDQUFmLFVBQWlDb0IsV0FBakMsQ0FBUDtBQUNELEdBZGM7QUFlZlUsY0FBWSxFQUFFLHNCQUFTRixjQUFULEVBQXdCO0FBQ3BDLFdBQU9HLHlCQUF5QixDQUFDSCxjQUFELENBQXpCLFVBQWdEUixXQUFoRCxDQUFQO0FBQ0Q7QUFqQmMsQ0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLjVhMTllOWE3M2E2NGI2NjNkZDAwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTtcclxuaW1wb3J0IEJQcm9taXNlIGZyb20gXCJibHVlYmlyZFwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0TG9naW5JbmZvKHVzZXJfaW5mbykge1xyXG4gIGNvbnN0IGhlYWRlciA9IHsnQWNjZXB0JyA6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwifTtcclxuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVzZXJfaW5mbyk7XHJcbiAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2xvZ2luXCIsXHJcbiAgeyBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogaGVhZGVyLFxyXG4gICAgYm9keTogc2VhcmNoUGFyYW1zfSkudGhlbihmdW5jdGlvbiAocmVzcCl7XHJcbiAgICAgIHJldHVybiByZXNwLmpzb24oKTtcclxuICAgIH0pOyBcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVnaXN0ZXJJbmZvKHVzZXJfaW5mbykge1xyXG4gIGNvbnN0IGhlYWRlciA9IHsnQWNjZXB0JyA6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwifTtcclxuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVzZXJfaW5mbyk7XHJcbiAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2NyZWF0ZVwiLFxyXG4gIHsgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IGhlYWRlcixcclxuICAgIGJvZHk6IHNlYXJjaFBhcmFtc30pLnRoZW4oZnVuY3Rpb24gKHJlc3Ape1xyXG4gICAgICByZXR1cm4gcmVzcC5qc29uKCk7XHJcbiAgICB9KTsgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRDb21tdW5pdHlMb2dnZWRJbkluZm8oc2VhcmNoVGVybSl7XHJcbiAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODAvc2VhcmNoP3NlYXJjaFRlcm09JHtzZWFyY2hUZXJtfWApLnRoZW4oZnVuY3Rpb24ocmVzcCl7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNlYXJjaFRlcm0pO1xyXG4gICAgICByZXR1cm4gcmVzcC5qc29uKCk7XHJcbiAgICB9KVxyXG5cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY2hlY2tMb2dpbih1c2VycHcpe1xyXG4gIGNvbnNvbGUubG9nKHVzZXJwdyk7Ly97dXNlcm5hbWU6ICwgcGFzc3dvcmQ6IH1cclxuICBjb25zdCBpbmZvID0gYXdhaXQgZ2V0TG9naW5JbmZvKHVzZXJwdyk7XHJcbiAgY29uc29sZS5sb2coaW5mbyk7Ly97c3RhdHVzOiAsIHNjcmVlbm5hbWU6IH1cclxuICBjb25zb2xlLmxvZyhpbmZvLnN0YXR1cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGVycm9yKSB7XHJcbiAgY29uc29sZS53YXJuKGVycm9yKTtcclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgY3JlYXRlQWNjb3VudDogZnVuY3Rpb24gKHVzZXJfaW5mbykge1xyXG4gICAgY29uc29sZS5sb2codXNlcl9pbmZvKTtcclxuICAgIHJldHVybiBnZXRSZWdpc3RlckluZm8odXNlcl9pbmZvKS5jYXRjaChoYW5kbGVFcnJvcik7XHJcbiAgfSxcclxuICBnZXRMb2dpbjogZnVuY3Rpb24gKHVzZXJfaW5mbykge1xyXG4gICAgcmV0dXJuIGdldExvZ2luSW5mbyh1c2VyX2luZm8pLmNhdGNoKGhhbmRsZUVycm9yKTtcclxuICB9LFxyXG4gIGdldExvZ2dlZEluZm86IGZ1bmN0aW9uKGNvbW11bml0eV9pbmZvKXtcclxuICAgIHJldHVybiBnZXRDb21tdW5pdHlMb2dnZWRJbkluZm8oY29tbXVuaXR5X2luZm8pLmNhdGNoKGhhbmRsZUVycm9yKTtcclxuICB9LFxyXG4gIGdldFNjcmVlbm5hbWU6IGZ1bmN0aW9uICh1c2VyX2luZm8pIHtcclxuICAgIGNvbnNvbGUubG9nKHVzZXJfaW5mbyk7XHJcbiAgICByZXR1cm4gZ2V0UmVnaXN0ZXJJbmZvKHVzZXJfaW5mbykuY2F0Y2goaGFuZGxlRXJyb3IpO1xyXG4gIH0sXHJcbiAgZ2V0Tm90TG9nZ2VkOiBmdW5jdGlvbihjb21tdW5pdHlfaW5mbyl7XHJcbiAgICByZXR1cm4gZ2V0Q29tbXVuaXR5Tm90TG9nZ2VkSW5mbyhjb21tdW5pdHlfaW5mbykuY2F0Y2goaGFuZGxlRXJyb3IpO1xyXG4gIH1cclxufTtcclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=