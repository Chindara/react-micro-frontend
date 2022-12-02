const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;
module.exports = {
	output: {
		publicPath: 'http://192.168.4.173:8001/',
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
	},

	devServer: {
		port: 8081,
		historyApiFallback: false,
	},

	module: {
		rules: [
			{
				test: /\.m?js/,
				type: 'javascript/auto',
				resolve: {
					fullySpecified: false,
				},
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
			{
				test: /\.(ts|tsx|js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},

	plugins: [
		new ModuleFederationPlugin({
			name: 'maintenance',
			filename: 'remoteEntry.js',
			remotes: {},
			exposes: {
				'./ChildOne': './src/components/one/ChildOne',
				'./ChildTwo': './src/components/two/ChildTwo',
				'./Sample': './src/components/sample-component/SampleList',
			},
			shared: {
				...deps,
				react: {
					singleton: true,
					requiredVersion: deps.react,
				},
				'react-dom': {
					singleton: true,
					requiredVersion: deps['react-dom'],
				},
			},
		}),
		new HtmlWebPackPlugin({
			template: './src/index.html',
		}),
	],
};
