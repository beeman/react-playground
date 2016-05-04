'use strict'
import webpack from 'webpack'

if (!process.env.FIREBASE_URL) {
  throw new Error('Set the FIREBASE_URL env variable to run or build this project')
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: './public/',
    filename: 'bundle.js',
    publicPath: '/',
  },
  devServer: {
    contentBase: './public',
    hot: true,
    inline: true,
    open: true,
    port: 3333,
    stats: {
      colors: true
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      }, {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss', 'sass']
      }, {
        test: /\.less$/,
        loaders: ['style', 'css', 'less']
      }, {
        test: /\.woff$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
      }, {
        test: /\.woff2$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
      }, {
        test: /\.(eot|ttf|svg|gif|png)$/,
        loader: "file-loader"
      },
    ],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      FIREBASE_URL: JSON.stringify(process.env.FIREBASE_URL)
    }),
    new webpack.HotModuleReplacementPlugin(),
  ]
}