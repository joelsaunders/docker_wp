var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

var config = require('./webpack.base.config.js')

module.exports = Object.assign(config, {
    plugins: [
        new BundleTracker({
            filename: './webpack-stats.json'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                BASE_API_URL: JSON.stringify('http://localhost:80/api/')
            }
        })
    ]
})