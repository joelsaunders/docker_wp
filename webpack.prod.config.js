var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  entry: './assets/js/index', // entry point app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "bundle.js",
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
    new webpack.DefinePlugin({
      'process.env': {
          BASE_API_URL: JSON.stringify('https://joelsaunders.herokuapp.com/api/')
      }
    })
  ],

  module: {
    loaders: [{ 
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }],
  },

  resolve: {
    modules: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  },
}