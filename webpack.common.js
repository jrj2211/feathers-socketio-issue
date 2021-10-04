const webpack = require('webpack');
const path = require('path');

// Plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'app', 'index.js'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/template.html',
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js/,
        resolve: {
          fullySpecified: false
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules(\/|\\)(?!(@feathersjs|debug))/,
        loader: 'babel-loader'
      },
      {
        test: /\.js$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, './app/'), path.resolve('./node_modules')],
  },
};
