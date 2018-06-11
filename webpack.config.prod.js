const path = require('path');

module.exports = {
  entry: './src/dropdown/index.jsx',
  mode: 'production',
  output: {
    filename: 'dropdown.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'dropdown',
    libraryTarget: 'umd',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.js|jsx/,
        include: path.resolve(__dirname, 'src'),
        use: 'babel-loader',
      }, {
        test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader',
        ],
      },
    ],
  },
};
