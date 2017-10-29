const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {	
	entry : ["babel-polyfill","./src/index.js"],
	output : {
		filename: 'bundle.js',
		path: __dirname + "/dist"
	},
	plugins: [new CleanWebpackPlugin(["dist"]),
		new HtmlWebpackPlugin({
		title: "Sample React Redux App",
		template: "./src/index.ejs"
	})],	
	module: {
		rules: [
			{ test: /\.js?$/, exclude: /node_modules/, loader: "babel-loader" },
			{ test: /\.scss$/, exclude: /node_modules/, loader: "style-loader!css-loader!sass-loader"}
		]
	}
}