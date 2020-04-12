export const EXPRESSION = {
	condition: '^if$',
	event: '^(on)([A-Z]{1}[a-z]+)+$',
	customEvent: '^(on)([A-Z]{1}[a-z]+)+$',
	domAttribute: '^(?!on)([a-z]+|[a-z]+-[a-z]+)$'
}

export function getAttributesByType (type, attributes) {
	const expression = EXPRESSION[type]
	if (hasOwn(EXPRESSION, type)) {
		const attributeByType = Object.keys(attributes).filter(attribute =>
			new RegExp(expression).test(attribute)
		)

		if (type === 'event') {
			return attributeByType.filter(
				attribute => typeof document[attribute.toLowerCase()] !== 'undefined'
			)
		}

		return attributeByType
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

export function transformEventNameToObjectProperty (event) {
	return removeEventNamePrefix(event).toLowerCase()
}

export function removeEventNamePrefix (event) {
	return event.substr(0, 2) === 'on' ? event.substr(2) : event
}

export function transformEventNameToCustomEventName (event) {
	const eventWithoutPrefix = removeEventNamePrefix(event)

	return eventWithoutPrefix.charAt(0).toLowerCase() + eventWithoutPrefix.slice(1)
}

export function setAttribute (element, attribute) {
	element.setAttribute(attribute.name, attribute.value)
}

export function addEventListener (element, event) {
	element.addEventListener(event.type, event.handler, false)
}

export function dispatchEvent (element, event) {
	element.dispatchEvent(new window.CustomEvent(event))
}

export function removeEmptyChildren (children, emptyValue) {
	return children.filter(child => child !== emptyValue)
}
