import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import cleanup from 'rollup-plugin-cleanup'

const external = id => {
	if (['dateformat'].includes(id)) {
		return false
	}

	return !id.startsWith('src') && !id.startsWith('.') && !id.startsWith('/') && !id.startsWith('\0')
}

const config = [{
	external,
	plugins: [resolve(), commonjs(), cleanup({comments: [/^\*\*/]})],
	input: 'src/index.js',
	output: {
		file: 'index.js',
		format: 'es',
	},
}]

export default config
