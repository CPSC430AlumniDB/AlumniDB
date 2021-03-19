webpackHotUpdate_N_E("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
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
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/utils */ "./lib/utils.js");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_lib_utils__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "C:\\Users\\Brad\\Desktop\\AlumniDB\\alumni-search\\frontend\\pages\\search.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }





var Home = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, _React$Component);

  var _super = _createSuper(Home);

  function Home(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Home);

    _this = _super.call(this, props);
    _this.state = {
      search: '',
      results: []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Home, [{
    key: "handleUpdate",
    value: function handleUpdate(evt) {
      this.setState({
        search: evt.target.value
      }, this.handleSearch);
    }
  }, {
    key: "handleSearch",
    value: function () {
      var _handleSearch = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var results;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(js_cookie__WEBPACK_IMPORTED_MODULE_10___default.a.get("username") == undefined)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return Object(_lib_utils__WEBPACK_IMPORTED_MODULE_11__["getLoggedInfo"])(this.state.search);

              case 3:
                results = _context.sent;

                if (results) {
                  this.setState({
                    results: results
                  });
                } else {
                  this.setState({
                    results: []
                  });
                  console.log(results);
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function handleSearch() {
        return _handleSearch.apply(this, arguments);
      }

      return handleSearch;
    }()
  }, {
    key: "handleInput",
    value: function handleInput(evt) {
      this.handleUpdate(evt);
    }
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
          lineNumber: 45,
          columnNumber: 7
        }
      }, __jsx("h2", {
        className: "jsx-3329876545",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 9
        }
      }, "Enter In a Keyword to Start Searching Alumni"), __jsx("input", {
        type: "text",
        id: "bar",
        value: this.state.search,
        onChange: this.handleInput.bind(that),
        className: "jsx-3329876545" + " " + "text-style",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }
      }), __jsx("br", {
        className: "jsx-3329876545",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 9
        }
      }), __jsx("br", {
        className: "jsx-3329876545",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }), __jsx("br", {
        className: "jsx-3329876545",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 9
        }
      }), " ", __jsx("br", {
        className: "jsx-3329876545",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 16
        }
      }), this.state.results.length > 0 && this.state.search !== '' ? __jsx("table", {
        id: "entries",
        className: "jsx-3329876545",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }
      }, __jsx("tbody", {
        className: "jsx-3329876545",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }
      }, this.state.results.map(function (item, key) {
        return __jsx("tr", {
          key: key,
          className: "jsx-3329876545",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 23
          }
        }, __jsx("td", {
          className: "jsx-3329876545",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 27
          }
        }, item.firstname), __jsx("td", {
          className: "jsx-3329876545",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 27
          }
        }, item.middlename), __jsx("td", {
          className: "jsx-3329876545",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 27
          }
        }, item.lastname), __jsx("td", {
          className: "jsx-3329876545",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 27
          }
        }, item.occupation), __jsx("td", {
          className: "jsx-3329876545",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 27
          }
        }, item.email));
      }))) : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3329876545",
        __self: this
      }, "h1.jsx-3329876545,h2.jsx-3329876545,h3.jsx-3329876545,h4.jsx-3329876545,a.jsx-3329876545,td.jsx-3329876545,p.jsx-3329876545{color:#1f618d;font-family:\"Arial\";}.button-style.jsx-3329876545{margin:auto auto;cursor:pointer;background-color:#228b22;color:#ffffff;width:100px;font-family:\"Arial\";}.text-style.jsx-3329876545{margin:auto auto;width:200px;}input.jsx-3329876545{margin:auto auto;width:200px;}.description.jsx-3329876545{font-family:\"Arial\";font-size:\"10px\";}ul.jsx-3329876545{padding:0;}li.jsx-3329876545{list-style:none;margin:5px 0;}a.jsx-3329876545{-webkit-text-decoration:none;text-decoration:none;color:blue;}a.jsx-3329876545:hover{opacity:0.6;}table.jsx-3329876545{color:#333;font-family:Helvetica,Arial,sans-serif;width:100%;border-collapse: collapse;border-spacing:0;}td.jsx-3329876545,th.jsx-3329876545{border:1px solid #CCC;height:30px;}th.jsx-3329876545{background:#F3F3F3;font-weight:bold;}td.jsx-3329876545{background:#FAFAFA;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQnJhZFxcRGVza3RvcFxcQWx1bW5pREJcXGFsdW1uaS1zZWFyY2hcXGZyb250ZW5kXFxwYWdlc1xcc2VhcmNoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThFb0IsQUFTMkIsQUFLRyxBQVNBLEFBS0EsQUFLRyxBQUtWLEFBSU0sQUFLSyxBQUtULEFBSUQsQUFRaUIsQUFHVCxBQUtBLFVBakNyQixDQWtCMkMsQ0FKM0MsRUEzQ3NCLEVBaUNQLENBNUJFLEFBU0gsQUFLQSxFQXVDSyxBQUtDLENBdkNELEVBOEJ3QixPQXZDM0MsQUFLQSxBQWNBLEdBNUIyQixFQUwzQixBQXFENEMsRUFLNUMsQ0FsQ0EsQUF1Q0EsYUExQmEsQUFVQSxPQXpDRyxJQWdDaEIsQUFXVSxVQTFDSSxZQUNRLElBMENILGdCQXpDbkIsQ0EwQ0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxCcmFkXFxEZXNrdG9wXFxBbHVtbmlEQlxcYWx1bW5pLXNlYXJjaFxcZnJvbnRlbmRcXHBhZ2VzXFxzZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL015TGF5b3V0LmpzXCI7XHJcbmltcG9ydCBqc0Nvb2tpZSBmcm9tIFwianMtY29va2llXCI7XHJcbmltcG9ydCB7IGdldEluZm8sIGdldExvZ2dlZEluZm8sIGdldE5vdExvZ2dlZCB9IGZyb20gXCIuLi9saWIvdXRpbHNcIjtcclxuXHJcbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHsgXHJcbiAgICAgIHNlYXJjaDogJycsXHJcbiAgICAgIHJlc3VsdHM6IFtdXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBoYW5kbGVVcGRhdGUoZXZ0KSB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VhcmNoOiBldnQudGFyZ2V0LnZhbHVlIH0sIHRoaXMuaGFuZGxlU2VhcmNoKTsgICAgXHJcbiAgfVxyXG5cclxuICBhc3luYyBoYW5kbGVTZWFyY2goKSB7XHJcbiAgICAvL25vIHVzZXJcclxuICAgIGlmKGpzQ29va2llLmdldChcInVzZXJuYW1lXCIpID09IHVuZGVmaW5lZCl7XHJcbiAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBnZXRMb2dnZWRJbmZvKHRoaXMuc3RhdGUuc2VhcmNoKTtcclxuICAgICAgaWYocmVzdWx0cyl7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlc3VsdHM6IHJlc3VsdHMgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgICAgcmVzdWx0czogW11cclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcclxuICAgICAgfVxyXG4gICBcclxuICAgIH0gICAgXHJcbiAgfVxyXG5cclxuICAgaGFuZGxlSW5wdXQoZXZ0KXtcclxuICAgIHRoaXMuaGFuZGxlVXBkYXRlKGV2dCk7XHJcbiAgfVxyXG5cclxuIFxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXRcclxuICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiYXV0byBhdXRvXCIsIHdpZHRoOiBcIjYwMHB4XCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPGgyPkVudGVyIEluIGEgS2V5d29yZCB0byBTdGFydCBTZWFyY2hpbmcgQWx1bW5pPC9oMj5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtc3R5bGVcIlxyXG4gICAgICAgICAgaWQgPSBcImJhclwiXHJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zZWFyY2h9XHJcbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dC5iaW5kKHRoYXQpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPGJyIC8+IDxiciAvPlxyXG4gICAgICBcclxuICAgICAgICB7dGhpcy5zdGF0ZS5yZXN1bHRzLmxlbmd0aCA+IDAgJiYgdGhpcy5zdGF0ZS5zZWFyY2ggIT09ICcnID8gKFxyXG4gICAgICAgICAgPHRhYmxlIGlkPVwiZW50cmllc1wiPlxyXG5cclxuICAgICAgICAgIDx0Ym9keT57dGhpcy5zdGF0ZS5yZXN1bHRzLm1hcChmdW5jdGlvbihpdGVtLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5ID0ge2tleX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLmZpcnN0bmFtZX08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5taWRkbGVuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLmxhc3RuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLm9jY3VwYXRpb259PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uZW1haWx9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgIH0pfTwvdGJvZHk+XHJcbiAgICAgICAgICAgPC90YWJsZT5cclxuICAgICAgICApIDogbnVsbH1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICBoMSxcclxuICAgICAgICAgIGgyLFxyXG4gICAgICAgICAgaDMsXHJcbiAgICAgICAgICBoNCxcclxuICAgICAgICAgIGEsXHJcbiAgICAgICAgICB0ZCxcclxuICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICBjb2xvcjogIzFmNjE4ZDsgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmJ1dHRvbi1zdHlsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMjhiMjI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLnRleHQtc3R5bGUge1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlucHV0IHtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IFwiMTBweFwiO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0YWJsZSB7ICBcclxuICAgICAgICAgICAgY29sb3I6ICMzMzM7IC8qIExpZ2h0ZW4gdXAgZm9udCBjb2xvciAqL1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjsgLyogTmljZXIgZm9udCAqL1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTsgXHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xsYXBzZTogXHJcbiAgICAgICAgICAgIGNvbGxhcHNlOyBcclxuICAgICAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICB0ZCwgdGggeyBib3JkZXI6IDFweCBzb2xpZCAjQ0NDOyBoZWlnaHQ6IDMwcHg7IH0gLyogTWFrZSBjZWxscyBhIGJpdCB0YWxsZXIgKi9cclxuICAgICAgICBcclxuICAgICAgICAgIHRoIHsgIFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjNGM0YzOyAvKiBMaWdodCBncmV5IGJhY2tncm91bmQgKi9cclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7IC8qIE1ha2Ugc3VyZSB0aGV5J3JlIGJvbGQgKi9cclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgIHRkIHsgIFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkFGQUZBOyAvKiBMaWdodGVyIGdyZXkgYmFja2dyb3VuZCAqL1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlciBvdXIgdGV4dCAqL1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\Brad\\\\Desktop\\\\AlumniDB\\\\alumni-search\\\\frontend\\\\pages\\\\search.js */"));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInN0YXRlIiwic2VhcmNoIiwicmVzdWx0cyIsImV2dCIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVTZWFyY2giLCJqc0Nvb2tpZSIsImdldCIsInVuZGVmaW5lZCIsImdldExvZ2dlZEluZm8iLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlVXBkYXRlIiwidGhhdCIsIm1hcmdpbiIsIndpZHRoIiwidGV4dEFsaWduIiwiaGFuZGxlSW5wdXQiLCJiaW5kIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImtleSIsImZpcnN0bmFtZSIsIm1pZGRsZW5hbWUiLCJsYXN0bmFtZSIsIm9jY3VwYXRpb24iLCJlbWFpbCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7SUFFTUEsSTs7Ozs7QUFDSixnQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUVBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBQUUsRUFERztBQUVYQyxhQUFPLEVBQUU7QUFGRSxLQUFiO0FBSGlCO0FBUWxCOzs7O2lDQUVZQyxHLEVBQUs7QUFDaEIsV0FBS0MsUUFBTCxDQUFjO0FBQUVILGNBQU0sRUFBRUUsR0FBRyxDQUFDRSxNQUFKLENBQVdDO0FBQXJCLE9BQWQsRUFBNEMsS0FBS0MsWUFBakQ7QUFDRDs7Ozs7Ozs7OztzQkFJSUMsaURBQVEsQ0FBQ0MsR0FBVCxDQUFhLFVBQWIsS0FBNEJDLFM7Ozs7Ozt1QkFDUEMsaUVBQWEsQ0FBQyxLQUFLWCxLQUFMLENBQVdDLE1BQVosQzs7O0FBQTdCQyx1Qjs7QUFDTixvQkFBR0EsT0FBSCxFQUFXO0FBQ1QsdUJBQUtFLFFBQUwsQ0FBYztBQUFFRiwyQkFBTyxFQUFFQTtBQUFYLG1CQUFkO0FBQ0QsaUJBRkQsTUFFTztBQUNMLHVCQUFLRSxRQUFMLENBQWM7QUFDWkYsMkJBQU8sRUFBRTtBQURHLG1CQUFkO0FBR0FVLHlCQUFPLENBQUNDLEdBQVIsQ0FBWVgsT0FBWjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0NBS1FDLEcsRUFBSTtBQUNmLFdBQUtXLFlBQUwsQ0FBa0JYLEdBQWxCO0FBQ0Q7Ozs2QkFJUTtBQUNQLFVBQU1ZLElBQUksR0FBRyxJQUFiO0FBQ0EsYUFDRSxNQUFDLCtEQUFEO0FBQ0UsYUFBSyxFQUFFO0FBQUVDLGdCQUFNLEVBQUUsV0FBVjtBQUF1QkMsZUFBSyxFQUFFLE9BQTlCO0FBQXVDQyxtQkFBUyxFQUFFO0FBQWxELFNBRFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3REFIRixFQUlFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFHRSxVQUFFLEVBQUcsS0FIUDtBQUlFLGFBQUssRUFBRSxLQUFLbEIsS0FBTCxDQUFXQyxNQUpwQjtBQUtFLGdCQUFRLEVBQUUsS0FBS2tCLFdBQUwsQ0FBaUJDLElBQWpCLENBQXNCTCxJQUF0QixDQUxaO0FBQUEsNENBRVksWUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSkYsRUFXRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFYRixFQVlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQVpGLEVBY0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBZEYsT0FjUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFkVCxFQWdCRyxLQUFLZixLQUFMLENBQVdFLE9BQVgsQ0FBbUJtQixNQUFuQixHQUE0QixDQUE1QixJQUFpQyxLQUFLckIsS0FBTCxDQUFXQyxNQUFYLEtBQXNCLEVBQXZELEdBQ0M7QUFBTyxVQUFFLEVBQUMsU0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBUSxLQUFLRCxLQUFMLENBQVdFLE9BQVgsQ0FBbUJvQixHQUFuQixDQUF1QixVQUFTQyxJQUFULEVBQWVDLEdBQWYsRUFBb0I7QUFFMUMsZUFDRztBQUFJLGFBQUcsRUFBSUEsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0QsSUFBSSxDQUFDRSxTQUFWLENBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0YsSUFBSSxDQUFDRyxVQUFWLENBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0gsSUFBSSxDQUFDSSxRQUFWLENBSEosRUFJSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0osSUFBSSxDQUFDSyxVQUFWLENBSkosRUFLSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBS0wsSUFBSSxDQUFDTSxLQUFWLENBTEosQ0FESDtBQVVELE9BWkEsQ0FBUixDQUZBLENBREQsR0FpQkcsSUFqQ047QUFBQTtBQUFBO0FBQUEsNHRPQURGO0FBZ0hEOzs7O0VBdkpnQkMsNENBQUssQ0FBQ0MsUzs7QUEwSlZqQyxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZWFyY2guN2YzZTcyNTlkMDMwYWVmZDU5NmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTXlMYXlvdXQuanNcIjtcclxuaW1wb3J0IGpzQ29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IHsgZ2V0SW5mbywgZ2V0TG9nZ2VkSW5mbywgZ2V0Tm90TG9nZ2VkIH0gZnJvbSBcIi4uL2xpYi91dGlsc1wiO1xyXG5cclxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0geyBcclxuICAgICAgc2VhcmNoOiAnJyxcclxuICAgICAgcmVzdWx0czogW11cclxuICAgIH07XHJcbiAgICBcclxuICB9XHJcblxyXG4gIGhhbmRsZVVwZGF0ZShldnQpIHtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2g6IGV2dC50YXJnZXQudmFsdWUgfSwgdGhpcy5oYW5kbGVTZWFyY2gpOyAgICBcclxuICB9XHJcblxyXG4gIGFzeW5jIGhhbmRsZVNlYXJjaCgpIHtcclxuICAgIC8vbm8gdXNlclxyXG4gICAgaWYoanNDb29raWUuZ2V0KFwidXNlcm5hbWVcIikgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdldExvZ2dlZEluZm8odGhpcy5zdGF0ZS5zZWFyY2gpO1xyXG4gICAgICBpZihyZXN1bHRzKXtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmVzdWx0czogcmVzdWx0cyB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgXHJcbiAgICAgICAgICByZXN1bHRzOiBbXVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xyXG4gICAgICB9XHJcbiAgIFxyXG4gICAgfSAgICBcclxuICB9XHJcblxyXG4gICBoYW5kbGVJbnB1dChldnQpe1xyXG4gICAgdGhpcy5oYW5kbGVVcGRhdGUoZXZ0KTtcclxuICB9XHJcblxyXG4gXHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPExheW91dFxyXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCJhdXRvIGF1dG9cIiwgd2lkdGg6IFwiNjAwcHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aDI+RW50ZXIgSW4gYSBLZXl3b3JkIHRvIFN0YXJ0IFNlYXJjaGluZyBBbHVtbmk8L2gyPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1zdHlsZVwiXHJcbiAgICAgICAgICBpZCA9IFwiYmFyXCJcclxuICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLnNlYXJjaH1cclxuICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0LmJpbmQodGhhdCl9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgICBcclxuICAgICAgICA8YnIgLz4gPGJyIC8+XHJcbiAgICAgIFxyXG4gICAgICAgIHt0aGlzLnN0YXRlLnJlc3VsdHMubGVuZ3RoID4gMCAmJiB0aGlzLnN0YXRlLnNlYXJjaCAhPT0gJycgPyAoXHJcbiAgICAgICAgICA8dGFibGUgaWQ9XCJlbnRyaWVzXCI+XHJcblxyXG4gICAgICAgICAgPHRib2R5Pnt0aGlzLnN0YXRlLnJlc3VsdHMubWFwKGZ1bmN0aW9uKGl0ZW0sIGtleSkge1xyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXkgPSB7a2V5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0uZmlyc3RuYW1lfTwvdGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPntpdGVtLm1pZGRsZW5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ubGFzdG5hbWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e2l0ZW0ub2NjdXBhdGlvbn08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57aXRlbS5lbWFpbH08L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgfSl9PC90Ym9keT5cclxuICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgIGgxLFxyXG4gICAgICAgICAgaDIsXHJcbiAgICAgICAgICBoMyxcclxuICAgICAgICAgIGg0LFxyXG4gICAgICAgICAgYSxcclxuICAgICAgICAgIHRkLFxyXG4gICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMWY2MThkOyAgICAgICAgICBcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuYnV0dG9uLXN0eWxlIHtcclxuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIyOGIyMjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQXJpYWxcIjtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAudGV4dC1zdHlsZSB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byBhdXRvO1xyXG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIkFyaWFsXCI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogXCIxMHB4XCI7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRhYmxlIHsgIFxyXG4gICAgICAgICAgICBjb2xvcjogIzMzMzsgLyogTGlnaHRlbiB1cCBmb250IGNvbG9yICovXHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmOyAvKiBOaWNlciBmb250ICovXHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlOyBcclxuICAgICAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBcclxuICAgICAgICAgICAgY29sbGFwc2U7IFxyXG4gICAgICAgICAgICBib3JkZXItc3BhY2luZzogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgIHRkLCB0aCB7IGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7IGhlaWdodDogMzBweDsgfSAvKiBNYWtlIGNlbGxzIGEgYml0IHRhbGxlciAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgdGggeyAgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGM0YzRjM7IC8qIExpZ2h0IGdyZXkgYmFja2dyb3VuZCAqL1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDsgLyogTWFrZSBzdXJlIHRoZXkncmUgYm9sZCAqL1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgdGQgeyAgXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGQUZBRkE7IC8qIExpZ2h0ZXIgZ3JleSBiYWNrZ3JvdW5kICovXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgLyogQ2VudGVyIG91ciB0ZXh0ICovXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9