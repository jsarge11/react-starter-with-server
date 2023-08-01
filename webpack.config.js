const HtmlWebpackPlugin = require('html-webpack-plugin');
const { DefinePlugin } = require('webpack');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const dotenv = require('dotenv');
const path = require('path');

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		globalObject: 'this',
	},
	module: {
		rules: [
			{
				test: /\.js/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.s?css/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(ts|tsx)$/,
				loader: 'ts-loader',
			},
		],
	},
	resolve: {
		extensions: ['.js', '.json', '.ts', '.tsx'],
		plugins: [
			new TsConfigPathsPlugin({
				extensions: ['.js', '.json', '.ts', '.tsx'],
			}),
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			publicPath: '/',
		}),
		new DefinePlugin({
			'process.env': JSON.stringify(dotenv.config().parsed),
		}),
	],
	devServer: {
		static: path.resolve(__dirname, 'dist'),
		proxy: {
			'/': {
				target: 'http://localhost:5555',
			},
		},
	},
};
