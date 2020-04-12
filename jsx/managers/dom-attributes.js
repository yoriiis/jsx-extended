import { getAttributesByType, setAttribute } from '../utils'

export default class ManagerDOMAttributes {
	create ({ element, attributes }) {
		getAttributesByType('domAttribute', attributes)
			.map(attribute => ({
				name: attribute,
				value: attributes[attribute]
			}))
			.map(attribute => setAttribute(element, attribute))
	}
}
