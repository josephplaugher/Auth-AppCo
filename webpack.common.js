const path = require('path')
const Dotenv = require('dotenv-webpack')

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		libraryTarget: 'commonjs2'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					query: { compact: true }
				}
			}
		]
	},
	plugins: [new Dotenv()]
}
