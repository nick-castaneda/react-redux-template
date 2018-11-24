const webpack = require('webpack'); // eslint-disable-line
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // eslint-disable-line
const autoprefixer = require('autoprefixer'); // eslint-disable-line
const postCssNested = require('postcss-nested'); // eslint-disable-line

/**
 * This is the Webpack configuration file for production.
 */
module.exports = {
  entry: './src/main',

  output: {
    path: `${__dirname}/build/`,
    filename: 'app.js',
  },

  plugins: [
    MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[id].css',
    }),
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.css$/, loaders: MiniCssExtractPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
    ],
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
  },

  postcss: [
    autoprefixer,
    postCssNested,
  ],
};
