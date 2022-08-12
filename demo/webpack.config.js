const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
//Configuracion de entrada y salida del bundler
  entry : {
    bundle: './src/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
        { test: /\.css$/, use: ['style-loader', 'css-loader'] },
        { test: /\.jpg$/, use: "file-loader" },
        {
            test: /\.html$/i,
            loader: "html-loader",
        }
        
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack App',
      filename: 'index.html',
      template: './src/index.html'
    })
  ],
  //Servidor para crear un nuevo bundle con cada cambio
  devServer: {
    static: {
        directory: path.resolve(__dirname, 'dist')
    },
    port: 3000,
    open: true,
    hot: true,
  }
}