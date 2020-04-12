import ManagerCondition from './managers/condition'
import ManagerLoop from './managers/loop'
import ManagerEvents from './managers/events'
import ManagerDOMAttributes from './managers/dom-attributes'

const managerCondition = new ManagerCondition()
const managerLoop = new ManagerLoop()
const managerEvents = new ManagerEvents()
const managerDOMAttributes = new ManagerDOMAttributes({
	expressions: [managerLoop.expression, managerEvents.expression]
})

export function createElement (tagName, attrs = {}, ...children) {
	const attributes = attrs || {}
	const cleanChildren = removeEmptyChildren(children)

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

		if (condition === true || condition === undefined) {
			element = document.createElement(tagName)
			managerDOMAttributes.create({ element, attributes, ignore: [managerEvents.expression] })
		} else {
			return null
		}
	}

	managerEvents.create({ element, attributes })

	for (const child of cleanChildren) {
		if (Array.isArray(child)) element.append(...child)
		else element.append(child)
	}
	return element
}

function removeEmptyChildren (children) {
	return children.filter(child => child !== null)
}

export function render (element, component) {
	element.appendChild(component)
}

const Rlite = {
	createElement,
	render
}

export default Rlite
