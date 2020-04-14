import { getAttributesByType } from './utils'

/**
 * Check if element contains "if" attribute
 * Attributes come from JSX attributes of the element
 *
 * @param {Object}
 * @param {Object} attributes Object contains name and value of JSX attributes
 */
export default function checkCondition ({ attributes }) {
	const validAttribute = getAttributesByType('condition', attributes)

	// Return the attribute value if exist (true|false)
	// Else undefined is returns
	if (validAttribute.length) {
		return validAttribute[0].value
	}
}
