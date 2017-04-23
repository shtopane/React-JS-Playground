let debug = process.env.NODE_ENV !== "production";
let webpack = require('webpack');
let path = require('path');
let ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.join(__dirname, "src"),
    devtool: debug ? "inline-sourcemap" : null,
    entry: [
		"./index.js"
	],
    module: {
        loaders: [{
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            },
            {
                test: /\.scss$/,
                loader:ExtractTextPlugin.extract('css-loader!sass-loader')
            }
        ]
    },
    output: {
        path: __dirname + "/src/",
        filename: "index.min.js"
    },
    plugins:[
        new ExtractTextPlugin({filename:'/css/main.css', allChunks:true}),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
        ]
};