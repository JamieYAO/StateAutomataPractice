module.exports = {
  entry: './web/scenes/index.js',
  output: {
    path: './web/bin/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'] 
        }
      }
    ]
  }
};
