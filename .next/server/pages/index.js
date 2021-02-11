module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ResourceList.js":
/*!************************************!*\
  !*** ./components/ResourceList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "E:\\Danial\\app\\components\\ResourceList.js";






const GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default.a`
  query getProducts($ids: [ID!]!) {
    nodes(ids: $ids) {
      ... on Product {
        title
        handle
        descriptionHtml
        id
        images(first: 1) {
          edges {
            node {
              originalSrc
              altText
            }
          }
        }
        variants(first: 1) {
          edges {
            node {
              price
              id
            }
          }
        }
      }
    }
  }
`;

class ResourceListWithProducts extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  render() {
    const twoWeeksFromNow = new Date(Date.now() + 12096e5).toDateString();
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_apollo__WEBPACK_IMPORTED_MODULE_4__["Query"], {
      query: GET_PRODUCTS_BY_ID,
      variables: {
        ids: store_js__WEBPACK_IMPORTED_MODULE_6___default.a.get('ids')
      },
      children: ({
        data,
        loading,
        error
      }) => {
        if (loading) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: "Loading\u2026"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 33
        }, this);
        if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: error.message
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 31
        }, this);
        console.log(data);
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Card"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["ResourceList"], {
            showHeader: true,
            resourceName: {
              singular: 'Product',
              plural: 'Products'
            },
            items: data.nodes,
            renderItem: item => {
              const media = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Thumbnail"], {
                source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : '',
                alt: item.images.edges[0] ? item.images.edges[0].node.altText : ''
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 21
              }, this);

              const price = item.variants.edges[0].node.price;
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["ResourceList"].Item, {
                id: item.id,
                media: media,
                accessibilityLabel: `View details for ${item.title}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Stack"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Stack"].Item, {
                    fill: true,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h3", {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["TextStyle"], {
                        variation: "strong",
                        children: item.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 84,
                        columnNumber: 29
                      }, this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 83,
                      columnNumber: 27
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 82,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Stack"].Item, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: ["$", price]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 90,
                      columnNumber: 27
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 89,
                    columnNumber: 25
                  }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_5__["Stack"].Item, {
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                      children: ["Expires on ", twoWeeksFromNow, " "]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 93,
                      columnNumber: 27
                    }, this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 25
                  }, this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 23
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 21
              }, this);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 17
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 15
        }, this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (ResourceListWithProducts);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_ResourceList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ResourceList */ "./components/ResourceList.js");

