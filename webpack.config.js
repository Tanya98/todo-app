const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {

    entry: './src/index.js',
    output: {
        filename: './build.js',
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        //hot: true
    },

    module: {

        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    }, "css-loader"]
            }

        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'build.css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        }),

        new webpack.NamedModulesPlugin(),
        //new webpack.HotModuleReplacementPlugin(),
    ]
}
