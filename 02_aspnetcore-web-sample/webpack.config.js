const path = require('path');

module.exports = {
  entry: { 'main-server': './ClientApp/boot-server.ts' },
  resolve: { 
      modulesDirectories:['node_modules', 'src'],
        extensions: ['', '.js', '.ts' ]
  },
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'ts-loader' }
    ]    
  },
  target: 'node',
  devtool: 'inline-source-map',
  output:  {
    path: path.join(__dirname, './clientApp/dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs'
  }
};