const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",



  module: {
    rules: [
      // Babel js
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },

      // Loading images
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        use: [
          { 
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name]-[sha1:hash:7].[ext]'
            } 
          }
        ]
      },

      // Loading fonts
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [
          { 
            loader: 'file-loader',
            options: {
              outputPath: 'fonts',
              name: '[name].[ext]'
            } 
          }
        ]
      },

      // Loading css
      {
        test: /\.(css)$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
      },

      // Loading SCSS|SASS
      {
        test: /\.(s[ac]ss)$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 
        {
          loader: 'sass-loader',
          options: {}}
      ]
         
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      title: "React Title",
      buildTime: new Date().toString()
    }),
    new MiniCssExtractPlugin({
      filename: 'main-[hash:8].css'
    })

  ],

  devServer: {
    open: true
  }



};