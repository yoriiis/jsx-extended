import { getAttributesByType, addEventListener } from './utils'

/**
 * Create events listener on element
 * Attributes come from JSX attributes of the element
 *
 * @param {Object}
 * @param {HTMLElement} element Element to add events listener
 * @param {Object} attributes Object contains name and value of JSX attributes
 */
export default function createEvents({ element, attributes }) {
	getAttributesByType('event', attributes)
		.map(({ name, ...fields }) => ({
			name: name.substr(2),
			...fields
		}))
		.map((attribute) => addEventListener(element, attribute))
}
