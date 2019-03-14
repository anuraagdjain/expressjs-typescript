const path = require('path');
const nodeExternals = require('webpack-node-externals');
const WebpackShellPlugin = require('webpack-shell-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: `./server.ts`,
  target: 'node',
  mode: 'production',
  node: {
    __filename: false,
    __dirname: false
  },
  externals: [nodeExternals()],
  watch: process.env.NODE_ENV === 'development',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        include: __dirname,
        loader: 'ts-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new WebpackShellPlugin({
      onBuildEnd: ['yarn run:dev']
    })
  ]
};
