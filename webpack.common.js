const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: {
		index: ["babel-polyfill", "./src/components/app/app.js"]
	}, 
  
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/'
  },
  
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  
  devServer: {
    hot: true
  }
};