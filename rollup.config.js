import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const isProduction = process.env.NODE_ENV === 'production'
const name = 'jsx-extended'

const banner =
	'/*!\n' +
	` * JSX Extended v${pkg.version}\n` +
	` * (c) 2020-${new Date().getFullYear()} Yoriiis\n` +
	' * Released under the MIT License.\n' +
	' */'

export default async () => ({
	input: 'src/index.js',
	plugins: [isProduction && terser()],
	output: [
		{
			// CommonJS, used by Node.js or bundlers e.g. Webpack, Browserify, Rollup
			banner,
			file: 'dist/jsx-extended.cjs.js',
			format: 'cjs',
			name
		},
		{
			// ESM, used by browser
			banner,
			file: pkg.module,
			format: 'es',
			name
		}
	]
})
