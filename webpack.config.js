const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

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
    index: './src/index.js',          //app: PATHS.src
    ui_kit: './src/ui-kit.js'
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
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          { loader: MiniCssExtractPlugin.loader },
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      },
    ]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV), // use 'development' unless process.env.NODE_ENV is defined
      DEBUG: false
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: './src/page/index.pug'
    }),
    new HtmlWebpackPlugin({
      filename: "ui-kit.html",
      template: './src/page/ui-kit.pug'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
  ]
}
