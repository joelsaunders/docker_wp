var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");;

var config = require('./webpack.base.config.js')

module.exports = Object.assign(config, {
  output: {
    path: path.resolve('./dist/'),
    filename: "bundle.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        BASE_API_URL: JSON.stringify('http://127.0.0.1:8000/api/')
      }
    }),
    // new HtmlWebpackPlugin(),
    // new ExtractTextPlugin('style.css'),
  ],
})