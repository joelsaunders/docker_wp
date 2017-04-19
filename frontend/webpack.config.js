var path = require("path")
var webpack = require('webpack')

var config = require('./webpack.base.config.js')

module.exports = Object.assign(config, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                BASE_API_URL: JSON.stringify('http://0.0.0.0:8000/api/')
            }
        })
    ],
    devServer: {
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 8000,
    }
})