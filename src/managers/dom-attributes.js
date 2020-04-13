import { getAttributesByType, setAttribute } from '../utils'

export default class ManagerDOMAttributes {
	create ({ element, attributes }) {
		getAttributesByType('domAttribute', attributes)
			.map(({ name, ...fields }) => ({
				name: name === 'classname' ? 'class' : name,
				...fields
			}))
			.map(attribute => setAttribute(element, attribute))
	}
}
