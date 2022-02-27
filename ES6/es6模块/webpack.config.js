const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './app.js',
  output: {
    filename: './dist/main.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
  ]
}