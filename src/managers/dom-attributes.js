import { getAttributesByType, setAttribute } from '../utils'

export default class ManagerDOMAttributes {
	create ({ element, attributes }) {
		const attrs = getAttributesByType('domAttribute', attributes)
		attrs
			.map(({ name, value }) => ({
				name: name === 'classname' ? 'class' : name,
				value
			}))
			.map(({ name, value }) => {
				if (name === 'style' && value instanceof Object) {
					// Style properties as object
					// Add all style properties on node property
					Object.keys(value).map(property => (element.style[property] = value[property]))
				} else if (name === 'dataset') {
					if (value instanceof Object && !Array.isArray(value)) {
						// Dataset properties as object
						// Add all key as dataset property
						Object.keys(value).map(key => {
							element.dataset[key] = value[key]
						})
					}
				} else {
					// Basic HTML attribute
					setAttribute(element, { name, value })
				}
			})
	}
}
