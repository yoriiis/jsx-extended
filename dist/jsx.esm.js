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

export { createElement, dispatchEvent, render };
