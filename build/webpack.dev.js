'use strict';
const merge = require('webpack-merge');
const base = require("./webpack.base");
const webpack = require("webpack");

module.exports = merge(base, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        compress: true,
        port: 1234,
        open: false,
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
});