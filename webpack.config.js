var webpack = require("webpack");

module.exports = {
    entry: [
        __dirname + '/src/entry.js',
        // __dirname + '/src/members/*'
    ],
    output: {
        path: __dirname + '/dist/',
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            }
        ]
    },
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //       compressor: {
    //         warnings: false,
    //       },
    //     })
    // ]
}