import { getAttributesByType, addEventListener } from '../utils'

export default class ManagerEvents {
	create ({ element, attributes }) {
		getAttributesByType('event', attributes)
			.map(attribute => ({
				name:
					attribute.name.substr(0, 2) === 'on'
						? attribute.name.substr(2)
						: attribute.name,
				value: attribute.value
			}))
			.map(attribute => addEventListener(element, attribute))
	}
}
