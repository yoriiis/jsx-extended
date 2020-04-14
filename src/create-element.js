import { removeEmptyChildren } from './utils'
import checkCondition from './check-condition'
import createEvents from './create-events'
import createAttributes from './create-attributes'

const EMPTY_NODE_VALUE = null

/**
 * Function called by Babel plugin "@babel/plugin-transform-react-jsx"
 * Function name is used with "pragma: 'jsx.createElement'" options
 * Each JSX elements (function, fragment, tag) call this function
 *
 * @param {String} tagName Name of the tag (h1, p, span, div, etc.)
 * @param {Object} attributes Object contains name and value of JSX element's attributes
 * @param {Array} children Childrens list of the element
 *
 * @returns {HTMLElement} Element transform from JSX to HTMLElement valid
 * Element contains attributes and events listener
 */
export default function createElement (tagName, attributes = {}, ...children) {
	// Check if element need to be passed
	if (attributes !== null && checkCondition({ attributes }) === false) {
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
			createAttributes({ element, attributes })
			createEvents({ element, attributes })
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
