var path = require("path")
var webpack = require('webpack')

var config = require('./webpack.base.config.js')

module.exports = Object.assign(config, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                BASE_API_URL: JSON.stringify('http://localhost:8000/api/')
            }
        })
    ],
})