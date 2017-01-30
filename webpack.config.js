const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/main.js',

  output: {
    path:     path.join(__dirname),
    filename: 'main.js'
  },

  resolve: {
    root:       path.resolve(__dirname),
    extensions: ['', '.js']
  },

  plugins: [
    new ExtractTextPlugin('styles.css'),
  ],

  module: {
    loaders: [
      {
        test:    /\.js/,
        include: path.join(__dirname, 'src'),
        loaders: ['babel']
      },
      {
        test:    /\.css$/,
        include: path.join(__dirname, 'src'),
        loader:  ExtractTextPlugin.extract('style-loader', 'css-loader')
      }
    ]
  }
};
