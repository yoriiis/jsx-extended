import { getAttributesByType, setAttribute } from './utils'

/**
 * Create HTML attributes on element
 * Attributes come from JSX attributes of the element
 *
 * @param {Object}
 * @param {HTMLElement} element Element to add attributes
 * @param {Object} attributes Object contains name and value of JSX attributes
 */
export default function createAttributes ({ element, attributes, isSvg }) {
	const attrs = getAttributesByType('domAttribute', attributes, isSvg)

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
