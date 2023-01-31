const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  mode: 'development', // 'production' | 'development'
  output: {
    path: path.resolve(__dirname, 'dist'), // path to the directory where index.html will be placed
    filename: 'bundle.js', // name of the bundle file
    clean: true, // remove the dist directory before each build
  },
  devServer: {
    hot: true, // enable HMR ( Hot Module Reload ) on the server
    historyApiFallback: true, // fallback to /index.html for Single Page Applications
    static: {
      directory: path.join(__dirname, 'public'), // directory where to serve static assets
    },
    compress: true, // enable gzip compression
    port: 3001, // port to run dev-server
    open: true, // open the app in default browser
    liveReload: true, // enable live reloading
  },
  resolve: {
    modules: [path.join(__dirname, 'src'), 'node_modules'], // directories where to look for modules
    extensions: ['.css', '.js', '.jsx', '.scss'], // extensions that are used
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // check for js or jsx files
        exclude: /node_modules/, // exclude node_modules directory
        use: {
          loader: 'babel-loader', // use babel-loader for js and jsx files
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'], // use @babel/preset-env for env setup and @babel/preset-react for React
          },
        },
      },
      {
        test: /\.css$/, // check for css files
        use: ['style-loader', 'css-loader'], // use style-loader and css-loader
      },
      {
        test: /\.s[ac]ss$/i, // check for sass or scss files
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
          { 
            loader: 'sass-resources-loader', 
            options: { 
              resources: [
                './src/assets/sass/mixins/_breakpoints.scss'
              ] 
            }
          }
        ], // use style-loader, css-loader and sass-loader
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 400 * 1024, // 400kb
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
};
