/**
 * Webpack config file.
 */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')

const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const APP_DIR = path.resolve(__dirname, './../src')

module.exports = env => {
    return merge([
        {
            entry: ['@babel/polyfill', APP_DIR],
            module: {
                rules: [
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader'
                        }
                    },
                    {
                        test: /\.s?css$/,
                        use: [
                            {
                                loader: env.PLATFORM === 'production' ? MiniCssExtractPlugin.loader : 'style-loader'
                            },
                            {
                                loader: "css-loader"
                            },
                            {
                                loader: "sass-loader"
                            }
                        ]   
                    },
                    {
                        test : /\.(png|svg|jpg|gif)$/,
                        use : [
                            'file-loader'
                        ] 
                    }
                ]
            },
            plugins: [
                new HtmlWebpackPlugin({
                    template: './src/index.html',
                    filename: './index.html'
                }),
                new webpack.DefinePlugin({
                    'process.env.VERSION': JSON.stringify(env.VERSION),
                    'process.env.PLATFORM': JSON.stringify(env.PLATFORM)
                })
            ]
        }
    ])
}
