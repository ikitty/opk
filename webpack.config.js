const webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output:{
        path: './bin',
        filename: 'app.bundle.js',
    },
    module: {
        loaders:[{
            test: /.jsx?$/,
            include:  __dirname + '/src',
            loader: 'babel',
        },
        {
            test: /.css/,
            loader:'css',
        },
        {
            test: /.html/,
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
