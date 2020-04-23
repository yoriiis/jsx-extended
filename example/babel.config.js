module.exports = function (api) {
	const presets = [
		[
			'@babel/preset-env',
			{
				targets: {
					node: '12.14.0'
				}
			}
		]
	]

	api.cache(true)

	const plugins = [
		'@babel/plugin-proposal-class-properties',
		[
			'@babel/plugin-transform-react-jsx',
			{
				pragma: 'jsx.createElement',
				pragmaFrag: '"fragment"'
			}
		]
	]

	return {
		presets,
		plugins
	}
}
