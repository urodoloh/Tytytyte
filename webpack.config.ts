const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin") 

module.exports = { 
  entry: "./index.tsx",
  devtool: "source-map",
  resolve: { 
    extensions: [".ts", ".tsx", ".js", '.jsx', ".json"]
  },
  output: { 
    path: path.join(__dirname, "/dist"), 
    filename: "index_bundle.js" 
  }, 
  stats: {
         children: true
  },
  module: { 
    rules: [ 
      {  
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        loader: "ts-loader"  
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
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"  // Specify the HTML template to use
    })
  ]
};



// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//    entry: './main.js',
//    output: {
//       path: path.join(__dirname, '/bundle'),
//       filename: 'index_bundle.js'
//    },
//    stats: {
//          children: true
//        },
//    devServer: {
//       port: 8001
//    },
//    module: {
//       rules: [
//          {
//             test: /\.(js|mjs|jsx|ts|tsx)$/,
//            exclude: /(node_modules|bower_components)/,
//            use: {
//               //['babel-loader', 'style-loader', 'css-loader', 'sass-loader'],
//              loader: 'babel-loader',
//              options: {
//                presets: ['@babel/preset-env']
//              }
//            }
//          },

//          {
//             test: /\.(scss|css)$/,
//             use: ['style-loader', 'css-loader']
//         },

//          {
//             test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
//             type: 'asset/resource',
//         }
//        ]
//       }, 
//    resolve: {
//       extensions: ['.tsx', '.ts', '.js'],
//    },
      
//    plugins:[
//       new HtmlWebpackPlugin({
//          template: './index.html'
//       })
//       ]
// }



// "@babel/preset-env": "^7.16.11",
// "@babel/preset-react": "^7.16.7",
// "babel-core": "^6.26.3",
// "babel-loader": "^8.2.4",
// "babel-preset-env": "^1.7.0",