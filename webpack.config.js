const webpack = require('webpack');
var path = require('path')
var CleanPlugin = require('clean-webpack-plugin')
var ExtractPlugin = require('extract-text-webpack-plugin');

var production = process.env.NODE_ENV === 'production' 
var plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'main',
        children: true,
        minChunks: 2,
    }),
    new ExtractPlugin("final_style.css"),
]
if (production) {
    plugins = plugins.concat([
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 51200, // ~50kb
        }),

        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            output: {comments: false},
        }),

        new webpack.DefinePlugin({
            __SERVER__:      !production,
            __DEVELOPMENT__: !production,
            __DEVTOOLS__:    !production,
            'process.env':   {
                BABEL_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new CleanPlugin('build'),
    ])
}

module.exports = {
    debug: !production,
    devtool: production ? false : 'eval',
    entry: './src/app.js',
    output:{
        path: './build',
        //webpack的时候 路径要以点开头，devserver的时候要以文件名开头
        publicPath: production ? './build/' : '/build/' ,
        filename: production ? '[name]-[hash].js' : 'bundle.js',
        chunkFilename: '[name]-[chunkhash].js',
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
            //loader: ExtractPlugin.extract('style', 'css'),
            loader: 'style!css'
        },
        {
            test: /\.html$/,
            loader:'html',
        },
        {
        
            test:   /\.(png|gif|jpe?g|svg)$/i,
            loader: 'url?limit=10000',
        },
        ]       
    },

    plugins: plugins,
    devServer: {
        hot: true,
    }
}
