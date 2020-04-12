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
		// [
		// 	'./custom-plugin-babel.js',
		// 	{
		// 		pragma: 'createElement',
		// 		pragmaFrag: "'fragment'",
		// 		throwIfNamespace: false
		// 	}
		// ],
		[
			'@babel/plugin-transform-react-jsx',
			{
				pragma: 'createElement',
				pragmaFrag: "'fragment'",
				throwIfNamespace: false
			}
		]
		// [
		// 	'@babel/plugin-syntax-jsx',
		// 	{
		// 		pragma: 'createElement',
		// 		pragmaFrag: "'fragment'",
		// 		throwIfNamespace: false
		// 	}
		// ]
	]

	return {
		presets,
		plugins
	}
}
