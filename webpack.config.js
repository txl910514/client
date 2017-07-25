const path      = require('path'),
      webpack   = require('webpack'),
      baseSrc   = path.resolve(__dirname, './'),
      configure = {
          devtool  : 'source-map',
          entry    : __dirname + '/app/index.js',
          output   : {
              path    : baseSrc + '/build',
              filename: 'bundle.js',
          },
          module   : {
              loaders: [
                  {
                      test   : /\.js[x]?$/,
                      loader : 'babel-loader',
                      exclude: /node_modules/,
                      query  : {
                          presets: ['es2015', 'react']
                      }
                  },
                  {
                      test  : /\.json$/,
                      loader: 'json'
                  },
                  {
                      test  : /\.css$/,
                      loader: 'css-loader'
                  },
                  {
                      test  : /\.scss$/,
                      loader: 'style-loader!css-loader!sass-loader'
                  },
                  {
                      test  : /\.json$/,
                      loader: 'json-loader'
                  },
                  {
                      test  : /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                      loader: 'url-loader?limit=10000'
                  }
              ]
          },
          devServer: {
              port              : 9999,
              hot               : true,
              historyApiFallback: true
          },
          plugins  : [
              new webpack.HotModuleReplacementPlugin()
          ],
    
      };
module.exports = configure;