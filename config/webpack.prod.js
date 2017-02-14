var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
const CONNECT_TO_PULSE = process.env.CONNECT_TO_PULSE = 'false';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('dist'),
    publicPath: '/',
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  htmlLoader: {
    minimize: false // workaround for ng2
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      mangle: {
        keep_fnames: true
      }
    }),
    new ExtractTextPlugin('[name].[hash].css'),
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV),
        'CONNECT_TO_PULSE': JSON.stringify(CONNECT_TO_PULSE)
      }
    }),
    new CopyWebpackPlugin([
      {from: 'assets/data/**/*'},
      {from: 'assets/fonts/**/*'},
      {from: 'assets/images/**/*'},
      {from: 'assets/videos/**/*'},
      {from: 'config/nwjs-package.json', to: 'package.json'},
      {from: 'login/**'},
      {from: 'assets/favicon.ico'}
    ])
  ]
});
