const path = require('path')
const webpack = require('webpack')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = (env, argv) => {
	const isProduction = argv.mode === 'production'

	return {
		watch: !isProduction,
		entry: {
			jsx: './src/index.js'
		},
		watchOptions: {
			ignored: /node_modules/
		},
		devtool: !isProduction ? 'source-map' : 'none',
		output: {
			path: path.resolve(__dirname, './dist'),
			publicPath: '/dist/',
			filename: '[name].js',
			sourceMapFilename: '[file].map',
			libraryTarget: 'umd',
			library: 'jsx'
		},
		module: {
			rules: [
				{
					test: /\.js$/,
					include: path.resolve(__dirname, './src'),
					use: [
						{
							loader: 'babel-loader'
						}
					]
				}
			]
		},
		plugins: [new ProgressBarPlugin(), new webpack.optimize.ModuleConcatenationPlugin()],
		stats: {
			assets: true,
			colors: true,
			hash: false,
			timings: true,
			chunks: false,
			chunkModules: false,
			modules: false,
			children: false,
			entrypoints: false,
			excludeAssets: /.map$/,
			assetsSort: '!size'
		},
		optimization: {
			minimizer: [
				new TerserPlugin({
					extractComments: false,
					cache: true,
					parallel: true,
					sourceMap: false,
					terserOptions: {
						extractComments: 'all',
						compress: {
							drop_console: false
						},
						mangle: true
					}
				})
			],
			namedModules: true,
			removeAvailableModules: true,
			removeEmptyChunks: true,
			mergeDuplicateChunks: true,
			occurrenceOrder: true,
			providedExports: false,
			splitChunks: false
		}
	}
}
