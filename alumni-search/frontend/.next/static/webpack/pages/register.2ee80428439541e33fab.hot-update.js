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
  return fetch("http://localhost:8080/search").then(function (resp) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJnZXRMb2dpbkluZm8iLCJ1c2VyX2luZm8iLCJoZWFkZXIiLCJzZWFyY2hQYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwidGhlbiIsInJlc3AiLCJqc29uIiwiZ2V0UmVnaXN0ZXJJbmZvIiwiZ2V0Q29tbXVuaXR5Tm90TG9nZ2VkSW5mbyIsInNlYXJjaFRlcm0iLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImNoZWNrTG9naW4iLCJ1c2VycHciLCJpbmZvIiwic3RhdHVzIiwiaGFuZGxlRXJyb3IiLCJlcnJvciIsIndhcm4iLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQWNjb3VudCIsImdldExvZ2luIiwiZ2V0TG9nZ2VkSW5mbyIsImNvbW11bml0eV9pbmZvIiwiZ2V0Q29tbXVuaXR5TG9nZ2VkSW5JbmZvIiwiZ2V0U2NyZWVubmFtZSIsImdldE5vdExvZ2dlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBREFBLG1CQUFPLENBQUMsaUZBQUQsQ0FBUDs7QUFHQSxTQUFTQyxZQUFULENBQXNCQyxTQUF0QixFQUFpQztBQUMvQixNQUFNQyxNQUFNLEdBQUc7QUFBQyxjQUFXLGtCQUFaO0FBQ0Msb0JBQWdCO0FBRGpCLEdBQWY7QUFFQSxNQUFNQyxZQUFZLEdBQUcsSUFBSUMsZUFBSixDQUFvQkgsU0FBcEIsQ0FBckI7QUFDQSxTQUFPSSxLQUFLLENBQUMsNkJBQUQsRUFDWjtBQUFFQyxVQUFNLEVBQUUsTUFBVjtBQUNFQyxXQUFPLEVBQUVMLE1BRFg7QUFFRU0sUUFBSSxFQUFFTDtBQUZSLEdBRFksQ0FBTCxDQUdnQk0sSUFIaEIsQ0FHcUIsVUFBVUMsSUFBVixFQUFlO0FBQ3ZDLFdBQU9BLElBQUksQ0FBQ0MsSUFBTCxFQUFQO0FBQ0QsR0FMSSxDQUFQO0FBTUQ7O0FBRUQsU0FBU0MsZUFBVCxDQUF5QlgsU0FBekIsRUFBb0M7QUFDbEMsTUFBTUMsTUFBTSxHQUFHO0FBQUMsY0FBVyxrQkFBWjtBQUNDLG9CQUFnQjtBQURqQixHQUFmO0FBRUEsTUFBTUMsWUFBWSxHQUFHLElBQUlDLGVBQUosQ0FBb0JILFNBQXBCLENBQXJCO0FBQ0EsU0FBT0ksS0FBSyxDQUFDLDhCQUFELEVBQ1o7QUFBRUMsVUFBTSxFQUFFLE1BQVY7QUFDRUMsV0FBTyxFQUFFTCxNQURYO0FBRUVNLFFBQUksRUFBRUw7QUFGUixHQURZLENBQUwsQ0FHZ0JNLElBSGhCLENBR3FCLFVBQVVDLElBQVYsRUFBZTtBQUN2QyxXQUFPQSxJQUFJLENBQUNDLElBQUwsRUFBUDtBQUNELEdBTEksQ0FBUDtBQU1EOztBQUdELFNBQVNFLHlCQUFULENBQW1DQyxVQUFuQyxFQUE4QztBQUM1QyxTQUFPVCxLQUFLLGdDQUFMLENBQXNDSSxJQUF0QyxDQUEyQyxVQUFTQyxJQUFULEVBQWM7QUFDNURLLFdBQU8sQ0FBQ0MsR0FBUixDQUFZQyxJQUFaO0FBQ0EsV0FBT1AsSUFBSSxDQUFDQyxJQUFMLEVBQVA7QUFDRCxHQUhJLENBQVA7QUFLRDs7U0FFY08sVTs7Ozs7OEZBQWYsaUJBQTBCQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRUosbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRyxNQUFaLEVBREYsQ0FDc0I7O0FBRHRCO0FBQUEsbUJBRXFCbkIsWUFBWSxDQUFDbUIsTUFBRCxDQUZqQzs7QUFBQTtBQUVRQyxnQkFGUjtBQUdFTCxtQkFBTyxDQUFDQyxHQUFSLENBQVlJLElBQVosRUFIRixDQUdvQjs7QUFDbEJMLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUksSUFBSSxDQUFDQyxNQUFqQjs7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBT0EsU0FBU0MsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFDMUJSLFNBQU8sQ0FBQ1MsSUFBUixDQUFhRCxLQUFiO0FBQ0EsU0FBTyxJQUFQO0FBQ0Q7O0FBRURFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmQyxlQUFhLEVBQUUsdUJBQVUxQixTQUFWLEVBQXFCO0FBQ2xDYyxXQUFPLENBQUNDLEdBQVIsQ0FBWWYsU0FBWjtBQUNBLFdBQU9XLGVBQWUsQ0FBQ1gsU0FBRCxDQUFmLFVBQWlDcUIsV0FBakMsQ0FBUDtBQUNELEdBSmM7QUFLZk0sVUFBUSxFQUFFLGtCQUFVM0IsU0FBVixFQUFxQjtBQUM3QixXQUFPRCxZQUFZLENBQUNDLFNBQUQsQ0FBWixVQUE4QnFCLFdBQTlCLENBQVA7QUFDRCxHQVBjO0FBUWZPLGVBQWEsRUFBRSx1QkFBU0MsY0FBVCxFQUF3QjtBQUNyQyxXQUFPQyx3QkFBd0IsQ0FBQ0QsY0FBRCxDQUF4QixVQUErQ1IsV0FBL0MsQ0FBUDtBQUNELEdBVmM7QUFXZlUsZUFBYSxFQUFFLHVCQUFVL0IsU0FBVixFQUFxQjtBQUNsQ2MsV0FBTyxDQUFDQyxHQUFSLENBQVlmLFNBQVo7QUFDQSxXQUFPVyxlQUFlLENBQUNYLFNBQUQsQ0FBZixVQUFpQ3FCLFdBQWpDLENBQVA7QUFDRCxHQWRjO0FBZWZXLGNBQVksRUFBRSxzQkFBU0gsY0FBVCxFQUF3QjtBQUNwQyxXQUFPakIseUJBQXlCLENBQUNpQixjQUFELENBQXpCLFVBQWdEUixXQUFoRCxDQUFQO0FBQ0Q7QUFqQmMsQ0FBakIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcmVnaXN0ZXIuMmVlODA0Mjg0Mzk1NDFlMzNmYWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpO1xyXG5pbXBvcnQgQlByb21pc2UgZnJvbSBcImJsdWViaXJkXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRMb2dpbkluZm8odXNlcl9pbmZvKSB7XHJcbiAgY29uc3QgaGVhZGVyID0geydBY2NlcHQnIDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJ9O1xyXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXNlcl9pbmZvKTtcclxuICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvbG9naW5cIixcclxuICB7IG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiBoZWFkZXIsXHJcbiAgICBib2R5OiBzZWFyY2hQYXJhbXN9KS50aGVuKGZ1bmN0aW9uIChyZXNwKXtcclxuICAgICAgcmV0dXJuIHJlc3AuanNvbigpO1xyXG4gICAgfSk7IFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZWdpc3RlckluZm8odXNlcl9pbmZvKSB7XHJcbiAgY29uc3QgaGVhZGVyID0geydBY2NlcHQnIDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJ9O1xyXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXNlcl9pbmZvKTtcclxuICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvY3JlYXRlXCIsXHJcbiAgeyBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogaGVhZGVyLFxyXG4gICAgYm9keTogc2VhcmNoUGFyYW1zfSkudGhlbihmdW5jdGlvbiAocmVzcCl7XHJcbiAgICAgIHJldHVybiByZXNwLmpzb24oKTtcclxuICAgIH0pOyBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldENvbW11bml0eU5vdExvZ2dlZEluZm8oc2VhcmNoVGVybSl7XHJcbiAgcmV0dXJuIGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjgwODAvc2VhcmNoYCkudGhlbihmdW5jdGlvbihyZXNwKXtcclxuICAgICAgY29uc29sZS5sb2cobmFtZSk7XHJcbiAgICAgIHJldHVybiByZXNwLmpzb24oKTtcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjaGVja0xvZ2luKHVzZXJwdyl7XHJcbiAgY29uc29sZS5sb2codXNlcnB3KTsvL3t1c2VybmFtZTogLCBwYXNzd29yZDogfVxyXG4gIGNvbnN0IGluZm8gPSBhd2FpdCBnZXRMb2dpbkluZm8odXNlcnB3KTtcclxuICBjb25zb2xlLmxvZyhpbmZvKTsvL3tzdGF0dXM6ICwgc2NyZWVubmFtZTogfVxyXG4gIGNvbnNvbGUubG9nKGluZm8uc3RhdHVzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyb3IpIHtcclxuICBjb25zb2xlLndhcm4oZXJyb3IpO1xyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBjcmVhdGVBY2NvdW50OiBmdW5jdGlvbiAodXNlcl9pbmZvKSB7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyX2luZm8pO1xyXG4gICAgcmV0dXJuIGdldFJlZ2lzdGVySW5mbyh1c2VyX2luZm8pLmNhdGNoKGhhbmRsZUVycm9yKTtcclxuICB9LFxyXG4gIGdldExvZ2luOiBmdW5jdGlvbiAodXNlcl9pbmZvKSB7XHJcbiAgICByZXR1cm4gZ2V0TG9naW5JbmZvKHVzZXJfaW5mbykuY2F0Y2goaGFuZGxlRXJyb3IpO1xyXG4gIH0sXHJcbiAgZ2V0TG9nZ2VkSW5mbzogZnVuY3Rpb24oY29tbXVuaXR5X2luZm8pe1xyXG4gICAgcmV0dXJuIGdldENvbW11bml0eUxvZ2dlZEluSW5mbyhjb21tdW5pdHlfaW5mbykuY2F0Y2goaGFuZGxlRXJyb3IpO1xyXG4gIH0sXHJcbiAgZ2V0U2NyZWVubmFtZTogZnVuY3Rpb24gKHVzZXJfaW5mbykge1xyXG4gICAgY29uc29sZS5sb2codXNlcl9pbmZvKTtcclxuICAgIHJldHVybiBnZXRSZWdpc3RlckluZm8odXNlcl9pbmZvKS5jYXRjaChoYW5kbGVFcnJvcik7XHJcbiAgfSxcclxuICBnZXROb3RMb2dnZWQ6IGZ1bmN0aW9uKGNvbW11bml0eV9pbmZvKXtcclxuICAgIHJldHVybiBnZXRDb21tdW5pdHlOb3RMb2dnZWRJbmZvKGNvbW11bml0eV9pbmZvKS5jYXRjaChoYW5kbGVFcnJvcik7XHJcbiAgfVxyXG59O1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==