const path = require('path');

module.exports = (env) => {
  return {
    mode: env.mode ?? 'development',
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: '[name].[contenthash].js',
      clean: true
    },
    devServer: {
      port: 5000,
      open: true,
      hot: true
    }    
  }
}