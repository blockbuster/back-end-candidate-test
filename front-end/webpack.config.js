const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env = 'development') => {
  const isProd = env === 'production';
  const config = {
    entry: './src/index.jsx',
    mode: isProd ? 'production' : 'development',
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    devtool: isProd ? false : 'source-map',
    resolve: {
      extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
    },
    module: {
      rules: [
        {
          enforce: 'pre',
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'eslint-loader',
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.(graphql|gql)$/,
          exclude: /node_modules/,
          loader: 'graphql-tag/loader',
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.ejs') }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      historyApiFallback: true,
    },
  };
  return config;
};
