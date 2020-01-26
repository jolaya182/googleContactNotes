/**
 * Production webpack config.
 */
const merge = require('webpack-merge')

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const Visualizer = require('webpack-visualizer-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const baseConfig = require('./webpack.base.config')

const prodConfiguration = env => {
    return merge([
        {
            optimization: {
                minimizer: [new UglifyJsPlugin()]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: './src/index.html',
                    filename: './index.html',
                    inject: true,
                    minify: {
                        collapseWhitespace: true,
                        collapseInlineTagWhitespace: true,
                        minifyCSS: true,
                        minifyURLs: true,
                        minifyJS: true,
                        removeComments: true,
                        removeRedundantAttributes: true
                    }
                }),
                new MiniCssExtractPlugin(),
                new OptimizeCssAssetsPlugin(),
                new Visualizer({ filename: './statistics.html' })
            ],
        }
    ])
}

module.exports = env => {
    return merge(baseConfig(env), prodConfiguration(env))
}
