export default class ManagerEvents {
	expression = /^e:[a-z]+/

	create ({ element, attributes }) {
		const eventsFromAttributes = this.getEventsFromAttribute(attributes)
		eventsFromAttributes.forEach(attribute => this.addEventListener(element, attribute))
	}

	getEventsFromAttribute (attributes) {
		return Object.keys(attributes)
			.filter(attribute => this.isAttributeMatchExpression(attribute))
			.map(attribute => this.getEventName(attribute))
			.filter(attribute => this.isValidEventName(attribute))
			.map(attribute => this.returnAttributeDatas(attributes, attribute))
	}

	isAttributeMatchExpression (attribute) {
		return attribute.match(this.expression)
	}

	getEventName (attribute) {
		return attribute.split(':')[1]
	}

	isValidEventName (event) {
		return typeof document[`on${event}`] !== 'undefined'
	}

	returnAttributeDatas (attributes, attribute) {
		return {
			type: attribute,
			handler: attributes[`e:${attribute}`]
		}
	}

	addEventListener (element, event) {
		element.addEventListener(event.type, event.handler)
	}
}
