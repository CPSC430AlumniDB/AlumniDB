webpackHotUpdate_N_E("pages/register",{

/***/ "./pages/register.js":
/*!***************************!*\
  !*** ./pages/register.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_MyLayout_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/MyLayout.js */ "./components/MyLayout.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/utils.js */ "./lib/utils.js");
/* harmony import */ var _lib_utils_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_lib_utils_js__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "C:\\Users\\Brad\\database-course\\rudiments\\alumni-search\\frontend\\pages\\register.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Login = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Login, _React$Component);

  var _super = _createSuper(Login);

  function Login(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Login);

    _this = _super.call(this, props);
    _this.state = {
      username: "",
      password: ""
    }; //this.handleSearch();

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Login, [{
    key: "handleUsernameUpdate",
    value: function () {
      var _handleUsernameUpdate = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(evt) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setState({
                  username: evt.target.value
                });

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleUsernameUpdate(_x) {
        return _handleUsernameUpdate.apply(this, arguments);
      }

      return handleUsernameUpdate;
    }()
  }, {
    key: "handlePasswordUpdate",
    value: function () {
      var _handlePasswordUpdate = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(evt) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this.setState({
                  password: evt.target.value
                });

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function handlePasswordUpdate(_x2) {
        return _handlePasswordUpdate.apply(this, arguments);
      }

      return handlePasswordUpdate;
    }()
  }, {
    key: "handleSearch",
    value: function () {
      var _handleSearch = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(evt) {
        var loggedInUser;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return Object(_lib_utils_js__WEBPACK_IMPORTED_MODULE_12__["createAccount"])({
                  username: this.state.username,
                  password: this.state.password,
                  screenname: this.state.screenname,
                  zipcode: this.state.zipcode
                });

              case 2:
                loggedInUser = _context3.sent;
                console.log(loggedInUser);
                this.setState({
                  loggedInUser: loggedInUser
                });

                if (loggedInUser.status == "success") {
                  js_cookie__WEBPACK_IMPORTED_MODULE_11___default.a.set("screenname", loggedInUser.screenname);
                  next_router__WEBPACK_IMPORTED_MODULE_10___default.a.replace("/");
                }

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function handleSearch(_x3) {
        return _handleSearch.apply(this, arguments);
      }

      return handleSearch;
    }()
  }, {
    key: "render",
    value: function render() {
      var that = this;
      return __jsx(_components_MyLayout_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        style: {
          margin: "auto auto",
          width: "600px",
          textAlign: "center"
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 7
        }
      }, __jsx("h2", {
        className: "jsx-67375593",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 9
        }
      }, "Register for an Account"), __jsx("label", {
        htmlFor: "username",
        className: "jsx-67375593" + " " + "text-style",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 9
        }
      }, "Username:", " "), __jsx("input", {
        type: "text",
        id: "username",
        value: this.state.username,
        onChange: this.handleUsernameUpdate.bind(this),
        className: "jsx-67375593" + " " + "input-style",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }), __jsx("br", {
        className: "jsx-67375593",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }), " ", __jsx("br", {
        className: "jsx-67375593",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 16
        }
      }), __jsx("label", {
        htmlFor: "password",
        className: "jsx-67375593" + " " + "text-style",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }, "Password:", " "), __jsx("input", {
        type: "password",
        id: "password",
        value: this.state.password,
        onChange: this.handlePasswordUpdate.bind(this),
        className: "jsx-67375593" + " " + "input-style",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }
      }), __jsx("br", {
        className: "jsx-67375593",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 9
        }
      }), " ", __jsx("br", {
        className: "jsx-67375593",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 16
        }
      }), __jsx("br", {
        className: "jsx-67375593",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 9
        }
      }), " ", __jsx("br", {
        className: "jsx-67375593",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 16
        }
      }), __jsx("label", {
        htmlFor: "zipcode",
        className: "jsx-67375593" + " " + "text-style",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 9
        }
      }, "Zip code:", " "), __jsx("input", {
        type: "number",
        id: "zipcode",
        value: this.state.zipcode,
        onChange: this.handleZipCodeUpdate.bind(this),
        className: "jsx-67375593" + " " + "input-style",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 9
        }
      }), __jsx("br", {
        className: "jsx-67375593",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 9
        }
      }), __jsx("br", {
        className: "jsx-67375593",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 9
        }
      }), __jsx("div", {
        onClick: this.handleSearch.bind(this),
        className: "jsx-67375593" + " " + "button-style",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 9
        }
      }, "Submit"), __jsx("br", {
        className: "jsx-67375593",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 9
        }
      }), " ", __jsx("br", {
        className: "jsx-67375593",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 16
        }
      }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "67375593",
        __self: this
      }, "h1.jsx-67375593,h2.jsx-67375593,h3.jsx-67375593,h4.jsx-67375593,a.jsx-67375593,p.jsx-67375593{color:#1f618d;font-family:\"Arial\";}.button-style.jsx-67375593{margin:auto auto;cursor:pointer;background-color:#1f618d;color:#ffffff;width:150px;height:45px;font-family:\"Arial\";line-height:1.9;font-size:1.4rem;}.text-style.jsx-67375593{font-size:1.4rem;line-height:1.6rem;font-family:\"Arial\";width:50px;align:right;}.input-style.jsx-67375593{font-size:1.4rem;line-height:1.6rem;}.description.jsx-67375593{font-family:\"Arial\";font-size:\"10px\";}ul.jsx-67375593{padding:0;}li.jsx-67375593{list-style:none;margin:5px 0;}a.jsx-67375593{-webkit-text-decoration:none;text-decoration:none;color:blue;}input.jsx-67375593{margin:auto auto;width:200px;}.description.jsx-67375593{font-family:\"Arial\";font-size:\"10px\";}ul.jsx-67375593{padding:0;}li.jsx-67375593{list-style:none;margin:5px 0;}a.jsx-67375593{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-67375593:hover{opacity:0.6;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQnJhZFxcZGF0YWJhc2UtY291cnNlXFxydWRpbWVudHNcXGFsdW1uaS1zZWFyY2hcXGZyb250ZW5kXFxwYWdlc1xccmVnaXN0ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0ZvQixBQVEyQixBQUtHLEFBWUEsQUFRQSxBQUtHLEFBS1YsQUFJTSxBQUtLLEFBS0osQUFLRyxBQUtWLEFBSU0sQUFLSyxBQUtULFVBckNkLEFBd0JBLEVBY0EsRUF6RXNCLEVBdUNQLEFBd0JBLENBMURFLEFBWUksQUFRQSxBQXdCUCxHQW5CSyxBQXdCQSxTQWRuQixBQVVBLEFBY0EsR0ExRDJCLEVBTDNCLEVBaUJzQixBQVF0QixDQUtBLEFBd0JBLGFBWGEsQUF3QkEsTUFqREEsQ0FaRyxJQXNDaEIsQUF3QkEsTUFqRGMsSUFaQSxRQWFkLElBWmMsWUFDUSxvQkFDSixnQkFDQyxpQkFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxCcmFkXFxkYXRhYmFzZS1jb3Vyc2VcXHJ1ZGltZW50c1xcYWx1bW5pLXNlYXJjaFxcZnJvbnRlbmRcXHBhZ2VzXFxyZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanNcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IGpzQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHtjcmVhdGVBY2NvdW50fSBmcm9tICcuLi9saWIvdXRpbHMuanMnO1xyXG5cclxuXHJcbmNsYXNzIExvZ2luIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7IHVzZXJuYW1lOiBcIlwiLCBwYXNzd29yZDogXCJcIn07XHJcbiAgICAvL3RoaXMuaGFuZGxlU2VhcmNoKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBoYW5kbGVVc2VybmFtZVVwZGF0ZShldnQpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7dXNlcm5hbWU6IGV2dC50YXJnZXQudmFsdWV9KTtcclxufVxyXG4gIGFzeW5jIGhhbmRsZVBhc3N3b3JkVXBkYXRlKGV2dCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtwYXNzd29yZDogZXZ0LnRhcmdldC52YWx1ZX0pO1xyXG59XHJcblxyXG5cclxuYXN5bmMgaGFuZGxlU2VhcmNoKGV2dCl7XHJcbiAgbGV0IGxvZ2dlZEluVXNlciA9IGF3YWl0IGNyZWF0ZUFjY291bnQoe1xyXG4gICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsXHJcbiAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5wYXNzd29yZCxcclxuICAgIHNjcmVlbm5hbWU6IHRoaXMuc3RhdGUuc2NyZWVubmFtZSxcclxuICAgIHppcGNvZGU6IHRoaXMuc3RhdGUuemlwY29kZVxyXG4gIH0pO1xyXG4gIGNvbnNvbGUubG9nKGxvZ2dlZEluVXNlcik7XHJcbiAgdGhpcy5zZXRTdGF0ZSh7bG9nZ2VkSW5Vc2VyfSk7XHJcbiAgaWYgKGxvZ2dlZEluVXNlci5zdGF0dXMgPT0gXCJzdWNjZXNzXCIpe1xyXG4gICAganNDb29raWUuc2V0KFwic2NyZWVubmFtZVwiLCBsb2dnZWRJblVzZXIuc2NyZWVubmFtZSk7XHJcbiAgICBSb3V0ZXIucmVwbGFjZShcIi9cIik7XHJcbiAgfVxyXG59XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dFxyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCJhdXRvIGF1dG9cIiwgd2lkdGg6IFwiNjAwcHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aDI+UmVnaXN0ZXIgZm9yIGFuIEFjY291bnQ8L2gyPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlcm5hbWVcIiBjbGFzc05hbWU9XCJ0ZXh0LXN0eWxlXCI+XHJcbiAgICAgICAgICBVc2VybmFtZTp7XCIgXCJ9XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtc3R5bGVcIlxyXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVVc2VybmFtZVVwZGF0ZS5iaW5kKHRoaXMpfVxyXG5cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxiciAvPiA8YnIgLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwidGV4dC1zdHlsZVwiPlxyXG4gICAgICAgICAgUGFzc3dvcmQ6e1wiIFwifVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1zdHlsZVwiXHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVBhc3N3b3JkVXBkYXRlLmJpbmQodGhpcyl9XHJcblxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJyIC8+IDxiciAvPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxiciAvPiA8YnIgLz5cclxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInppcGNvZGVcIiBjbGFzc05hbWU9XCJ0ZXh0LXN0eWxlXCI+XHJcbiAgICAgICAgICBaaXAgY29kZTp7XCIgXCJ9XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgaWQ9XCJ6aXBjb2RlXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LXN0eWxlXCJcclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnppcGNvZGV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVaaXBDb2RlVXBkYXRlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1zdHlsZVwiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlU2VhcmNoLmJpbmQodGhpcyl9PlN1Ym1pdDwvZGl2PlxyXG4gICAgICAgIDxiciAvPiA8YnIgLz5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBoMSxcclxuICAgICAgICAgIGgyLFxyXG4gICAgICAgICAgaDMsXHJcbiAgICAgICAgICBoNCxcclxuICAgICAgICAgIGEsXHJcbiAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6ICMxZjYxOGQ7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ1dHRvbi1zdHlsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjYxOGQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuOTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRleHQtc3R5bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGFsaWduOiByaWdodDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuaW5wdXQtc3R5bGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNnJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IFwiMTBweFwiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogXCIxMHB4XCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9naW47XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\Brad\\\\database-course\\\\rudiments\\\\alumni-search\\\\frontend\\\\pages\\\\register.js */"));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Login);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiTG9naW4iLCJwcm9wcyIsInN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImV2dCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJjcmVhdGVBY2NvdW50Iiwic2NyZWVubmFtZSIsInppcGNvZGUiLCJsb2dnZWRJblVzZXIiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwianNDb29raWUiLCJzZXQiLCJSb3V0ZXIiLCJyZXBsYWNlIiwidGhhdCIsIm1hcmdpbiIsIndpZHRoIiwidGV4dEFsaWduIiwiaGFuZGxlVXNlcm5hbWVVcGRhdGUiLCJiaW5kIiwiaGFuZGxlUGFzc3dvcmRVcGRhdGUiLCJoYW5kbGVaaXBDb2RlVXBkYXRlIiwiaGFuZGxlU2VhcmNoIiwiUmVhY3QiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7SUFHTUEsSzs7Ozs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUFFQyxjQUFRLEVBQUUsRUFBWjtBQUFnQkMsY0FBUSxFQUFFO0FBQTFCLEtBQWIsQ0FIaUIsQ0FJakI7O0FBSmlCO0FBS2xCOzs7OztvT0FFMEJDLEc7Ozs7O0FBQ3pCLHFCQUFLQyxRQUFMLENBQWM7QUFBQ0gsMEJBQVEsRUFBRUUsR0FBRyxDQUFDRSxNQUFKLENBQVdDO0FBQXRCLGlCQUFkOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FPQUV5QkgsRzs7Ozs7QUFDekIscUJBQUtDLFFBQUwsQ0FBYztBQUFDRiwwQkFBUSxFQUFFQyxHQUFHLENBQUNFLE1BQUosQ0FBV0M7QUFBdEIsaUJBQWQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Nk5BSWVILEc7Ozs7Ozs7dUJBQ1FJLG9FQUFhLENB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QSwwQ0FHWSxhQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFqQ0YsRUF3Q0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBeENGLEVBeUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQXpDRixFQTBDRTtBQUE4QixlQUFPLEVBQUUsS0FBS0csWUFBTCxDQUFrQkgsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBdkM7QUFBQSwwQ0FBZSxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBMUNGLEVBMkNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQTNDRixPQTJDUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUEzQ1Q7QUFBQTtBQUFBO0FBQUEsMnNQQURGO0FBa0lEOzs7O0VBbktpQkksNENBQUssQ0FBQ0MsUzs7QUFzS1g5QixvRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9yZWdpc3Rlci45ZTgzYzEyMDc4MjlmNzFiOTczNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9NeUxheW91dC5qc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQganNDb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQge2NyZWF0ZUFjY291bnR9IGZyb20gJy4uL2xpYi91dGlscy5qcyc7XHJcblxyXG5cclxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwifTtcclxuICAgIC8vdGhpcy5oYW5kbGVTZWFyY2goKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGhhbmRsZVVzZXJuYW1lVXBkYXRlKGV2dCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHt1c2VybmFtZTogZXZ0LnRhcmdldC52YWx1ZX0pO1xyXG59XHJcbiAgYXN5bmMgaGFuZGxlUGFzc3dvcmRVcGRhdGUoZXZ0KXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Bhc3N3b3JkOiBldnQudGFyZ2V0LnZhbHVlfSk7XHJcbn1cclxuXHJcblxyXG5hc3luYyBoYW5kbGVTZWFyY2goZXZ0KXtcclxuICBsZXQgbG9nZ2VkSW5Vc2VyID0gYXdhaXQgY3JlYXRlQWNjb3VudCh7XHJcbiAgICB1c2VybmFtZTogdGhpcy5zdGF0ZS51c2VybmFtZSxcclxuICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkLFxyXG4gICAgc2NyZWVubmFtZTogdGhpcy5zdGF0ZS5zY3JlZW5uYW1lLFxyXG4gICAgemlwY29kZTogdGhpcy5zdGF0ZS56aXBjb2RlXHJcbiAgfSk7XHJcbiAgY29uc29sZS5sb2cobG9nZ2VkSW5Vc2VyKTtcclxuICB0aGlzLnNldFN0YXRlKHtsb2dnZWRJblVzZXJ9KTtcclxuICBpZiAobG9nZ2VkSW5Vc2VyLnN0YXR1cyA9PSBcInN1Y2Nlc3NcIil7XHJcbiAgICBqc0Nvb2tpZS5zZXQoXCJzY3JlZW5uYW1lXCIsIGxvZ2dlZEluVXNlci5zY3JlZW5uYW1lKTtcclxuICAgIFJvdXRlci5yZXBsYWNlKFwiL1wiKTtcclxuICB9XHJcbn1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0XHJcbiAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcImF1dG8gYXV0b1wiLCB3aWR0aDogXCI2MDBweFwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxoMj5SZWdpc3RlciBmb3IgYW4gQWNjb3VudDwvaDI+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VybmFtZVwiIGNsYXNzTmFtZT1cInRleHQtc3R5bGVcIj5cclxuICAgICAgICAgIFVzZXJuYW1lOntcIiBcIn1cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpbnB1dC1zdHlsZVwiXHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS51c2VybmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVVzZXJuYW1lVXBkYXRlLmJpbmQodGhpcyl9XHJcblxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJyIC8+IDxiciAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJ0ZXh0LXN0eWxlXCI+XHJcbiAgICAgICAgICBQYXNzd29yZDp7XCIgXCJ9XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImlucHV0LXN0eWxlXCJcclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnBhc3N3b3JkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlUGFzc3dvcmRVcGRhdGUuYmluZCh0aGlzKX1cclxuXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnIgLz4gPGJyIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGJyIC8+IDxiciAvPlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiemlwY29kZVwiIGNsYXNzTmFtZT1cInRleHQtc3R5bGVcIj5cclxuICAgICAgICAgIFppcCBjb2RlOntcIiBcIn1cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICBpZD1cInppcGNvZGVcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaW5wdXQtc3R5bGVcIlxyXG4gICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuemlwY29kZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZVppcENvZGVVcGRhdGUuYmluZCh0aGlzKX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uLXN0eWxlXCIgb25DbGljaz17dGhpcy5oYW5kbGVTZWFyY2guYmluZCh0aGlzKX0+U3VibWl0PC9kaXY+XHJcbiAgICAgICAgPGJyIC8+IDxiciAvPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIGgxLFxyXG4gICAgICAgICAgaDIsXHJcbiAgICAgICAgICBoMyxcclxuICAgICAgICAgIGg0LFxyXG4gICAgICAgICAgYSxcclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogIzFmNjE4ZDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnV0dG9uLXN0eWxlIHtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFmNjE4ZDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS45O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGV4dC1zdHlsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pbnB1dC1zdHlsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS42cmVtO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogXCIxMHB4XCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiBcIjEwcHhcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==