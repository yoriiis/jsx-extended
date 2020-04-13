/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./example/src/demo.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/jsx.js":
/*!*********************!*\
  !*** ./dist/jsx.js ***!
  \*********************/
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony import */ var _managers_condition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./managers/condition */ "./src/managers/condition.js");
/* harmony import */ var _managers_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./managers/events */ "./src/managers/events.js");
/* harmony import */ var _managers_dom_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./managers/dom-attributes */ "./src/managers/dom-attributes.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispatchEvent", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["dispatchEvent"]; });





const managerCondition = new _managers_condition__WEBPACK_IMPORTED_MODULE_1__["default"]();
const managerEvents = new _managers_events__WEBPACK_IMPORTED_MODULE_2__["default"]();
const managerDOMAttributes = new _managers_dom_attributes__WEBPACK_IMPORTED_MODULE_3__["default"]();
const EMPTY_NODE_VALUE = null;

function createElement(tagName, attributes = {}, ...children) {
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
    element = document.createElement(tagName);

    if (attributes !== null) {
      managerDOMAttributes.create({
        element,
        attributes,
        ignore: [managerEvents.expression]
      });
    }
  }

  if (attributes !== null) {
    managerEvents.create({
      element,
      attributes
    });
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

function render(element, component) {
  element.appendChild(component);
}




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
    Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getAttributesByType"])('domAttribute', attributes).map(({
      name,
      ...fields
    }) => ({
      name: name === 'classname' ? 'class' : name,
      ...fields
    })).map(attribute => Object(_utils__WEBPACK_IMPORTED_MODULE_0__["setAttribute"])(element, attribute));
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
  domAttribute: '^(?!(on|class$|if$))([a-z]+|[a-z]+([A-Z]{1}[a-z]+)+|data(-[a-z]+)+|aria-[a-z]+)$'
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
function dispatchEvent(element, event) {
  element.dispatchEvent(new window.CustomEvent(event));
}
function removeEmptyChildren(children, emptyValue) {
  return children.filter(child => child !== emptyValue);
}

/***/ })

/******/ });
});
//# sourceMappingURL=jsx.js.map

/***/ }),

/***/ "./example/src/demo.css":
/*!******************************!*\
  !*** ./example/src/demo.css ***!
  \******************************/
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./example/src/demo.jsx":
/*!******************************!*\
  !*** ./example/src/demo.jsx ***!
  \******************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/jsx */ "./dist/jsx.js");
/* harmony import */ var _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _demo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo.css */ "./example/src/demo.css");
/* harmony import */ var _demo_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_demo_css__WEBPACK_IMPORTED_MODULE_1__);



const InputComponent = props => Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
  type: "text",
  "data-name": props.name,
  value: props.name,
  "e:keyup": handleEvent
});

function handleEvent(e) {
  console.log('event', e.type, this);
  Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["dispatchEvent"])(this, 'helloguy');
}

function handleCustomEvent(e) {
  console.log('customEvent', e.type, this);
}

const persons = ['John Doe', 'Mickael Emphys', 'Henry pleyd'];
const elements = Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])('fragment', null, Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", null, Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Test conditional"), Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", {
  class: "title",
  if: persons.length
}, "Hello", Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
  class: "label"
}, " world"))), Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", null, Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Test DOM attributes"), Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
  style: "color: red;",
  class: "title",
  id: "main-title",
  "data-title": "true",
  "aria-label": "Text"
}, "Hello ", Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "World"))), Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", null, Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Test function component"), Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InputComponent, {
  name: persons[1]
})), Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", null, Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Test loop"), Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null, persons.map((name, index) => Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Name "), Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InputComponent, {
  name: name
})))))), Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", null, Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Test events"), Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
  id: "main-btn",
  class: "btn",
  "aria-label": "Submit",
  "data-text": "Submit",
  tabIndex: "1",
  className: "btn2",
  onClick: handleEvent,
  onHelloGuy: handleCustomEvent
}, "Submit")));
const App = document.querySelector('#main');
Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["render"])(App, elements);

/***/ })

/******/ });
//# sourceMappingURL=demo.js.map