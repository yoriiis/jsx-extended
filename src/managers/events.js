import { getAttributesByType, addEventListener } from '../utils'

export default class ManagerEvents {
	create ({ element, attributes }) {
		getAttributesByType('event', attributes)
			.map(({ name, ...fields }) => ({
				name: name.substr(2),
				...fields
			}))
			.map(attribute => addEventListener(element, attribute))
	}
}
