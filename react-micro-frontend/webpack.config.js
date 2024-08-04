
// const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const path = require('path');
module.exports = {
 entry: './src/index.js',
 mode: 'development',
 devServer: {
   static: path.join(__dirname, 'dist'),
   port: 3001,
   headers: {
    'Access-Control-Allow-Origin': '*',
  },
 },
 output: {
   publicPath: '/',
 },
 module: {
   rules: [
     {
       test: /\.jsx?$/,
       loader: 'babel-loader',
       exclude: /node_modules/,
       options: {
         presets: ['@babel/preset-react'],
       },
     },
   ],
 },
 plugins: [
  //  new HtmlWebpackPlugin({
  //    template: './public/index.html',
  //  }),
   new ModuleFederationPlugin({
     name: 'remoteApp',
     filename: 'remoteEntry.js',
     exposes: {
       './MicroFrontend': './src/MicroFrontend',
     },
     shared:{
       react:{
         eager:true,
         singleton:true,
         requiredVersion:"^18.3.1"
       },
       'react-dom':{
        eager:true,
        singleton:true,
        requiredVersion:"^18.3.1"
      }
     }
   }),
 ],
};