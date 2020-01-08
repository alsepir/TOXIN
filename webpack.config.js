const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Переменное окружение - дев/прод в node.js
const NODE_ENV = process.env.NODE_ENV || 'development';

// Pages const  for HtmlWebpackPlugin
//const PAGES_DIR = `${PATHS.src}/pug/pages/`;
//const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));

module.exports = {
  mode: 'development',
  // исключить дублирование директории вводом перемнной контекста
  context:  path.resolve(__dirname, 'common'),
  entry: {
    home: './home',
    about: './about'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js",
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

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV), // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: './src/page/index.pug'
    })
  ],

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
      }
    ]
  }
}
