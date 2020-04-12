const jsx = require('@babel/plugin-syntax-jsx')

module.exports = function ({ types: t }) {
	const visitor = () => {}

	return {
		name: 'transform-jsx',
		inherits: jsx,
		visitor
	}
}
