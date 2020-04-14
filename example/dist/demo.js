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

/***/ "./dist/jsx.esm.js":
/*!*************************!*\
  !*** ./dist/jsx.esm.js ***!
  \*************************/
/*! ModuleConcatenation bailout: Module exports are unknown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*!
 * JSX.js v1.0.0
 * (c) 2020-2020 Yoriiis
 * Released under the MIT License.
 */
// RegExp to detect attribute type
const EXPRESSION = {
	condition: '^if$',
	event: '^(on)([A-Z]{1}[a-z]+)+$',
	domAttribute: '^(?!(on|if$))([a-z]+|[a-z]+([A-Z]{1}[a-z]+)+|data(-[a-z]+)+|aria-[a-z]+)$'
};

/**
 * Get attributes filtered by type
 * Type depends on expression type
 *
 * @param {Strign} type Attribute type
 * @param {Object} attributes Attributes list
 *
 * @returns {Array} Filtered attributes list by type
 */
function getAttributesByType (type, attributes) {
	if (hasOwn(EXPRESSION, type)) {
		const expression = EXPRESSION[type];
		return Object.keys(attributes)
			.filter(attribute => new RegExp(expression).test(attribute))
			.map(attribute => ({
				name: attribute.toLowerCase(),
				value: attributes[attribute]
			}))
	} else {
		return []
	}
}

/**
 * Check whether an object has the property
 *
 * @param {Object} obj Object reference
 * @param {String} key Object property key inside the object
 *
 * @returns {Boolean} Object has the property key
 */
function hasOwn (obj, key) {
	return Object.prototype.hasOwnProperty.call(obj, key)
}

/**
 * Set HTML attribute
 *
 * @param {HTMLElement} element Element to add the attribute
 * @param {Object} attribute Object contains name and value of the attribute
 */
function setAttribute (element, attribute) {
	element.setAttribute(attribute.name, attribute.value);
}

/**
 * Add event listener to a element
 *
 * @param {HTMLElement} element Element to add the event listener
 * @param {Object} attribute Object contains name and value of the event
 */
function addEventListener (element, attribute) {
	element.addEventListener(attribute.name, attribute.value, false);
}

/**
 * Dispatch custom event listener
 *
 * @param {String} event Custom event name
 * @param {HTMLElement} element Element to add the custom event listener
 */
function dispatchEvent (event, element) {
	element.dispatchEvent(new window.CustomEvent(event));
}

/**
 * Remove empty element in Array
 * Array contains HTMLCollection childs with null properties
 *
 * @param {Array} children Childrens list
 * @param {null} emptyValue Value of the empty children
 *
 * @returns {Array} Array clean without empty childrens
 */
function removeEmptyChildren (children, emptyValue) {
	return children.filter(child => child !== emptyValue)
}

/**
 * Render HTMLElements into container
 *
 * @param {HTMLCollection} element HTMLCollection from JSX
 * @param {HTMLElement} container Container to append content
 */
function render (element, container) {
	container.appendChild(element);
}

/**
 * Check if element contains "if" attribute
 * Attributes come from JSX attributes of the element
 *
 * @param {Object}
 * @param {Object} attributes Object contains name and value of JSX attributes
 */
function checkCondition ({ attributes }) {
	const validAttribute = getAttributesByType('condition', attributes);

	// Return the attribute value if exist (true|false)
	// Else undefined is returns
	if (validAttribute.length) {
		return validAttribute[0].value
	}
}

/**
 * Create events listener on element
 * Attributes come from JSX attributes of the element
 *
 * @param {Object}
 * @param {HTMLElement} element Element to add events listener
 * @param {Object} attributes Object contains name and value of JSX attributes
 */
function createEvents ({ element, attributes }) {
	getAttributesByType('event', attributes)
		.map(({ name, ...fields }) => ({
			name: name.substr(2),
			...fields
		}))
		.map(attribute => addEventListener(element, attribute));
}

/**
 * Create HTML attributes on element
 * Attributes come from JSX attributes of the element
 *
 * @param {Object}
 * @param {HTMLElement} element Element to add attributes
 * @param {Object} attributes Object contains name and value of JSX attributes
 */
