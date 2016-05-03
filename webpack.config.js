var webpack = require('webpack')
module.exports = {
  entry: './src/main.js',
  output: {
    path: './public/',
    filename: 'bundle.js',
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3333,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      FIREBASE_URL: JSON.stringify(process.env.FIREBASE_URL)
    })
  ]
}