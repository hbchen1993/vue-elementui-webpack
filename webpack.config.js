const resolve = require('path').resolve
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const url = require('url')
const publicPath = ''

module.exports = (options = {}) => ({
  entry: {
    // vendor: './src/vendor',
    index: './src/main.js'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: options.dev ? '[name].js' : '[name].js?[chunkhash]',
    chunkFilename: '[id].js?[chunkhash]',
    publicPath: options.dev ? '/assets/' : publicPath
  },
  module: {
    rules: [{
      test: /\.vue$/,
      use: ['vue-loader']
    },
    {
      test: /\.js$/,
      use: ['babel-loader'],
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'postcss-loader', 'less-loader']
    },
    // {
    //   test: /.less$/,
    //   loader: 'style-loader!css-loader!less-loader'
    // },
    {
      test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000
        }
      }]
    }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      favicon: resolve('./static/favicon.ico')
    })
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      'vue$': 'vue/dist/vue.js',
      '~': resolve(__dirname, 'src')
    },
    extensions: ['.js', '.vue', '.json', '.css']
  },
  devServer: {
    host: '127.0.0.1',
    port: 8012,
    proxy: {
      '/api/': {
        target: 'http://127.0.0.1:8080/psmp-web/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        },
        onProxyRes: function (proxyRes) {
          var cookies = proxyRes.headers['set-cookie']
          var cookieRegex = /Path=\/psmp-web\//i
          // 修改cookie Path
          if (cookies) {
            var newCookie = cookies.map(function (cookie) {
              if (cookieRegex.test(cookie)) {
                return cookie.replace(cookieRegex, 'Path=/api')
              }
              return cookie
            })
            // 修改cookie path
            delete proxyRes.headers['set-cookie']
            proxyRes.headers['set-cookie'] = newCookie
          }
        }
      }
    },
    historyApiFallback: {
      index: url.parse(options.dev ? '/assets/' : publicPath).pathname
    }
  },
  devtool: options.dev ? '#eval-source-map' : '#source-map'
})
