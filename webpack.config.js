const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js",
	},
	devtool: "eval-source-map",
	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: "babel-loader",
			},
			{
				test: /\.(s(a|c)ss)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new MiniCssExtractPlugin({
			filename: "../build/style.min.css",
		}),
	],
	devServer: {
		contentBase: path.join(__dirname, "src/assets"),
		compress: true,
		port: 2402,
		hot: true,
	},
};
