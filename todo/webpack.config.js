const path = require('path');


module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },


  module: {
    rules: [

      // Загрузка и компиляция js|jsx кода babel
      { 
        test: /\.(js|jsx)$/, 
        exclude: /node_modules/,
        loader: 'babel-loader',
      },

      // Загрузка файлов (в данном случае изображения)
     {
       test: /\.(png|jpg|jpeg|gif|ico)$/,
       use: [{
          loader: 'file-loader',
          options: {
            outputPath: 'img'
          }
        }]
      },

      
    ]
  },

  plugins: [


  ]
};