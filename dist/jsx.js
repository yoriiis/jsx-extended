(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["jsx"] = factory();
	else
		root["jsx"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/create-element.js":
/*!*******************************!*\
  !*** ./src/create-element.js ***!
  \*******************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _managers_condition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./managers/condition */ "./src/managers/condition.js");
/* harmony import */ var _managers_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./managers/events */ "./src/managers/events.js");
/* harmony import */ var _managers_dom_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./managers/dom-attributes */ "./src/managers/dom-attributes.js");




const managerCondition = new _managers_condition__WEBPACK_IMPORTED_MODULE_1__["default"]();
const managerEvents = new _managers_events__WEBPACK_IMPORTED_MODULE_2__["default"]();
const managerDOMAttributes = new _managers_dom_attributes__WEBPACK_IMPORTED_MODULE_3__["default"]();
const EMPTY_NODE_VALUE = null;
function createElement(tagName, attributes = {}, ...children) {
  // Check if element need to be passed
  if (attributes !== null && managerCondition.check({
    attributes
  }) === false) {
    return EMPTY_NODE_VALUE;
  }

  let element;

  if (tagName instanceof Function) {
    // Function component
    element = tagName(attributes || {});
  } else if (tagName === 'fragment') {
    // Fragment component
    element = document.createDocumentFragment();
  } else {
    // HTML tags
    element = document.createElement(tagName); // Build element attributes and events listeners

    if (attributes !== null) {
      managerDOMAttributes.create({
        element,
        attributes
      });
      managerEvents.create({
        element,
        attributes
      });
    }
  }

  const cleanChildren = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["removeEmptyChildren"])(children, EMPTY_NODE_VALUE);

  for (const child of cleanChildren) {
    // Check if direct child is not EMPTY_NODE_VALUE
    if (child !== EMPTY_NODE_VALUE) {
      if (Array.isArray(child)) {
        // Check if sub child is not EMPTY_NODE_VALUE
        const cleanSubChildren = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["removeEmptyChildren"])(child, EMPTY_NODE_VALUE);
        element.append(...cleanSubChildren);
      } else element.append(child);
    }
  }

  return element;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatchEvent", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["dispatchEvent"]; });

/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _render__WEBPACK_IMPORTED_MODULE_1__["render"]; });

/* harmony import */ var _create_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-element */ "./src/create-element.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return _create_element__WEBPACK_IMPORTED_MODULE_2__["createElement"]; });







/* harmony default export */ __webpack_exports__["default"] = ({
  render: _render__WEBPACK_IMPORTED_MODULE_1__["render"],
  createElement: _create_element__WEBPACK_IMPORTED_MODULE_2__["createElement"],
  dispatchEvent: _utils__WEBPACK_IMPORTED_MODULE_0__["dispatchEvent"]
});

/***/ }),

/***/ "./src/managers/condition.js":
/*!***********************************!*\
  !*** ./src/managers/condition.js ***!
  \***********************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ManagerCondition; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");

class ManagerCondition {
  check({
    attributes
  }) {
    const validAttribute = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getAttributesByType"])('condition', attributes);

    if (validAttribute.length) {
      return validAttribute[0].value;
    }
  }

}

/***/ }),

/***/ "./src/managers/dom-attributes.js":
/*!****************************************!*\
  !*** ./src/managers/dom-attributes.js ***!
  \****************************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ManagerDOMAttributes; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");

class ManagerDOMAttributes {
  create({
    element,
    attributes
  }) {
    const attrs = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getAttributesByType"])('domAttribute', attributes);
    attrs.map(({
      name,
      value
    }) => ({
      name: name === 'classname' ? 'class' : name,
      value
    })).map(({
      name,
      value
    }) => {
      if (name === 'style' && value instanceof Object) {
        // Style properties as object
        // Add all style properties on node property
        Object.keys(value).map(property => element.style[property] = value[property]);
      } else if (name === 'dataset') {
        if (value instanceof Object && !Array.isArray(value)) {
          // Dataset properties as object
          // Add all key as dataset property
          Object.keys(value).map(key => {
            element.dataset[key] = value[key];
          });
        }
      } else {
        // Basic HTML attribute
        Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(element, {
          name,
          value
        });
      }
    });
  }

}

/***/ }),

/***/ "./src/managers/events.js":
/*!********************************!*\
  !*** ./src/managers/events.js ***!
  \********************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ManagerEvents; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");

class ManagerEvents {
  create({
    element,
    attributes
  }) {
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getAttributesByType"])('event', attributes).map(({
      name,
      ...fields
    }) => ({
      name: name.substr(2),
      ...fields
    })).map(attribute => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["addEventListener"])(element, attribute));
  }

}

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
function render(element, container) {
  container.appendChild(element);
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPRESSION", function() { return EXPRESSION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttributesByType", function() { return getAttributesByType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return hasOwn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAttribute", function() { return setAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return addEventListener; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchEvent", function() { return dispatchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEmptyChildren", function() { return removeEmptyChildren; });
const EXPRESSION = {
  condition: '^if$',
  event: '^(on)([A-Z]{1}[a-z]+)+$',
  domAttribute: '^(?!(on|if$))([a-z]+|[a-z]+([A-Z]{1}[a-z]+)+|data(-[a-z]+)+|aria-[a-z]+)$'
};
function getAttributesByType(type, attributes) {
  if (hasOwn(EXPRESSION, type)) {
    const expression = EXPRESSION[type];
    return Object.keys(attributes).filter(attribute => new RegExp(expression).test(attribute)).map(attribute => ({
      name: attribute.toLowerCase(),
      value: attributes[attribute]
    }));
  } else {
    return [];
  }
}
/**
 * Check whether an object has the property.
 */

const hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}
function setAttribute(element, attribute) {
  element.setAttribute(attribute.name, attribute.value);
}
function addEventListener(element, attribute) {
  element.addEventListener(attribute.name, attribute.value, false);
}
function dispatchEvent(event, element) {
  element.dispatchEvent(new window.CustomEvent(event));
}
function removeEmptyChildren(children, emptyValue) {
  return children.filter(child => child !== emptyValue);
}

/***/ })

/******/ });
});
//# sourceMappingURL=jsx.js.map