function createAttributes ({ element, attributes }) {
	const attrs = getAttributesByType('domAttribute', attributes);
	attrs
		.map(({ name, value }) => ({
			name: name === 'classname' ? 'class' : name,
			value
		}))
		.map(({ name, value }) => {
			if (name === 'style' && value instanceof Object) {
				// Style properties as object
				// Add all style properties on node property
				Object.keys(value).map(property => (element.style[property] = value[property]));
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
				setAttribute(element, { name, value });
			}
		});
}

const EMPTY_NODE_VALUE = null;

/**
 * Function called by Babel plugin "@babel/plugin-transform-react-jsx"
 * Function name is used with "pragma: 'jsx.createElement'" options
 * Each JSX elements (function, fragment, tag) call this function
 *
 * @param {String} tagName Name of the tag (h1, p, span, div, etc.)
 * @param {Object} attributes Object contains name and value of JSX element's attributes
 * @param {Array} children Childrens list of the element
 *
 * @returns {HTMLElement} Element transform from JSX to HTMLElement valid
 * Element contains attributes and events listener
 */
function createElement (tagName, attributes = {}, ...children) {
	// Check if element need to be passed
	if (attributes !== null && checkCondition({ attributes }) === false) {
		return EMPTY_NODE_VALUE
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

		// Build element attributes and events listeners
		if (attributes !== null) {
			createAttributes({ element, attributes });
			createEvents({ element, attributes });
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
	return element
}

const jsx = {
	render,
	createElement,
	dispatchEvent
};

/* harmony default export */ __webpack_exports__["default"] = (jsx);


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
/* harmony import */ var _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../dist/jsx.esm.js */ "./dist/jsx.esm.js");
/* harmony import */ var _demo_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./demo.css */ "./example/src/demo.css");
/* harmony import */ var _demo_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_demo_css__WEBPACK_IMPORTED_MODULE_1__);



function handleEvent(e) {
  console.log('event', e.type, this);
}

function triggerCustomEvent(e) {
  console.log('triggerCustomEvent', e.type, this);
  _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].dispatchEvent('hello', document.querySelector('#section-custom-event'));
}

function onCustomEventReceived(e) {
  this.setAttribute('style', 'background-color: #272b30; color: #fff;');
}

const InputComponent = props => _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("input", {
  type: "text",
  "data-name": props.name,
  value: props.name,
  onKeyup: handleEvent
});

const persons = ['John Doe', 'Mickael Emphys', 'Henry pleyd'];
const elements = _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement('fragment', null, _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", null, _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
  className: "sectionTitle"
}, "Conditional"), _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
  if: persons.length
}, "I'm visible"), _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
  if: persons.length === 0
}, "I'm invisible")), _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", {
  style: {
    backgroundColor: '#272b30',
    color: '#fff'
  }
}, _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
  className: "sectionTitle"
}, "HTML attributes"), _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("p", {
  style: "color: #ffe300;",
  class: "text",
  id: "text-1",
  "data-type": "content",
  "aria-label": "Text"
}, "I've multiple `data-attribute`")), _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", null, _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
  className: "sectionTitle"
}, "Function component with props and events keyup"), _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(InputComponent, {
  name: persons[1]
})), _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", null, _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
  className: "sectionTitle"
}, "Loop"), _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("ul", null, persons.map((name, index) => _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("li", null, _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("label", null, _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("span", null, "Name ", _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("em", {
  if: index === 0
}, "I'm visible")), _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement(InputComponent, {
  if: index > 0,
  name: name
})))))), _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", null, _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
  className: "sectionTitle"
}, "Test events click"), _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
  class: "btn",
  onClick: handleEvent
}, "Submit")), _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("section", {
  id: "section-custom-event",
  onHello: onCustomEventReceived
}, _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("h3", {
  className: "sectionTitle"
}, "Test custom event"), _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].createElement("button", {
  class: "btn",
  onClick: triggerCustomEvent
}, "Submit")));
_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"].render(elements, document.getElementById('app'));

/***/ })

/******/ });
//# sourceMappingURL=demo.js.map