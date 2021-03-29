//webpack.config.js
var path = require("path");
var webpack = require("webpack");
module.exports = {
	entry: "./src/index.js",
	devtool: 'inline-source-map',
	output: {
		path: path.join(__dirname, 'public'),
		filename: "bundle.js",
		publicPath: "/",
	},
	devServer: {
		contentBase: path.join(__dirname, "/"),
		watchContentBase: true,
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /.jsx?$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				query: {
					presets: ["@babel/preset-env", "@babel/preset-react",{
						'plugins': ['@babel/plugin-proposal-class-properties']}
					]
		
				},
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader",
			},
            {
                test: /\.(png|jp(e*)g|svg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: 'images/[name].[ext]',
                      //name: 'images/[hash]-[name].[ext]',
                    },
                  },
                ],
            }
		],
	},
};
