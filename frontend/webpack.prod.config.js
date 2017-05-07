var path = require("path");
var webpack = require('webpack');
var BundleTracker = require('webpack-bundle-tracker');
var CompressionPlugin = require('compression-webpack-plugin');
var config = require('./webpack.base.config.js');


module.exports = Object.assign(config, {
  output: {
    path: path.resolve('./dist/'),
    filename: "bundle.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        BASE_API_URL: JSON.stringify('http://thebookofjoel.com/api/')
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
})