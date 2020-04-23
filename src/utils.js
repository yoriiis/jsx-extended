// RegExp to detect attribute type
export const EXPRESSION = {
	condition: '^if$',
	event: '^(on)([A-Z]{1}[a-z]+)+$',
	domAttribute: '^(?!(on|if$))([a-z]+|[a-z]+([A-Z]{1}[a-z]+)+|data(-[a-z]+)+|aria-[a-z]+)$'
}

// List of SVG tags
export const SVG_TAGS = {
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
}

/**
 * Get attributes filtered by type
 * Type depends on expression type
 *
 * @param {Strign} type Attribute type
 * @param {Object} attributes Attributes list
 *
 * @returns {Array} Filtered attributes list by type
 */
export function getAttributesByType (type, attributes, isSvg = false) {
	if (hasOwn(EXPRESSION, type)) {
		const expression = EXPRESSION[type]
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
export function hasOwn (obj, key) {
	return Object.prototype.hasOwnProperty.call(obj, key)
}

/**
 * Set HTML attribute
 *
 * @param {HTMLElement} element Element to add the attribute
 * @param {Object} attribute Object contains name and value of the attribute
 */
export function setAttribute (element, attribute) {
	element.setAttribute(attribute.name, attribute.value)
}

/**
 * Add event listener to a element
 *
 * @param {HTMLElement} element Element to add the event listener
 * @param {Object} attribute Object contains name and value of the event
 */
export function addEventListener (element, attribute) {
	element.addEventListener(attribute.name, attribute.value, false)
}

/**
 * Dispatch custom event listener
 *
 * @param {String} event Custom event name
 * @param {HTMLElement} element Element to add the custom event listener
 */
export function dispatchEvent (event, element) {
	element.dispatchEvent(new window.CustomEvent(event))
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
export function removeEmptyChildren (children, emptyValue) {
	return children.filter(child => child !== emptyValue)
}

/**
 * Render HTMLElements into container
 *
 * @param {HTMLCollection} element HTMLCollection from JSX
 * @param {HTMLElement} container Container to append content
 */
export function render (element, container) {
	container.appendChild(element)
}
