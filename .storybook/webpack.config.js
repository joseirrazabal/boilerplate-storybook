const path = require('path')

module.exports = {
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
				// include: [path.resolve(__dirname, "../css/")]
			},
			{
				test: /\.(gif|ico|jpg|jpeg|png|svg|webp|woff|eot|ttf)$/,
				// include,
				loader: 'url-loader',
				options: {
					limit: 10000
				}
			},
			//   {
			//     test: /\.svg$/,
			//     use: [
			//       {
			//         loader: "babel-loader",
			//         query: {
			//           presets: ["airbnb"]
			//         }
			//       }
			//     ]
			//   },
			{
				test: /\.jsx$/,
				// use: ['babel-loader']
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'@babel/env',
								{
									modules: false
								}
							],
							'@babel/react'
						],
						plugins: [
							// '@loadable/babel-plugin',
							'dynamic-import-node',
							'@babel/plugin-syntax-dynamic-import',
							'@babel/plugin-syntax-import-meta',
							['@babel/plugin-proposal-class-properties', { loose: false }],
							'@babel/plugin-proposal-json-strings'
						]
					}
				}
			},
		]
	},
	resolve: {
		extensions: ['.mjs', '.js', '.jsx'],
		alias: {
			'src/emmaterial': path.resolve(__dirname, "../src")
		}
	},
	node: {
		fs: 'empty'
		// net: 'empty',
		// tls: 'empty',
		// process: false
	}
}
