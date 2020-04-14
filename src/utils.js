// RegExp to detect attribute type
export const EXPRESSION = {
	condition: '^if$',
	event: '^(on)([A-Z]{1}[a-z]+)+$',
	domAttribute: '^(?!(on|if$))([a-z]+|[a-z]+([A-Z]{1}[a-z]+)+|data(-[a-z]+)+|aria-[a-z]+)$'
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
export function getAttributesByType (type, attributes) {
	if (hasOwn(EXPRESSION, type)) {
		const expression = EXPRESSION[type]
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
