webpackHotUpdate_N_E("pages/login",{

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

function getSearchInInfo(searchTerm) {
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
    return getSearchInInfo(community_info)["catch"](handleError);
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

/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
false,

/***/ "./node_modules/next/dist/build/polyfills/fetch/whatwg-fetch.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3V0aWxzLmpzIl0sIm5hbWVzIjpbImdldExvZ2luSW5mbyIsInVzZXJfaW5mbyIsImhlYWRlciIsInNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJ0aGVuIiwicmVzcCIsImpzb24iLCJnZXRSZWdpc3RlckluZm8iLCJnZXRTZWFyY2hJbkluZm8iLCJzZWFyY2hUZXJtIiwiY29uc29sZSIsImxvZyIsImNoZWNrTG9naW4iLCJ1c2VycHciLCJpbmZvIiwic3RhdHVzIiwiaGFuZGxlRXJyb3IiLCJlcnJvciIsIndhcm4iLCJtb2R1bGUiLCJleHBvcnRzIiwiY3JlYXRlQWNjb3VudCIsImdldExvZ2luIiwiZ2V0TG9nZ2VkSW5mbyIsImNvbW11bml0eV9pbmZvIiwiZ2V0U2NyZWVubmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsWUFBVCxDQUFzQkMsU0FBdEIsRUFBaUM7QUFDL0IsTUFBTUMsTUFBTSxHQUFHO0FBQUMsY0FBVyxrQkFBWjtBQUNDLG9CQUFnQjtBQURqQixHQUFmO0FBRUEsTUFBTUMsWUFBWSxHQUFHLElBQUlDLGVBQUosQ0FBb0JILFNBQXBCLENBQXJCO0FBQ0EsU0FBT0ksS0FBSyxDQUFDLDZCQUFELEVBQ1o7QUFBRUMsVUFBTSxFQUFFLE1BQVY7QUFDRUMsV0FBTyxFQUFFTCxNQURYO0FBRUVNLFFBQUksRUFBRUw7QUFGUixHQURZLENBQUwsQ0FHZ0JNLElBSGhCLENBR3FCLFVBQVVDLElBQVYsRUFBZTtBQUN2QyxXQUFPQSxJQUFJLENBQUNDLElBQUwsRUFBUDtBQUNELEdBTEksQ0FBUDtBQU1EOztBQUVELFNBQVNDLGVBQVQsQ0FBeUJYLFNBQXpCLEVBQW9DO0FBQ2xDLE1BQU1DLE1BQU0sR0FBRztBQUFDLGNBQVcsa0JBQVo7QUFDQyxvQkFBZ0I7QUFEakIsR0FBZjtBQUVBLE1BQU1DLFlBQVksR0FBRyxJQUFJQyxlQUFKLENBQW9CSCxTQUFwQixDQUFyQjtBQUNBLFNBQU9JLEtBQUssQ0FBQyw4QkFBRCxFQUNaO0FBQUVDLFVBQU0sRUFBRSxNQUFWO0FBQ0VDLFdBQU8sRUFBRUwsTUFEWDtBQUVFTSxRQUFJLEVBQUVMO0FBRlIsR0FEWSxDQUFMLENBR2dCTSxJQUhoQixDQUdxQixVQUFVQyxJQUFWLEVBQWU7QUFDdkMsV0FBT0EsSUFBSSxDQUFDQyxJQUFMLEVBQVA7QUFDRCxHQUxJLENBQVA7QUFNRDs7QUFHRCxTQUFTRSxlQUFULENBQXlCQyxVQUF6QixFQUFvQztBQUNsQyxTQUFPVCxLQUFLLG1EQUE0Q1MsVUFBNUMsRUFBTCxDQUErREwsSUFBL0QsQ0FBb0UsVUFBU0MsSUFBVCxFQUFjO0FBQ3JGSyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsVUFBWjtBQUNBLFdBQU9KLElBQUksQ0FBQ0MsSUFBTCxFQUFQO0FBQ0QsR0FISSxDQUFQO0FBS0Q7O1NBRWNNLFU7Ozs7OzhGQUFmLGlCQUEwQkMsTUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0VILG1CQUFPLENBQUNDLEdBQVIsQ0FBWUUsTUFBWixFQURGLENBQ3NCOztBQUR0QjtBQUFBLG1CQUVxQmxCLFlBQVksQ0FBQ2tCLE1BQUQsQ0FGakM7O0FBQUE7QUFFUUMsZ0JBRlI7QUFHRUosbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRyxJQUFaLEVBSEYsQ0FHb0I7O0FBQ2xCSixtQkFBTyxDQUFDQyxHQUFSLENBQVlHLElBQUksQ0FBQ0MsTUFBakI7O0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQU9BLFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQzFCUCxTQUFPLENBQUNRLElBQVIsQ0FBYUQsS0FBYjtBQUNBLFNBQU8sSUFBUDtBQUNEOztBQUVERSxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFDZkMsZUFBYSxFQUFFLHVCQUFVekIsU0FBVixFQUFxQjtBQUNsQ2MsV0FBTyxDQUFDQyxHQUFSLENBQVlmLFNBQVo7QUFDQSxXQUFPVyxlQUFlLENBQUNYLFNBQUQsQ0FBZixVQUFpQ29CLFdBQWpDLENBQVA7QUFDRCxHQUpjO0FBS2ZNLFVBQVEsRUFBRSxrQkFBVTFCLFNBQVYsRUFBcUI7QUFDN0IsV0FBT0QsWUFBWSxDQUFDQyxTQUFELENBQVosVUFBOEJvQixXQUE5QixDQUFQO0FBQ0QsR0FQYztBQVFmTyxlQUFhLEVBQUUsdUJBQVNDLGNBQVQsRUFBd0I7QUFDckMsV0FBT2hCLGVBQWUsQ0FBQ2dCLGNBQUQsQ0FBZixVQUFzQ1IsV0FBdEMsQ0FBUDtBQUNELEdBVmM7QUFXZlMsZUFBYSxFQUFFLHVCQUFVN0IsU0FBVixFQUFxQjtBQUNsQ2MsV0FBTyxDQUFDQyxHQUFSLENBQVlmLFNBQVo7QUFDQSxXQUFPVyxlQUFlLENBQUNYLFNBQUQsQ0FBZixVQUFpQ29CLFdBQWpDLENBQVA7QUFDRDtBQWRjLENBQWpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmY3OGNiYzZkMjliNTZiMGQ3MjgyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQlByb21pc2UgZnJvbSBcImJsdWViaXJkXCI7XHJcblxyXG5mdW5jdGlvbiBnZXRMb2dpbkluZm8odXNlcl9pbmZvKSB7XHJcbiAgY29uc3QgaGVhZGVyID0geydBY2NlcHQnIDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJ9O1xyXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXNlcl9pbmZvKTtcclxuICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvbG9naW5cIixcclxuICB7IG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiBoZWFkZXIsXHJcbiAgICBib2R5OiBzZWFyY2hQYXJhbXN9KS50aGVuKGZ1bmN0aW9uIChyZXNwKXtcclxuICAgICAgcmV0dXJuIHJlc3AuanNvbigpO1xyXG4gICAgfSk7IFxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSZWdpc3RlckluZm8odXNlcl9pbmZvKSB7XHJcbiAgY29uc3QgaGVhZGVyID0geydBY2NlcHQnIDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJ9O1xyXG4gIGNvbnN0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXModXNlcl9pbmZvKTtcclxuICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODAvY3JlYXRlXCIsXHJcbiAgeyBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczogaGVhZGVyLFxyXG4gICAgYm9keTogc2VhcmNoUGFyYW1zfSkudGhlbihmdW5jdGlvbiAocmVzcCl7XHJcbiAgICAgIHJldHVybiByZXNwLmpzb24oKTtcclxuICAgIH0pOyBcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFNlYXJjaEluSW5mbyhzZWFyY2hUZXJtKXtcclxuICByZXR1cm4gZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9zZWFyY2g/c2VhcmNoVGVybT0ke3NlYXJjaFRlcm19YCkudGhlbihmdW5jdGlvbihyZXNwKXtcclxuICAgICAgY29uc29sZS5sb2coc2VhcmNoVGVybSk7XHJcbiAgICAgIHJldHVybiByZXNwLmpzb24oKTtcclxuICAgIH0pXHJcblxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjaGVja0xvZ2luKHVzZXJwdyl7XHJcbiAgY29uc29sZS5sb2codXNlcnB3KTsvL3t1c2VybmFtZTogLCBwYXNzd29yZDogfVxyXG4gIGNvbnN0IGluZm8gPSBhd2FpdCBnZXRMb2dpbkluZm8odXNlcnB3KTtcclxuICBjb25zb2xlLmxvZyhpbmZvKTsvL3tzdGF0dXM6ICwgc2NyZWVubmFtZTogfVxyXG4gIGNvbnNvbGUubG9nKGluZm8uc3RhdHVzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyb3IpIHtcclxuICBjb25zb2xlLndhcm4oZXJyb3IpO1xyXG4gIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBjcmVhdGVBY2NvdW50OiBmdW5jdGlvbiAodXNlcl9pbmZvKSB7XHJcbiAgICBjb25zb2xlLmxvZyh1c2VyX2luZm8pO1xyXG4gICAgcmV0dXJuIGdldFJlZ2lzdGVySW5mbyh1c2VyX2luZm8pLmNhdGNoKGhhbmRsZUVycm9yKTtcclxuICB9LFxyXG4gIGdldExvZ2luOiBmdW5jdGlvbiAodXNlcl9pbmZvKSB7XHJcbiAgICByZXR1cm4gZ2V0TG9naW5JbmZvKHVzZXJfaW5mbykuY2F0Y2goaGFuZGxlRXJyb3IpO1xyXG4gIH0sXHJcbiAgZ2V0TG9nZ2VkSW5mbzogZnVuY3Rpb24oY29tbXVuaXR5X2luZm8pe1xyXG4gICAgcmV0dXJuIGdldFNlYXJjaEluSW5mbyhjb21tdW5pdHlfaW5mbykuY2F0Y2goaGFuZGxlRXJyb3IpO1xyXG4gIH0sXHJcbiAgZ2V0U2NyZWVubmFtZTogZnVuY3Rpb24gKHVzZXJfaW5mbykge1xyXG4gICAgY29uc29sZS5sb2codXNlcl9pbmZvKTtcclxuICAgIHJldHVybiBnZXRSZWdpc3RlckluZm8odXNlcl9pbmZvKS5jYXRjaChoYW5kbGVFcnJvcik7XHJcbiAgfSxcclxuIFxyXG59O1xyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==