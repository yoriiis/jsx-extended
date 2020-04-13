import { removeEmptyChildren } from './utils'
import ManagerCondition from './managers/condition'
import ManagerEvents from './managers/events'
import ManagerDOMAttributes from './managers/dom-attributes'

const managerCondition = new ManagerCondition()
const managerEvents = new ManagerEvents()
const managerDOMAttributes = new ManagerDOMAttributes()

const EMPTY_NODE_VALUE = null

export function createElement (tagName, attributes = {}, ...children) {
	// Check if element need to be passed
	if (attributes !== null && managerCondition.check({ attributes }) === false) {
		return EMPTY_NODE_VALUE
	}

	let element
	if (tagName instanceof Function) {
		// Function component
		element = tagName(attributes || {})
	} else if (tagName === 'fragment') {
		// Fragment component
		element = document.createDocumentFragment()
	} else {
		// HTML tags
		element = document.createElement(tagName)

		// Build element attributes and events listeners
		if (attributes !== null) {
			managerDOMAttributes.create({ element, attributes })
			managerEvents.create({ element, attributes })
		}
	}

	const cleanChildren = removeEmptyChildren(children, EMPTY_NODE_VALUE)
	for (const child of cleanChildren) {
		// Check if direct child is not EMPTY_NODE_VALUE
		if (child !== EMPTY_NODE_VALUE) {
			if (Array.isArray(child)) {
				// Check if sub child is not EMPTY_NODE_VALUE
				const cleanSubChildren = removeEmptyChildren(child, EMPTY_NODE_VALUE)
				element.append(...cleanSubChildren)
			} else element.append(child)
		}
	}
	return element
}
