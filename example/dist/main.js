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

(function (global, factory) {
   true ? module.exports = factory() : undefined;
})(this, function () {
  'use strict';

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

  function render(element, container) {
    container.appendChild(element);
  }

  class ManagerCondition {
    check({
      attributes
    }) {
      const validAttribute = getAttributesByType('condition', attributes);

      if (validAttribute.length) {
        return validAttribute[0].value;
      }
    }

  }

  class ManagerEvents {
    create({
      element,
      attributes
    }) {
      getAttributesByType('event', attributes).map(({
        name,
        ...fields
      }) => ({
        name: name.substr(2),
        ...fields
      })).map(attribute => addEventListener(element, attribute));
    }

  }

  class ManagerDOMAttributes {
    create({
      element,
      attributes
    }) {
      const attrs = getAttributesByType('domAttribute', attributes);
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
          setAttribute(element, {
            name,
            value
          });
        }
      });
    }

  }

  const managerCondition = new ManagerCondition();
  const managerEvents = new ManagerEvents();
  const managerDOMAttributes = new ManagerDOMAttributes();
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

    const cleanChildren = removeEmptyChildren(children, EMPTY_NODE_VALUE);

    for (const child of cleanChildren) {
      // Check if direct child is not EMPTY_NODE_VALUE
      if (child !== EMPTY_NODE_VALUE) {
        if (Array.isArray(child)) {
          // Check if sub child is not EMPTY_NODE_VALUE
          const cleanSubChildren = removeEmptyChildren(child, EMPTY_NODE_VALUE);
          element.append(...cleanSubChildren);
        } else element.append(child);
      }
    }

    return element;
  }

  var index = {
    render,
    createElement,
    dispatchEvent
  };
  return index;
});

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



function handleEvent(e) {
  console.log('event', e.type, this);
}

function triggerCustomEvent(e) {
  console.log('triggerCustomEvent', e.type, this);
  Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["dispatchEvent"])('hello', document.querySelector('#section-custom-event'));
}

function onCustomEventReceived(e) {
  this.setAttribute('style', 'background-color: #272b30; color: #fff;');
}

const InputComponent = props => _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
  type: "text",
  "data-name": props.name,
  value: props.name,
  onKeyup: handleEvent
});

const persons = ['John Doe', 'Mickael Emphys', 'Henry pleyd'];
const elements = _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('fragment', null, _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  className: "sectionTitle"
}, "Conditional"), _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  if: persons.length
}, "I'm visible"), _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  if: persons.length === 0
}, "I'm invisible")), _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
  style: {
    backgroundColor: '#272b30',
    color: '#fff'
  }
}, _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  className: "sectionTitle"
}, "HTML attributes"), _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  style: "color: #ffe300;",
  class: "text",
  id: "text-1",
  "data-type": "content",
  "aria-label": "Text"
}, "I've multiple `data-attribute`")), _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  className: "sectionTitle"
}, "Function component with props and events keyup"), _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputComponent, {
  name: persons[1]
})), _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  className: "sectionTitle"
}, "Loop"), _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, persons.map((name, index) => _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Name ", _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
  if: index === 0
}, "I'm visible")), _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputComponent, {
  if: index > 0,
  name: name
})))))), _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", null, _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  className: "sectionTitle"
}, "Test events click"), _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  class: "btn",
  onClick: handleEvent
}, "Submit")), _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
  id: "section-custom-event",
  onHello: onCustomEventReceived
}, _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  className: "sectionTitle"
}, "Test custom event"), _dist_jsx__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  class: "btn",
  onClick: triggerCustomEvent
}, "Submit")));
Object(_dist_jsx__WEBPACK_IMPORTED_MODULE_0__["render"])(elements, document.getElementById('app'));

/***/ })

/******/ });
//# sourceMappingURL=main.js.map