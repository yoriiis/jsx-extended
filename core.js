const REGEXP_EVENT_ATTRIBUTE = /^e:[a-z]+/

export function render (element, component) {
	element.appendChild(component)
}

export function createElement (tagName, attrs = {}, ...children) {
	const attributes = attrs || {}
	const eventsFromAttributes = getEventsFromAttribute(attributes)

	let elem
	if (tagName instanceof Function) {
		elem = tagName(attrs)
	} else if (tagName === 'fragment') {
		elem = document.createDocumentFragment()
	} else {
		elem = document.createElement(tagName)
		const DOMAttributes = getDOMAttributes(attributes)
		elem = createElementAttributes(elem, DOMAttributes)
	}

	eventsFromAttributes.forEach(event => {
		createEvent(elem, event)
	})

	for (const child of children) {
		if (Array.isArray(child)) elem.append(...child)
		else elem.append(child)
	}
	return elem
}

function getDOMAttributes (attributes) {
	return Object.keys(attributes)
		.filter(key => !key.match(REGEXP_EVENT_ATTRIBUTE))
		.map(key => ({ key: key, value: attributes[key] }))
}

function createElementAttributes (elem, attributes) {
	attributes.forEach(attribute => elem.setAttribute(attribute.key, attribute.value))
	return elem
}

function getEventsFromAttribute (attributes) {
	return Object.keys(attributes)
		.filter(key => key.match(REGEXP_EVENT_ATTRIBUTE))
		.map(key => key.split(':')[1])
		.filter(key => typeof document[`on${key}`] !== 'undefined')
		.map(key => ({ type: key, handler: attributes[`e:${key}`] }))
}

function createEvent (elem, event) {
	elem.addEventListener(event.type, event.handler)
}

const Rlite = {
	createElement,
	render
}

export default Rlite
