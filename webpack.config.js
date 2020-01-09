const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Переменное окружение - дев/прод в node.js
const NODE_ENV = process.env.NODE_ENV || 'development';

const PATHS = {
  src: path.join(__dirname, 'src')
}

// Pages const  for HtmlWebpackPlugin
//const PAGES_DIR = `${PATHS.src}/pug/pages/`;
//const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));

module.exports = {
  externals: {
    paths: PATHS
  },
  mode: 'development',
  entry: {
    app: PATHS.src
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].bundle.js",
    library: "[name]"
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    contentBase: './dist'
  },
  
  devtool: NODE_ENV == 'development' ? 'inline-source-map' : null,
  
  watch: NODE_ENV == 'development',
  watchOptions: {
    aggregateTimeout: 100
  },

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV), // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: './src/page/index.pug'
    })
  ]
}
