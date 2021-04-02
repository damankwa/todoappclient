const path = require("path");//helps route our created files into proper directory
const webpack = require('webpack');

module.exports = {
    entry: "./src/index.js",//our main javascript file
    mode: 'development',
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port:9000,
        hotOnly: true
    },
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
        rules: [
            {
                test: /\.js$/, //whenever a js file is found babel should transpile
                exclude: /(node_modules)/, //we will say dont run from node_modules folder because it can take a while
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env','@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                ]
            },
            {
                test: /\.(png|jpg)$/,
                use: [
                    {loader: 'url-loader'}

                ]
            }
        ]
    }
}