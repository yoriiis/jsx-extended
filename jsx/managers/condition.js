const ATTRIBUTE_SYNTAX = 'if'

export default class ManagerCondition {
	expression = `^${ATTRIBUTE_SYNTAX}$`

	check ({ attributes }) {
		const conditionFromAttribute = this.getConditionFromAttribute(attributes)
		return attributes[conditionFromAttribute]
	}

	getConditionFromAttribute (attributes) {
		return Object.keys(attributes).filter(attribute =>
			this.isAttributeMatchExpression(attribute)
		)
	}

	isAttributeMatchExpression (attribute) {
		return attribute.match(this.expression)
	}

	isConditionValid (attribute) {
		return attribute
	}

	returnAttributeDatas (attributes, attribute) {
		return {
			condition: attributes[attribute]
		}
	}
}
