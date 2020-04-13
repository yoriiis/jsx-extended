import { getAttributesByType } from '../utils'

export default class ManagerCondition {
	check ({ attributes }) {
		const validAttribute = getAttributesByType('condition', attributes)

		if (validAttribute.length) {
			return attributes[validAttribute[0]]
		}
	}
}
