import {
	getAttributesByType,
	transformEventNameToCustomEventName,
	addEventListener
} from '../utils'

export default class ManagerCustomEvents {
	create ({ element, attributes }) {
		getAttributesByType('customEvent', attributes)
			.map(attribute => ({
				type: transformEventNameToCustomEventName(attribute),
				handler: attributes[attribute]
			}))
			.map(attribute => addEventListener(element, attribute))
	}
}
