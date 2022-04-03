const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   stats: {
         children: true
       },
   devServer: {
      port: 8001
   },
   module: {
      rules: [
         {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
           exclude: /(node_modules|bower_components)/,
           use: {
              //['babel-loader', 'style-loader', 'css-loader', 'sass-loader'],
             loader: 'babel-loader',
             options: {
               presets: ['@babel/preset-env']
             }
           }
         },
         {
            test: /\.(scss|css)$/,
            use: ['style-loader', 'css-loader']
        },
         {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
        }
       ]
      }, 
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
      ]
}