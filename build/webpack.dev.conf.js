// webpack开发环境打包配置
const webpack = require('webpack')
const merge = require('webpack-merge')
const base = require('./webpack.base.conf')
const config = require('../config').dev
const contentBase = config.contentBase || '../dist'
const proxy = config.proxy || {}

module.exports = merge(base, {
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    contentBase: contentBase,
    host: 'localhost',
    compress: true,
    hot: true,
    hotOnly: true,
    proxy: proxy
  },

  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/,
        use: ['vue-style-loader', 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.env
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
