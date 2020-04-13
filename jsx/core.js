import { removeEmptyChildren } from './utils'
import ManagerCondition from './managers/condition'
import ManagerEvents from './managers/events'
import ManagerDOMAttributes from './managers/dom-attributes'

const managerCondition = new ManagerCondition()
const managerEvents = new ManagerEvents()
const managerDOMAttributes = new ManagerDOMAttributes()

const CONDITIONAL_NODE_VALUE = null

export function createElement (tagName, attrs = {}, ...children) {
	const attributes = attrs || {}

	const condition = managerCondition.check({ attributes })

	if (condition === false) {
		return CONDITIONAL_NODE_VALUE
	}

	let element
	if (tagName instanceof Function) {
		// Function component
		element = tagName(attributes)
	} else if (tagName === 'fragment') {
		// Fragment component
		element = document.createDocumentFragment()
	} else {
		// HTML tags
		element = document.createElement(tagName)
		managerDOMAttributes.create({ element, attributes, ignore: [managerEvents.expression] })
	}

	managerEvents.create({ element, attributes })

	const cleanChildren = removeEmptyChildren(children, CONDITIONAL_NODE_VALUE)
	for (const child of cleanChildren) {
		// Check if direct child is not CONDITIONAL_NODE_VALUE
		if (child !== CONDITIONAL_NODE_VALUE) {
			if (Array.isArray(child)) {
				// Check if sub child is not CONDITIONAL_NODE_VALUE
				const cleanSubChildren = removeEmptyChildren(child, CONDITIONAL_NODE_VALUE)
				element.append(...cleanSubChildren)
			} else element.append(child)
		}
	}
	return element
}

export { dispatchEvent } from './utils'

export function render (element, component) {
	element.appendChild(component)
}
