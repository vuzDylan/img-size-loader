var path = require('path');

module.exports = {
  entry: path.join(__dirname, 'test.js'),
  output: {
    path: path.join(__dirname, 'dist', 'assets'),
    filename: '[chunkhash].js',
    publicPath: '/assets/',
  },
  resolveLoader: {
    alias: {
      'img-size-loader': path.join(__dirname, '../index.js'),
    }
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        loader: 'img-size-loader?limit=8192',
      }
    ]
  }
}
