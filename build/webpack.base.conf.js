// webpack公用打包配置
const config = require('../config').common
const utils = require('./utils')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const publicPath = config.publicPath || '/'
const outputUrl = config.outputUrl || utils.resolve('./dist')
const entryJs = utils.getEntry('./src/*.js')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  entry: entryJs,
  output: {
    filename: 'js/[name].[hash].js',
    path: outputUrl,
    publicPath: publicPath
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          outputPath: 'assets/',
          publicPath: 'assets/'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
        options: {
          limit: 10000,
          outputPath: 'assets/',
          publicPath: 'assets/'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.vue', '.json']
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'Production',
      inject: 'body',
      hash: false,
      template: utils.resolve('/public/index.html'),
      filename: 'index.html'
    }),

    new VueLoaderPlugin()
  ]
}
