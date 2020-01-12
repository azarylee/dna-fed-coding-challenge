'use strict';
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = {
    entry: {
        index: path.resolve(__dirname, '../src/main.js'),
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
    },
    resolve: {
        extensions: ['.js', '.vue', '.scss', '.css', '.json'],
        alias: { 
            '@': path.resolve(__dirname, '../src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loaders: 'url-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ['style-loader', "vue-style-loader", 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: 'url-loader',
                // options: {
                //     limit: 80000,

                // }
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'WebpackTest',
            minify: { 
                removeComments: true, 
                collapseWhitespace: true, 
                minifyCSS: true 
            },
            filename: './index.html', 
            template: './index.html',
        }),
        new ProgressBarPlugin()
    ]
}