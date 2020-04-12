import { getAttributesByType, transformEventNameToObjectProperty, addEventListener } from '../utils'

export default class ManagerEvents {
	create ({ element, attributes }) {
		getAttributesByType('event', attributes)
			.map(attribute => ({
				type: transformEventNameToObjectProperty(attribute),
				handler: attributes[attribute]
			}))
			.map(attribute => addEventListener(element, attribute))
	}
}
