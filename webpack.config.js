const path = require('path')

module.exports = (env, argv) => {
	const isProduction = argv.mode === 'production'

	return {
		watch: !isProduction,
		entry: {
			demo: path.resolve(__dirname, './src/demo/demo.js')
		},
		output: {
			filename: 'scripts/[name].js',
			chunkFilename: 'scripts/[name].js',
			path: path.resolve(__dirname, `./public/dist`),
			publicPath: '/dist/'
		},
		devtool: 'source-map',
		module: {
			rules: [
				{
					test: /\.js$/,
					use: [
						{
							loader: 'babel-loader'
						}
					]
				}
			]
		},
		resolve: {
			modules: [path.resolve(__dirname, './node_modules')],
			extensions: ['.js', '.css']
		}
	}
}
