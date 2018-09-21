var webpack = require('webpack')

module.exports = {
  entry: './entry.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {test: /\.css$/, loader: 'style-loader!css-loader'}
    ]
  },
  plugins:[
      new webpack.BannerPlugin('this file is created')
  ]
}