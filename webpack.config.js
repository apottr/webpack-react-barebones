module.exports = {
	entry: './src/main.js',
	output: {
		path: './dist',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader'
			},
			{
				test: /\.sass?$/,
				exclude: /(node_modules)/,
				loaders: ["style-loader","css-loader","sass-loader"]
			}
			]
		}
}

