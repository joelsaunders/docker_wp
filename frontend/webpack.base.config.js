var path = require("path")
var webpack = require('webpack')

module.exports = {
  entry: './src/js/index.js', // entry point app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: __dirname,
      publicPath: "/",
      filename: "bundle.js"
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
          BASE_API_URL: JSON.stringify('http://localhost:80/api/')
      }
    })
  ],

  module: {
    loaders: [
      { 
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ],
  },

  resolve: {
    modules: ['node_modules', 'bower_components'],
    extensions: ['', '.js', '.jsx']
  }
}