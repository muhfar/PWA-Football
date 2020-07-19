const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const workboxPlugin = require("workbox-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const copyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: {
        main:'./index.js',
        standing_bundle: './standing-bundle.js',
        team_bundle: './team-bundle.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module:{
		rules:[{
			test: /\.css$/,
			use: [
				{
					loader: "style-loader"
				},
				{
					loader: "css-loader"
				}
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/i,
				loader: "file-loader",
				options: {
					name: '[name].[ext]',
					publicPath: 'assets',
					outputPath: 'assets',

				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				loader: "file-loader",
				options: {
					name: '[name].[ext]',
					outputPath: 'fonts'
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new htmlWebpackPlugin({
			filename: "index.html",
			inject: true,
			chunks: ['main'],
			template: "./index.html"
        }),
        new htmlWebpackPlugin({
			filename: "standing.html",
			inject: true,
			chunks: ['standing_bundle'],
			template: "./standing.html"
        }),
        new htmlWebpackPlugin({
			filename: "team.html",
			inject: true,
			chunks: ['team_bundle'],
			template: "./team.html"
		}),
		new htmlWebpackPlugin({
			filename: "nav.html",
			inject: false,
			template: "./nav.html"
		}),
		new htmlWebpackPlugin({
			filename: "./pages/home.html",
			inject: false,
			template: "./pages/home.html"
		}),
		new htmlWebpackPlugin({
			filename: "./pages/matches.html",
			inject: false,
			template: "./pages/matches.html"
		}),
		new htmlWebpackPlugin({
			filename: "./pages/favorite.html",
			inject: false,
			template: "./pages/favorite.html"
		}),
		new workboxPlugin.InjectManifest({
			swSrc: './service-worker.js',
		}),
		new copyPlugin({
			patterns: [
				{
					from: "manifest.json",
				}
			]
		})
	]
};