module.exports = {
  entry: './app.jsx',
  output: {
    filename: './dist/scripts/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ],
  },
  devtool: 'source-map'
};