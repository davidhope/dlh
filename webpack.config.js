var path = require('path')
var webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin");

/*
const extractSass = new ExtractTextPlugin({
    filename: "/assets/js/styles.css",
    disable: process.env.NODE_ENV === "development"
});
*/
const extractSass = new ExtractTextPlugin("./assets/css/styles.css");

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './assets/js/'),
    publicPath: '/assets/js/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.scss$/,
        //loaders: ["style-loader", "css-loader", "sass-loader"]
        use: extractSass.extract({
            use: [
              {loader: "css-loader"}, 
              {
                loader: "sass-loader",
                options: {
                    includePaths: path.resolve(__dirname, "sass")
                }
              }
            ],
            // use style-loader in development
            fallback: "style-loader"
        })
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'//,
      //'sass': path.resolve(__dirname, "./sass")
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map',
  /*sassLoader: {
    data: '@import "main-one-page";',
    includePaths: [
      path.resolve(__dirname, "./sass")
    ]
  }*/
  plugins: [extractSass]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
