var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

var config = require('./webpack.base.config.js')

module.exports = Object.assign(config, {
  output: {
    path: path.resolve('./frontend/dist/'),
    filename: "bundle.js",
  },
  plugins: [
    new BundleTracker({
      filename: './webpack-stats-prod.json'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        BASE_API_URL: JSON.stringify('https://joelsaunders.herokuapp.com/api/')
      }
    })
  ]
})