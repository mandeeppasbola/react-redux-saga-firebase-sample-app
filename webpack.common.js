require("babel-register");

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {	
	entry : ["babel-polyfill","./src/index.js"],
	output : {
		filename: 'bundle.js',
		chunkFilename: '[name].bundle.js',
		path: __dirname + "/dist"
	},
	resolve : {
		alias: {
			'react': 'preact-compat',
			'react-dom': 'preact-compat',
			'firebaseImport$': path.join('path', 'to', 'your', 'firebaseImport.js')
		}
	},
	plugins: [
		new CleanWebpackPlugin(["dist"]),
		new HtmlWebpackPlugin({
			title: "Sample React Redux App",
			template: "./src/index.ejs"
		}),
		new ExtractTextPlugin({
			filename: 'style.css'
		})
	],	
	module: {
		rules: [
			{ 
				test: /\.js?$/, 
				exclude: /node_modules/, 
				loader: 'babel-loader'
			},
			{ 
				test: /\.scss$/, 
				exclude: /node_modules/, 
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	}
}