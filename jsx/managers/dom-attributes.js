import { getAttributesByType, setAttribute } from '../utils'

export default class ManagerDOMAttributes {
	create ({ element, attributes }) {
		getAttributesByType('domAttribute', attributes)
			.filter(attribute => attribute.name !== 'class')
			.map(attribute =>
				attribute.name === 'classname'
					? { name: 'class', value: attribute.value }
					: attribute
			)
			.map(attribute => setAttribute(element, attribute))
	}
}
