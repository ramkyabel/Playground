const path = require ('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '*','.css', '.scss']
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
      },
      {
        test: /\.(gif|png|woff|woff2|eot|ttf|svg|otf)$/,
        loader: [
          'url-loader?name=[name].[ext]',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.(css|scss)$/,
         use: [
             'style-loader',
             {
               loader: 'css-loader',
               options: {
                 modules: true,
                 minimize: true,
                 camelCase: true,
                 localIdentName: '__[local]--[hash:base64:5]'
               }
             },
            'sass-loader'
         ]
       },
     ]
  },
  plugins: [
    new ExtractTextPlugin({filename: 'styles.css'}),
    HtmlWebpackPluginConfig
  ]
};
