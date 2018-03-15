var path = require('path');

module.exports = {
    entry: {
      'example/bundle': './src/example.js',
      pwd_toggle: './src/lib/pwd_toggle.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },
            {
              test: /\.css$/,
              use: [ 'style-loader', 'css-loader' ]
            },
            {
              test: /\.(png|jpg|gif)$/,
              use: {
                loader: 'file-loader',
                options: {
                  name: 'example/images/[name].[ext]',
                  publicPath: 'dist/'
                }
              }
            }
        ]
    },
};
