const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './app.js',
  },
  output: {
    path: path.resolve(__dirname, './dist/assets/'),
    filename: '[name].bundle.js',
    publicPath: '/assets/',
  },
  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './src'),  // New
    //watchContentBase: true, // for watching all the files in contentBase
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] },
        }],
      },
      
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },

      {
        test: /\.html$/,
        loader: 'raw-loader'
      },
    ],
  },
};