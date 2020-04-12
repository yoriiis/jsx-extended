export default class ManagerDOMAttributes {
	static expressionsCustomAttribute

	create ({ element, attributes }) {
		const DOMAttributes = this.getDOMAttributes(attributes)
		DOMAttributes.forEach(attribute => this.setAttribute(element, attribute))
	}

	getDOMAttributes (attributes) {
		return Object.keys(attributes)
			.filter(attribute => this.isAttributeNotMatchExpressions(attribute))
			.map(attribute => this.returnAttributeDatas(attributes, attribute))
	}

	mergeExpressions () {
		return `(${this.expressionsCustomAttribute.join('|')})`
	}

	isAttributeNotMatchExpressions (attribute) {
		return !attribute.match(new RegExp(this.mergeExpressions()))
	}

	setAttribute (element, attribute) {
		element.setAttribute(attribute.name, attribute.value)
	}

	returnAttributeDatas (attributes, attribute) {
		return {
			name: attribute,
			value: attributes[attribute]
		}
	}
}
