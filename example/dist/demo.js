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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchEvent", function() { return dispatchEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/*!
 * jsxCreateElement.js v1.0.0
 * (c) 2020-2020 Yoriiis
 * Released under the MIT License.
 */
// RegExp to detect attribute type
const EXPRESSION = {
	condition: '^if$',
	event: '^(on)([A-Z]{1}[a-z]+)+$',
	domAttribute: '^(?!(on|if$))([a-z]+|[a-z]+([A-Z]{1}[a-z]+)+|data(-[a-z]+)+|aria-[a-z]+)$'
};

// List of SVG tags
const SVG_TAGS = {
	animate: 'animate',
	animateMotion: 'animateMotion',
	animateTransform: 'animateTransform',
	circle: 'circle',
	clipPath: 'clipPath',
	'color-profile': 'color-profile',
	defs: 'defs',
	desc: 'desc',
	discard: 'discard',
	ellipse: 'ellipse',
	feBlend: 'feBlend',
	feColorMatrix: 'feColorMatrix',
	feComponentTransfer: 'feComponentTransfer',
	feComposite: 'feComposite',
	feConvolveMatrix: 'feConvolveMatrix',
	feDiffuseLighting: 'feDiffuseLighting',
	feDisplacementMap: 'feDisplacementMap',
	feDistantLight: 'feDistantLight',
	feDropShadow: 'feDropShadow',
	feFlood: 'feFlood',
	feFuncA: 'feFuncA',
	feFuncB: 'feFuncB',
	feFuncG: 'feFuncG',
	feFuncR: 'feFuncR',
	feGaussianBlur: 'feGaussianBlur',
	feImage: 'feImage',
	feMerge: 'feMerge',
	feMergeNode: 'feMergeNode',
	feMorphology: 'feMorphology',
	feOffset: 'feOffset',
	fePointLight: 'fePointLight',
	feSpecularLighting: 'feSpecularLighting',
	feSpotLight: 'feSpotLight',
	feTile: 'feTile',
	feTurbulence: 'feTurbulence',
	filter: 'filter',
	foreignObject: 'foreignObject',
	g: 'g',
	hatch: 'hatch',
	hatchpath: 'hatchpath',
	image: 'image',
	line: 'line',
	linearGradient: 'linearGradient',
	marker: 'marker',
	mask: 'mask',
	mesh: 'mesh',
	meshgradient: 'meshgradient',
	meshpatch: 'meshpatch',
	meshrow: 'meshrow',
	metadata: 'metadata',
	mpath: 'mpath',
	path: 'path',
	pattern: 'pattern',
	polygon: 'polygon',
	polyline: 'polyline',
	radialGradient: 'radialGradient',
	rect: 'rect',
	script: 'script',
	set: 'set',
	solidcolor: 'solidcolor',
	stop: 'stop',
	style: 'style',
	svg: 'svg',
	switch: 'switch',
	symbol: 'symbol',
	text: 'text',
	textPath: 'textPath',
	title: 'title',
	tspan: 'tspan',
	unknown: 'unknown',
	use: 'use',
	view: 'view'
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
function getAttributesByType (type, attributes, isSvg = false) {
	if (hasOwn(EXPRESSION, type)) {
		const expression = EXPRESSION[type];
		return Object.keys(attributes)
			.filter(attribute => (isSvg ? attribute : new RegExp(expression).test(attribute)))
			.map(attribute => ({
				name: isSvg ? attribute : attribute.toLowerCase(),
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
function createAttributes ({ element, attributes, isSvg }) {
	const attrs = getAttributesByType('domAttribute', attributes, isSvg);

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
		const isSvg = hasOwn(SVG_TAGS, tagName);
		if (isSvg) {
			// SVG tags
			element = document.createElementNS('http://www.w3.org/2000/svg', tagName);
		} else {
			// HTML tags
			element = document.createElement(tagName);
		}

		// Build element attributes and events listeners
		if (attributes !== null) {
			createAttributes({ element, attributes, isSvg });
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


console.log(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"], _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["render"], _dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["dispatchEvent"]);

function handleEvent(e) {
  console.log('event', e.type, this);
}

function triggerCustomEvent(e) {
  console.log('triggerCustomEvent', e.type, this);
  Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["dispatchEvent"])('hello', document.querySelector('#section-custom-event'));
}

function onCustomEventReceived(e) {
  this.classList.toggle('colored');
}

const InputComponent = props => Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
  type: "text",
  "data-name": props.name,
  value: props.name,
  onKeyup: handleEvent
});

const persons = ['John Doe', 'Mickael Emphys', 'Henry pleyd'];
const elements = Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("fragment", null, Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", null, Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
  className: "sectionTitle"
}, "Conditional"), Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
  if: persons.length
}, "I'm visible"), Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
  if: persons.length === 0
}, "I'm invisible")), Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", null, Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
  className: "sectionTitle"
}, "SVG"), Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0",
  y: "0",
  viewBox: "0 0 48 48",
  width: "50px",
  height: "50px"
}, Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("g", null, Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  id: "Oval",
  class: "st0",
  cx: "24",
  cy: "24",
  r: "24",
  fill: "#fbd971"
}), Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  class: "st1",
  d: "M24 41.1c-7.6 0-13.7-6.2-13.7-13.7 0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1 0 6.3 5.1 11.4 11.4 11.4s11.4-5.1 11.4-11.4c0-.6.5-1.1 1.1-1.1.6 0 1.1.5 1.1 1.1.2 7.6-5.9 13.7-13.5 13.7z",
  fill: "#d8b11a"
}), Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "#e64c3c",
  d: "M14.3 12.2c.5-1.1 1.6-1.9 3-1.9 1.8 0 3.1 1.5 3.2 3.2 0 0 .1.4-.1 1.2-.3 1.1-.9 2-1.7 2.8l-4.4 3.8-4.3-3.8c-.8-.7-1.4-1.7-1.7-2.8-.2-.8-.1-1.2-.1-1.2.2-1.8 1.5-3.2 3.2-3.2 1.4 0 2.4.8 2.9 1.9z"
}), Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  fill: "#e64c3c",
  d: "M33.6 12.2c.5-1.1 1.6-1.9 3-1.9 1.8 0 3.1 1.5 3.2 3.2 0 0 .1.4-.1 1.2-.3 1.1-.9 2-1.7 2.8l-4.4 3.8-4.3-3.8c-.8-.7-1.4-1.7-1.7-2.8-.2-.8-.1-1.2-.1-1.2.2-1.8 1.5-3.2 3.2-3.2 1.3 0 2.4.8 2.9 1.9z"
})))), Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
  style: {
    backgroundColor: '#272b30',
    color: '#fff'
  }
}, Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
  className: "sectionTitle"
}, "HTML attributes"), Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
  style: "color: #ffe300;",
  class: "text",
  id: "text-1",
  "data-type": "content",
  "aria-label": "Text"
}, "I've multiple `data-attribute`")), Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", null, Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
  className: "sectionTitle"
}, "Function component with props and events keyup"), Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InputComponent, {
  name: persons[1]
})), Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", null, Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
  className: "sectionTitle"
}, "Loop"), Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", null, persons.map((name, index) => Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("label", null, Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", null, "Name ", Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("em", {
  if: index === 0
}, "I'm visible")), Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])(InputComponent, {
  if: index > 0,
  name: name
})))))), Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", null, Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
  className: "sectionTitle"
}, "Test events click"), Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
  class: "btn",
  onClick: handleEvent
}, "Submit")), Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("section", {
  id: "section-custom-event",
  onHello: onCustomEventReceived
}, Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
  className: "sectionTitle"
}, "Test custom event"), Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
  class: "btn",
  onClick: triggerCustomEvent
}, "Submit")));
Object(_dist_jsx_esm_js__WEBPACK_IMPORTED_MODULE_0__["render"])(elements, document.getElementById('app'));

/***/ })

/******/ });
//# sourceMappingURL=demo.js.map