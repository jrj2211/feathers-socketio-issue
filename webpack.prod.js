const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[fullhash].js',
  },
  devtool: 'source-map',
});
