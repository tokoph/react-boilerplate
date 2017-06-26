const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');
const config = require('../config');
const sharedConfig = require('./config.shared');

module.exports = merge(sharedConfig, {
  devtool: 'source-map',
  stats: 'normal',
  output: {
    path: path.join(__dirname, '..', 'dist'),
    filename: '[name].[chunkhash].js',
  },
  plugins: [
    config.extractText ? new ExtractTextPlugin({
      filename: '[name].[chunkhash].css',
      allChunks: true,
    }) : null,
  ].filter(p => !!p),
});
