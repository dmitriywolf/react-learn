const path = require('path');
const HtmlWepackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },


  module: {
    rules: [
      // Babel-loader
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      // Loading Images
     {
       test: /\.(png|jpg|jpeg|gif|ico)$/,
       use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'img',
            name: '[name]-[sha1:hash:7].[ext]'
          }
        }]
      },
      // Loading Fonts
      {
        test: /\.(ttf|otf|eot|woff|woff2)$/,
        use: [{
           loader: 'file-loader',
           options: {
             outputPath: 'fonts',
             name: '[name].[ext]'
           }
         }]
       },

       // Loading CSS
       {
        test: /\.(css)$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
       },

       // Loading SCSS/SASS
       {
        test: /\.(s[ca]ss)$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
       }
    ]
  },

  plugins: [
    new HtmlWepackPlugin({
      template: 'public/index.html'
    }),

    new MiniCssExtractPlugin({
      filename: 'main-[hash:8].css'
    })
      
  ],

  devServer: {
    open: true   // open in browser
  }
};