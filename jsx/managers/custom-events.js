const ATTRIBUTE_SYNTAX = 'ce:'

export default class ManagerCustomEvents {
	expression = `^${ATTRIBUTE_SYNTAX}[a-z]+`

	create ({ element, attributes }) {
		const eventsFromAttributes = this.getEventsFromAttribute(attributes)
		eventsFromAttributes.forEach(attribute => this.addCustomEventListener(element, attribute))
	}

	getEventsFromAttribute (attributes) {
		return Object.keys(attributes)
			.filter(attribute => this.isAttributeMatchExpression(attribute))
			.map(attribute => this.getEventName(attribute))
			.map(attribute => this.returnAttributeDatas(attributes, attribute))
	}

	isAttributeMatchExpression (attribute) {
		return attribute.match(new RegExp(this.expression))
	}

	getEventName (attribute) {
		return attribute.split(':')[1]
	}

	returnAttributeDatas (attributes, attribute) {
		return {
			type: attribute,
			handler: attributes[`${ATTRIBUTE_SYNTAX}${attribute}`]
		}
	}

	addCustomEventListener (element, event) {
		element.addEventListener(event.type, event.handler, false)
	}
}

export function emitCustomEvent (element, event) {
	element.dispatchEvent(new window.CustomEvent(event))
}
