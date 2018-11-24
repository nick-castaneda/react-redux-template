const webpack = require('webpack'); // eslint-disable-line
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // eslint-disable-line
const autoprefixer = require('autoprefixer'); // eslint-disable-line
const postCssNested = require('postcss-nested'); // eslint-disable-line

/**
 * This is the Webpack configuration file for local development. It contains
 * local-specific configuration such as the React Hot Loader, as well as:
 *
 * - The entry point of the application
 * - Where the output file should be
 * - Which loaders to use on what files to properly transpile the source
 *
 * For more information, see: http://webpack.github.io/docs/configuration.html
 */
module.exports = {

  // Efficiently evaluate modules with source maps
  devtool: 'eval',
  mode: 'development',

  // Set entry point to ./src/main and include necessary files for hot load
  entry: [
    'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server',
    `${__dirname}/src/main`,
  ],

  // This will not actually create a bundle.js file in ./build. It is used
  // by the dev server for dynamic hot loading.
  output: {
    path: `${__dirname}/build/`,
    filename: 'app.js',
    publicPath: 'http://localhost:9090/build/',
  },

  // Necessary plugins for hot load
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[id].css',
    }),
    // Additional plugins for CSS post processing using postcss-loader
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          autoprefixer, // Automatically include vendor prefixes
          postCssNested, // Enable nested rules, like in Sass
        ],
      },
    }),
  ],

  // Transform source code using Babel and React Hot Loader
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './build',
            },
          },
        ],
      },
    ],
  },

  // Automatically transform files with these extensions
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
};
