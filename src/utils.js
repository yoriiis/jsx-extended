export const EXPRESSION = {
	condition: '^if$',
	event: '^(on)([A-Z]{1}[a-z]+)+$',
	domAttribute: '^(?!(on|class$|if$))([a-z]+|[a-z]+([A-Z]{1}[a-z]+)+|data(-[a-z]+)+|aria-[a-z]+)$'
}

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
 * Check whether an object has the property.
 */
const hasOwnProperty = Object.prototype.hasOwnProperty
export function hasOwn (obj, key) {
	return hasOwnProperty.call(obj, key)
}

export function setAttribute (element, attribute) {
	element.setAttribute(attribute.name, attribute.value)
}

export function addEventListener (element, attribute) {
	element.addEventListener(attribute.name, attribute.value, false)
}

export function dispatchEvent (element, event) {
	element.dispatchEvent(new window.CustomEvent(event))
}

export function removeEmptyChildren (children, emptyValue) {
	return children.filter(child => child !== emptyValue)
}
