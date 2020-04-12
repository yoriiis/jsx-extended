import ManagerCondition from './managers/condition'
import ManagerCustomEvents from './managers/custom-events'
import ManagerEvents from './managers/events'
import ManagerDOMAttributes from './managers/dom-attributes'

const managerCondition = new ManagerCondition()
const managerCustomEvents = new ManagerCustomEvents()
const managerEvents = new ManagerEvents()
const managerDOMAttributes = new ManagerDOMAttributes()

const CONDITIONAL_NODE_VALUE = null
const EXPRESSION_CUSTOM_ATTRIBUTE = [managerCondition.expression, managerEvents.expression]

managerDOMAttributes.expressionsCustomAttribute = EXPRESSION_CUSTOM_ATTRIBUTE

export function createElement (tagName, attrs = {}, ...children) {
	const attributes = attrs || {}

	let element
	if (tagName instanceof Function) {
		// Function component
		element = tagName(attributes)
	} else if (tagName === 'fragment') {
		// Fragment component
		element = document.createDocumentFragment()
	} else {
		// HTML tags
		const condition = managerCondition.check({ attributes })

		// If condition is valid or no condition
		if (condition || condition === undefined) {
			element = document.createElement(tagName)
			managerDOMAttributes.create({ element, attributes, ignore: [managerEvents.expression] })
		} else {
			return CONDITIONAL_NODE_VALUE
		}
	}

	managerEvents.create({ element, attributes })
	managerCustomEvents.create({ element, attributes })

	const cleanChildren = getCleanChildren(children)
	for (const child of cleanChildren) {
		// Check if direct child is not CONDITIONAL_NODE_VALUE
		if (child !== CONDITIONAL_NODE_VALUE) {
			if (Array.isArray(child)) {
				// Check if sub child is not CONDITIONAL_NODE_VALUE
				const cleanSubChildren = getCleanChildren(child)
				element.append(...cleanSubChildren)
			} else element.append(child)
		}
	}
	return element
}

export { emitCustomEvent } from './managers/custom-events'

export function render (element, component) {
	element.appendChild(component)
}

function getCleanChildren (children) {
	return children.filter(child => child !== CONDITIONAL_NODE_VALUE)
}
