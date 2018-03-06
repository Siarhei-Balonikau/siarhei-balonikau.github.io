const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const config = {
  entry: [
    __dirname + "/server/index.js"
  ],
  output: {
    path: __dirname + "/",
    filename: 'server.bundle.js',
  },
  target: "node",
  module: {
    rules: [
      {test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
      {test: /\.(s?css|less)$/, loader: 'ignore-loader'}
    ]
  },
  externals: [nodeExternals()],
  plugins: [
    new webpack.ProvidePlugin({
      "fetch": "isomorphic-fetch"
    })
  ],
};

module.exports = config;