var _jsxFileName = "E:\\Danial\\app\\pages\\index.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const img = 'https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg';
class Index extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      open: false
    });

    _defineProperty(this, "handleSelection", resources => {
      const idsFromResources = resources.selection.map(product => product.id);
      this.setState({
        open: false
      });
      store_js__WEBPACK_IMPORTED_MODULE_5___default.a.set('ids', idsFromResources);
    });
  }

  render() {
    const emptyState = !store_js__WEBPACK_IMPORTED_MODULE_5___default.a.get('ids');
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Page"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__["TitleBar"], {
        title: "Sample App",
        primaryAction: {
          content: 'Select products',
          onAction: () => this.setState({
            open: true
          })
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 10
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__["ResourcePicker"], {
        resourceType: "Product",
        showVariants: false,
        open: this.state.open,
        onSelection: resources => this.handleSelection(resources),
        onCancel: () => this.setState({
          open: false
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5
      }, this), emptyState ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["Layout"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["EmptyState"], {
          heading: "Discount your products temporarily",
          action: {
            content: 'Select products',
            onAction: () => this.setState({
              open: true
            })
          },
          image: img,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Select products to change their price temporarily."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 9
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ResourceList__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }, this);
  }

}

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge-react");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("store-js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXNvdXJjZUxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXRhZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYXBvbGxvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RvcmUtanNcIiJdLCJuYW1lcyI6WyJHRVRfUFJPRFVDVFNfQllfSUQiLCJncWwiLCJSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMiLCJSZWFjdCIsIkNvbXBvbmVudCIsInJlbmRlciIsInR3b1dlZWtzRnJvbU5vdyIsIkRhdGUiLCJub3ciLCJ0b0RhdGVTdHJpbmciLCJpZHMiLCJzdG9yZSIsImdldCIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInNpbmd1bGFyIiwicGx1cmFsIiwibm9kZXMiLCJpdGVtIiwibWVkaWEiLCJpbWFnZXMiLCJlZGdlcyIsIm5vZGUiLCJvcmlnaW5hbFNyYyIsImFsdFRleHQiLCJwcmljZSIsInZhcmlhbnRzIiwiaWQiLCJ0aXRsZSIsImltZyIsIkluZGV4Iiwib3BlbiIsInJlc291cmNlcyIsImlkc0Zyb21SZXNvdXJjZXMiLCJzZWxlY3Rpb24iLCJtYXAiLCJwcm9kdWN0Iiwic2V0U3RhdGUiLCJzZXQiLCJlbXB0eVN0YXRlIiwiY29udGVudCIsIm9uQWN0aW9uIiwic3RhdGUiLCJoYW5kbGVTZWxlY3Rpb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFHQSxNQUFNQSxrQkFBa0IsR0FBR0Msa0RBQUk7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBM0JBOztBQTZCQSxNQUFNQyx3QkFBTixTQUF1Q0MsNENBQUssQ0FBQ0MsU0FBN0MsQ0FBdUQ7QUFDbkRDLFFBQU0sR0FBRztBQUNQLFVBQU1DLGVBQWUsR0FBRyxJQUFJQyxJQUFKLENBQVNBLElBQUksQ0FBQ0MsR0FBTCxLQUFhLE9BQXRCLEVBQStCQyxZQUEvQixFQUF4QjtBQUNBLHdCQUNFLHFFQUFDLGtEQUFEO0FBQU8sV0FBSyxFQUFFVCxrQkFBZDtBQUFrQyxlQUFTLEVBQUU7QUFBRVUsV0FBRyxFQUFFQywrQ0FBSyxDQUFDQyxHQUFOLENBQVUsS0FBVjtBQUFQLE9BQTdDO0FBQUEsZ0JBQ0csQ0FBQztBQUFFQyxZQUFGO0FBQVFDLGVBQVI7QUFBaUJDO0FBQWpCLE9BQUQsS0FBOEI7QUFDN0IsWUFBSUQsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQO0FBQ2IsWUFBSUMsS0FBSixFQUFXLG9CQUFPO0FBQUEsb0JBQU1BLEtBQUssQ0FBQ0M7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUFQO0FBQ1hDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFaO0FBQ0EsNEJBQ0UscUVBQUMscURBQUQ7QUFBQSxpQ0FDRSxxRUFBQyw2REFBRDtBQUNBLHNCQUFVLE1BRFY7QUFFQSx3QkFBWSxFQUFFO0FBQUVNLHNCQUFRLEVBQUUsU0FBWjtBQUF1QkMsb0JBQU0sRUFBRTtBQUEvQixhQUZkO0FBR0EsaUJBQUssRUFBRVAsSUFBSSxDQUFDUSxLQUhaO0FBSUEsc0JBQVUsRUFBRUMsSUFBSSxJQUFJO0FBQ2xCLG9CQUFNQyxLQUFLLGdCQUNULHFFQUFDLDBEQUFEO0FBQ0Usc0JBQU0sRUFDSkQsSUFBSSxDQUFDRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsSUFDSUgsSUFBSSxDQUFDRSxNQUFMLENBQVlDLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUJDLElBQXJCLENBQTBCQyxXQUQ5QixHQUVJLEVBSlI7QUFNRSxtQkFBRyxFQUNETCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixJQUNJSCxJQUFJLENBQUNFLE1BQUwsQ0FBWUMsS0FBWixDQUFrQixDQUFsQixFQUFxQkMsSUFBckIsQ0FBMEJFLE9BRDlCLEdBRUk7QUFUUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGOztBQWNBLG9CQUFNQyxLQUFLLEdBQUdQLElBQUksQ0FBQ1EsUUFBTCxDQUFjTCxLQUFkLENBQW9CLENBQXBCLEVBQXVCQyxJQUF2QixDQUE0QkcsS0FBMUM7QUFDQSxrQ0FDRSxxRUFBQyw2REFBRCxDQUFjLElBQWQ7QUFDRSxrQkFBRSxFQUFFUCxJQUFJLENBQUNTLEVBRFg7QUFFRSxxQkFBSyxFQUFFUixLQUZUO0FBR0Usa0NBQWtCLEVBQUcsb0JBQW1CRCxJQUFJLENBQUNVLEtBQU0sRUFIckQ7QUFBQSx1Q0FLRSxxRUFBQyxzREFBRDtBQUFBLDBDQUNFLHFFQUFDLHNEQUFELENBQU8sSUFBUDtBQUFZLHdCQUFJLE1BQWhCO0FBQUEsMkNBQ0U7QUFBQSw2Q0FDRSxxRUFBQywwREFBRDtBQUFXLGlDQUFTLEVBQUMsUUFBckI7QUFBQSxrQ0FDR1YsSUFBSSxDQUFDVTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixlQVFFLHFFQUFDLHNEQUFELENBQU8sSUFBUDtBQUFBLDJDQUNFO0FBQUEsc0NBQUtILEtBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFSRixlQVdFLHFFQUFDLHNEQUFELENBQU8sSUFBUDtBQUFBLDJDQUNFO0FBQUEsZ0RBQWV2QixlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBWEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFERjtBQXVCRDtBQTNDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERjtBQWlERDtBQXRESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUEwREQ7O0FBN0RrRDs7QUFnRXJDSix1RkFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNHSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNK0IsR0FBRyxHQUFHLG1FQUFaO0FBR2UsTUFBTUMsS0FBTixTQUFvQi9CLDRDQUFLLENBQUNDLFNBQTFCLENBQW9DO0FBQUE7QUFBQTs7QUFBQSxtQ0FDdkM7QUFBRStCLFVBQUksRUFBRTtBQUFSLEtBRHVDOztBQUFBLDZDQXVDaENDLFNBQUQsSUFBZTtBQUM3QixZQUFNQyxnQkFBZ0IsR0FBR0QsU0FBUyxDQUFDRSxTQUFWLENBQW9CQyxHQUFwQixDQUF5QkMsT0FBRCxJQUFhQSxPQUFPLENBQUNULEVBQTdDLENBQXpCO0FBQ0EsV0FBS1UsUUFBTCxDQUFjO0FBQUVOLFlBQUksRUFBRTtBQUFSLE9BQWQ7QUFDQXhCLHFEQUFLLENBQUMrQixHQUFOLENBQVUsS0FBVixFQUFpQkwsZ0JBQWpCO0FBQ0QsS0EzQ2dEO0FBQUE7O0FBRS9DaEMsUUFBTSxHQUFHO0FBQ0wsVUFBTXNDLFVBQVUsR0FBRyxDQUFDaEMsK0NBQUssQ0FBQ0MsR0FBTixDQUFVLEtBQVYsQ0FBcEI7QUFDRix3QkFDRixxRUFBQyxxREFBRDtBQUFBLDhCQUNLLHFFQUFDLGtFQUFEO0FBQ0gsYUFBSyxFQUFDLFlBREg7QUFFSCxxQkFBYSxFQUFFO0FBQ2JnQyxpQkFBTyxFQUFFLGlCQURJO0FBRWJDLGtCQUFRLEVBQUUsTUFBTSxLQUFLSixRQUFMLENBQWM7QUFBRU4sZ0JBQUksRUFBRTtBQUFSLFdBQWQ7QUFGSDtBQUZaO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FETCxlQVFBLHFFQUFDLHdFQUFEO0FBQ00sb0JBQVksRUFBQyxTQURuQjtBQUVNLG9CQUFZLEVBQUUsS0FGcEI7QUFHTSxZQUFJLEVBQUUsS0FBS1csS0FBTCxDQUFXWCxJQUh2QjtBQUlNLG1CQUFXLEVBQUdDLFNBQUQsSUFBZSxLQUFLVyxlQUFMLENBQXFCWCxTQUFyQixDQUpsQztBQUtNLGdCQUFRLEVBQUUsTUFBTSxLQUFLSyxRQUFMLENBQWM7QUFBRU4sY0FBSSxFQUFFO0FBQVIsU0FBZDtBQUx0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUkEsRUFlS1EsVUFBVSxnQkFDWCxxRUFBQyx1REFBRDtBQUFBLCtCQUNBLHFFQUFDLDJEQUFEO0FBQ0EsaUJBQU8sRUFBQyxvQ0FEUjtBQUVBLGdCQUFNLEVBQUU7QUFDTkMsbUJBQU8sRUFBRSxpQkFESDtBQUVOQyxvQkFBUSxFQUFFLE1BQU0sS0FBS0osUUFBTCxDQUFjO0FBQUVOLGtCQUFJLEVBQUU7QUFBUixhQUFkO0FBRlYsV0FGUjtBQU1BLGVBQUssRUFBRUYsR0FOUDtBQUFBLGlDQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEVyxnQkFjWCxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBN0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURFO0FBa0NMOztBQXRDa0QsQzs7Ozs7Ozs7Ozs7QUNWbkQsc0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnO1xyXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbyc7XHJcbmltcG9ydCB7IFxyXG4gIENhcmQsXHJcbiAgUmVzb3VyY2VMaXN0LFxyXG4gIFN0YWNrLFxyXG4gIFRleHRTdHlsZSxcclxuICBUaHVtYm5haWwsXHJcbiB9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xyXG5cclxuXHJcbmNvbnN0IEdFVF9QUk9EVUNUU19CWV9JRCA9IGdxbGBcclxuICBxdWVyeSBnZXRQcm9kdWN0cygkaWRzOiBbSUQhXSEpIHtcclxuICAgIG5vZGVzKGlkczogJGlkcykge1xyXG4gICAgICAuLi4gb24gUHJvZHVjdCB7XHJcbiAgICAgICAgdGl0bGVcclxuICAgICAgICBoYW5kbGVcclxuICAgICAgICBkZXNjcmlwdGlvbkh0bWxcclxuICAgICAgICBpZFxyXG4gICAgICAgIGltYWdlcyhmaXJzdDogMSkge1xyXG4gICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBvcmlnaW5hbFNyY1xyXG4gICAgICAgICAgICAgIGFsdFRleHRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXJpYW50cyhmaXJzdDogMSkge1xyXG4gICAgICAgICAgZWRnZXMge1xyXG4gICAgICAgICAgICBub2RlIHtcclxuICAgICAgICAgICAgICBwcmljZVxyXG4gICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7XHJcblxyXG5jbGFzcyBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCB0d29XZWVrc0Zyb21Ob3cgPSBuZXcgRGF0ZShEYXRlLm5vdygpICsgMTIwOTZlNSkudG9EYXRlU3RyaW5nKCk7XHJcbiAgICAgIHJldHVybiAoXHJcbiAgICAgICAgPFF1ZXJ5IHF1ZXJ5PXtHRVRfUFJPRFVDVFNfQllfSUR9IHZhcmlhYmxlcz17eyBpZHM6IHN0b3JlLmdldCgnaWRzJykgfX0+XHJcbiAgICAgICAgICB7KHsgZGF0YSwgbG9hZGluZywgZXJyb3IgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZ+KApjwvZGl2PjtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj57ZXJyb3IubWVzc2FnZX08L2Rpdj47XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgICAgPFJlc291cmNlTGlzdFxyXG4gICAgICAgICAgICAgICAgc2hvd0hlYWRlclxyXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VOYW1lPXt7IHNpbmd1bGFyOiAnUHJvZHVjdCcsIHBsdXJhbDogJ1Byb2R1Y3RzJyB9fVxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e2RhdGEubm9kZXN9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgbWVkaWEgPSAoXHJcbiAgICAgICAgICAgICAgICAgICAgPFRodW1ibmFpbFxyXG4gICAgICAgICAgICAgICAgICAgICAgc291cmNlPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5pbWFnZXMuZWRnZXNbMF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdLm5vZGUub3JpZ2luYWxTcmNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmltYWdlcy5lZGdlc1swXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5hbHRUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxSZXNvdXJjZUxpc3QuSXRlbVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICBtZWRpYT17bWVkaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9e2BWaWV3IGRldGFpbHMgZm9yICR7aXRlbS50aXRsZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxTdGFjaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dFN0eWxlIHZhcmlhdGlvbj1cInN0cm9uZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dFN0eWxlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+JHtwcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RXhwaXJlcyBvbiB7dHdvV2Vla3NGcm9tTm93fSA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2suSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9SZXNvdXJjZUxpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgIDwvUXVlcnk+XHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICBleHBvcnQgZGVmYXVsdCBSZXNvdXJjZUxpc3RXaXRoUHJvZHVjdHM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XHJcbmltcG9ydCB7IEVtcHR5U3RhdGUsIExheW91dCwgUGFnZSwgVGV4dFN0eWxlIH0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XHJcbmltcG9ydCB7IFJlc291cmNlUGlja2VyLCBUaXRsZUJhciB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnO1xyXG5pbXBvcnQgUmVzb3VyY2VMaXN0V2l0aFByb2R1Y3RzIGZyb20gJy4uL2NvbXBvbmVudHMvUmVzb3VyY2VMaXN0JztcclxuXHJcbmNvbnN0IGltZyA9ICdodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Ny85OTU1L2ZpbGVzL2VtcHR5LXN0YXRlLnN2Zyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgc3RhdGUgPSB7IG9wZW46IGZhbHNlIH07XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3QgZW1wdHlTdGF0ZSA9ICFzdG9yZS5nZXQoJ2lkcycpO1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgPFBhZ2U+XHJcbiAgICAgICAgIDxUaXRsZUJhclxyXG4gICAgICB0aXRsZT1cIlNhbXBsZSBBcHBcIlxyXG4gICAgICBwcmltYXJ5QWN0aW9uPXt7XHJcbiAgICAgICAgY29udGVudDogJ1NlbGVjdCBwcm9kdWN0cycsXHJcbiAgICAgICAgb25BY3Rpb246ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pLFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICAgIDxSZXNvdXJjZVBpY2tlclxyXG4gICAgICAgICAgcmVzb3VyY2VUeXBlPVwiUHJvZHVjdFwiXHJcbiAgICAgICAgICBzaG93VmFyaWFudHM9e2ZhbHNlfVxyXG4gICAgICAgICAgb3Blbj17dGhpcy5zdGF0ZS5vcGVufVxyXG4gICAgICAgICAgb25TZWxlY3Rpb249eyhyZXNvdXJjZXMpID0+IHRoaXMuaGFuZGxlU2VsZWN0aW9uKHJlc291cmNlcyl9XHJcbiAgICAgICAgICBvbkNhbmNlbD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAge2VtcHR5U3RhdGUgPyAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICA8RW1wdHlTdGF0ZVxyXG4gICAgICAgIGhlYWRpbmc9XCJEaXNjb3VudCB5b3VyIHByb2R1Y3RzIHRlbXBvcmFyaWx5XCJcclxuICAgICAgICBhY3Rpb249e3tcclxuICAgICAgICAgIGNvbnRlbnQ6ICdTZWxlY3QgcHJvZHVjdHMnLFxyXG4gICAgICAgICAgb25BY3Rpb246ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBvcGVuOiB0cnVlIH0pLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgaW1hZ2U9e2ltZ31cclxuICAgICAgPlxyXG4gICAgICAgIDxwPlNlbGVjdCBwcm9kdWN0cyB0byBjaGFuZ2UgdGhlaXIgcHJpY2UgdGVtcG9yYXJpbHkuPC9wPlxyXG4gICAgICA8L0VtcHR5U3RhdGU+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICkgOiAoXHJcbiAgICAgICAgPFJlc291cmNlTGlzdFdpdGhQcm9kdWN0cyAvPlxyXG4gICAgICAgICl9XHJcbiAgICA8L1BhZ2U+XHJcbilcclxufVxyXG5oYW5kbGVTZWxlY3Rpb24gPSAocmVzb3VyY2VzKSA9PiB7XHJcbiAgICBjb25zdCBpZHNGcm9tUmVzb3VyY2VzID0gcmVzb3VyY2VzLnNlbGVjdGlvbi5tYXAoKHByb2R1Y3QpID0+IHByb2R1Y3QuaWQpO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW46IGZhbHNlIH0pXHJcbiAgICBzdG9yZS5zZXQoJ2lkcycsIGlkc0Zyb21SZXNvdXJjZXMpO1xyXG4gIH07XHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXBvbGxvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RvcmUtanNcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==