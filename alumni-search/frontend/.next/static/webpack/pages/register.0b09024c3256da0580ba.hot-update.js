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

function getCommunityNotLoggedInfo(searchTerm) {
  return fetch("http://localhost:8080/search?searchTerm=".concat(searchTerm)).then(function (resp) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJnZXRMb2dpbkluZm8iLCJ1c2VyX2luZm8iLCJoZWFkZXIiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwidGhlbiIsInJlc3AiLCJqc29uIiwiZ2V0UmVnaXN0ZXJJbmZvIiwiZ2V0Q29tbXVuaXR5Tm90TG9nZ2VkSW5mbyIsInNlYXJjaFRlcm0iLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImNoZWNrTG9naW4iLCJ1c2VycHciLCJpbmZvIiwic3RhdHVzIiwiaGFuZGxlRXJyb3IiLCJlcnJvciIsIndhcm4iLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQWNjb3VudCIsImdldExvZ2luIiwiZ2V0TG9nZ2VkSW5mbyIsImNvbW11bml0eV9pbmZvIiwiZ2V0Q29tbXVuaXR5TG9nZ2VkSW5JbmZvIiwiZ2V0U2NyZWVubmFtZSIsImdldE5vdExvZ2dlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBREFBLG1CQUFPLENBQUMsaUZBQUQsQ0FBUDs7QUFHQSxTQUFTQyxZQUFULENBQXNCQyxTQUF0QixFQUFpQztBQUMvQixNQUFNQyxNQUFNLEdBQUc7QUFBQyxjQUFXLGtCQUFaO0FBQ0Msb0JBQWdCO0FBRGpCLEdBQWY7QUFFQSxNQUFNQyxZQUFZLEdBQUcsSUFBSUMsZUFBSixDQUFvQkgsU0FBcEIsQ0FBckI7QUFDQSxTQUFPSSxLQUFLLENBQUMsNkJBQUQsRUFDWjtBQUFFQyxVQUFNLEVBQUUsTUFBVjtBQUNFQyxXQUFPLEVBQUVMLE1BRFg7QUFFRU0sUUFBSSxFQUFFTDtBQUZSLEdBRFksQ0FBTCxDQUdnQk0sSUFIaEIsQ0FHcUIsVUFBVUMsSUFBVixFQUFlO0FBQ3ZDLFdBQU9BLElBQUksQ0FBQ0MsSUFBTCxFQUFQO0FBQ0QsR0FMSSxDQUFQO0FBTUQ7O0FBRUQsU0FBU0MsZUFBVCxDQUF5QlgsU0FBekIsRUFBb0M7QUFDbEMsTUFBTUMsTUFBTSxHQUFHO0FBQUMsY0FBVyxrQkFBWjtBQUNDLG9CQUFnQjtBQURqQixHQUFmO0FBRUEsTUFBTUMsWUFBWSxHQUFHLElBQUlDLGVBQUosQ0FBb0JILFNBQXBCLENBQXJCO0FBQ0EsU0FBT0ksS0FBSyxDQUFDLDhCQUFELEVBQ1o7QUFBRUMsVUFBTSxFQUFFLE1BQVY7QUFDRUMsV0FBTyxFQUFFTCxNQURYO0FBRUVNLFFBQUksRUFBRUw7QUFGUixHQURZLENBQUwsQ0FHZ0JNLElBSGhCLENBR3FCLFVBQVVDLElBQVYsRUFBZTtBQUN2QyxXQUFPQSxJQUFJLENBQUNDLElBQUwsRUFBUDtBQUNELEdBTEksQ0FBUDtBQU1EOztBQUdELFNBQVNFLHlCQUFULENBQW1DQyxVQUFuQyxFQUE4QztBQUM1QyxTQUFPVCxLQUFLLG1EQUE0Q1MsVUFBNUMsRUFBTCxDQUErREwsSUFBL0QsQ0FBb0UsVUFBU0MsSUFBVCxFQUFjO0FBQ3JGSyxXQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBWjtBQUNBLFdBQU9QLElBQUksQ0FBQ0MsSUFBTCxFQUFQO0FBQ0QsR0FISSxDQUFQO0FBS0Q7O1NBRWNPLFU7Ozs7OzhGQUFmLGlCQUEwQkMsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VKLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUcsTUFBWixFQURGLENBQ3NCOztBQUR0QjtBQUFBLG1CQUVxQm5CLFlBQVksQ0FBQ21CLE1BQUQsQ0FGakM7O0FBQUE7QUFFUUMsZ0JBRlI7QUFHRUwsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZSSxJQUFaLEVBSEYsQ0FHb0I7O0FBQ2xCTCxtQkFBTyxDQUFDQyxHQUFSLENBQVlJLElBQUksQ0FBQ0MsTUFBakI7O0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQU9BLFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQzFCUixTQUFPLENBQUNTLElBQVIsQ0FBYUQsS0FBYjtBQUNBLFNBQU8sSUFBUDtBQUNEOztBQUVERSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZkMsZUFBYSxFQUFFLHVCQUFVMUIsU0FBVixFQUFxQjtBQUNsQ2MsV0FBTyxDQUFDQyxHQUFSLENBQVlmLFNBQVo7QUFDQSxXQUFPVyxlQUFlLENBQUNYLFNBQUQsQ0FBZixVQUFpQ3FCLFdBQWpDLENBQVA7QUFDRCxHQUpjO0FBS2ZNLFVBQVEsRUFBRSxrQkFBVTNCLFNBQVYsRUFBcUI7QUFDN0IsV0FBT0QsWUFBWSxDQUFDQyxTQUFELENBQVosVUFBOEJxQixXQUE5QixDQUFQO0FBQ0QsR0FQYztBQVFmTyxlQUFhLEVBQUUsdUJBQVNDLGNBQVQsRUFBd0I7QUFDckMsV0FBT0Msd0JBQXdCLENBQUNELGNBQUQsQ0FBeEIsVUFBK0NSLFdBQS9DLENBQVA7QUFDRCxHQVZjO0FBV2ZVLGVBQWEsRUFBRSx1QkFBVS9CLFNBQVYsRUFBcUI7QUFDbENjLFdBQU8sQ0FBQ0MsR0FBUixDQUFZZixTQUFaO0FBQ0EsV0FBT1csZUFBZSxDQUFDWCxTQUFELENBQWYsVUFBaUNxQixXQUFqQyxDQUFQO0FBQ0QsR0FkYztBQWVmVyxjQUFZLEVBQUUsc0JBQVNILGNBQVQsRUFBd0I7QUFDcEMsV0FBT2pCLHlCQUF5QixDQUFDaUIsY0FBRCxDQUF6QixVQUFnRFIsV0FBaEQsQ0FBUDtBQUNEO0FBakJjLENBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3JlZ2lzdGVyLjBiMDkwMjRjMzI1NmRhMDU4MGJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJyZXF1aXJlKFwiaXNvbW9ycGhpYy1mZXRjaFwiKTtcclxuaW1wb3J0IEJQcm9taXNlIGZyb20gXCJibHVlYmlyZFwiO1xyXG5cclxuZnVuY3Rpb24gZ2V0TG9naW5JbmZvKHVzZXJfaW5mbykge1xyXG4gIGNvbnN0IGhlYWRlciA9IHsnQWNjZXB0JyA6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwifTtcclxuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVzZXJfaW5mbyk7XHJcbiAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2xvZ2luXCIsXHJcbiAgeyBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogaGVhZGVyLFxyXG4gICAgYm9keTogc2VhcmNoUGFyYW1zfSkudGhlbihmdW5jdGlvbiAocmVzcCl7XHJcbiAgICAgIHJldHVybiByZXNwLmpzb24oKTtcclxuICAgIH0pOyBcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmVnaXN0ZXJJbmZvKHVzZXJfaW5mbykge1xyXG4gIGNvbnN0IGhlYWRlciA9IHsnQWNjZXB0JyA6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwifTtcclxuICBjb25zdCBzZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHVzZXJfaW5mbyk7XHJcbiAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2NyZWF0ZVwiLFxyXG4gIHsgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IGhlYWRlcixcclxuICAgIGJvZHk6IHNlYXJjaFBhcmFtc30pLnRoZW4oZnVuY3Rpb24gKHJlc3Ape1xyXG4gICAgICByZXR1cm4gcmVzcC5qc29uKCk7XHJcbiAgICB9KTsgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRDb21tdW5pdHlOb3RMb2dnZWRJbmZvKHNlYXJjaFRlcm0pe1xyXG4gIHJldHVybiBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDo4MDgwL3NlYXJjaD9zZWFyY2hUZXJtPSR7c2VhcmNoVGVybX1gKS50aGVuKGZ1bmN0aW9uKHJlc3Ape1xyXG4gICAgICBjb25zb2xlLmxvZyhuYW1lKTtcclxuICAgICAgcmV0dXJuIHJlc3AuanNvbigpO1xyXG4gICAgfSlcclxuXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNoZWNrTG9naW4odXNlcnB3KXtcclxuICBjb25zb2xlLmxvZyh1c2VycHcpOy8ve3VzZXJuYW1lOiAsIHBhc3N3b3JkOiB9XHJcbiAgY29uc3QgaW5mbyA9IGF3YWl0IGdldExvZ2luSW5mbyh1c2VycHcpO1xyXG4gIGNvbnNvbGUubG9nKGluZm8pOy8ve3N0YXR1czogLCBzY3JlZW5uYW1lOiB9XHJcbiAgY29uc29sZS5sb2coaW5mby5zdGF0dXMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvcikge1xyXG4gIGNvbnNvbGUud2FybihlcnJvcik7XHJcbiAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIGNyZWF0ZUFjY291bnQ6IGZ1bmN0aW9uICh1c2VyX2luZm8pIHtcclxuICAgIGNvbnNvbGUubG9nKHVzZXJfaW5mbyk7XHJcbiAgICByZXR1cm4gZ2V0UmVnaXN0ZXJJbmZvKHVzZXJfaW5mbykuY2F0Y2goaGFuZGxlRXJyb3IpO1xyXG4gIH0sXHJcbiAgZ2V0TG9naW46IGZ1bmN0aW9uICh1c2VyX2luZm8pIHtcclxuICAgIHJldHVybiBnZXRMb2dpbkluZm8odXNlcl9pbmZvKS5jYXRjaChoYW5kbGVFcnJvcik7XHJcbiAgfSxcclxuICBnZXRMb2dnZWRJbmZvOiBmdW5jdGlvbihjb21tdW5pdHlfaW5mbyl7XHJcbiAgICByZXR1cm4gZ2V0Q29tbXVuaXR5TG9nZ2VkSW5JbmZvKGNvbW11bml0eV9pbmZvKS5jYXRjaChoYW5kbGVFcnJvcik7XHJcbiAgfSxcclxuICBnZXRTY3JlZW5uYW1lOiBmdW5jdGlvbiAodXNlcl9pbmZvKSB7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyX2luZm8pO1xyXG4gICAgcmV0dXJuIGdldFJlZ2lzdGVySW5mbyh1c2VyX2luZm8pLmNhdGNoKGhhbmRsZUVycm9yKTtcclxuICB9LFxyXG4gIGdldE5vdExvZ2dlZDogZnVuY3Rpb24oY29tbXVuaXR5X2luZm8pe1xyXG4gICAgcmV0dXJuIGdldENvbW11bml0eU5vdExvZ2dlZEluZm8oY29tbXVuaXR5X2luZm8pLmNhdGNoKGhhbmRsZUVycm9yKTtcclxuICB9XHJcbn07XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9