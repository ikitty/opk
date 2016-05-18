const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output:{
        path: './build',
        publicPath: './build/',
        filename: 'bundle.js',
    },
    module: {
        loaders:[
        {
            test: /\.js$/,
            loader: 'babel?presets[]=es2015',
            include: /src/,
        },
        {
            test: /\.css$/,
            loader:'style!css',
        },
        {
            test: /\.html$/,
            loader:'html',
        },
        ]       
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            output: {comments: false},
        })
    ],
}
