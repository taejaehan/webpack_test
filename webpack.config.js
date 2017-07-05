var webpack = require("webpack");

module.exports = {
    entry: __dirname + '/entry.js',
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin()
    ]
}