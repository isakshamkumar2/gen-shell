const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const webpack = require('webpack');
const deps = require('./package.json').dependencies;
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  stats: {
    errorDetails: true,
    children: true,
  },
  devServer: {
    // path: '/',
    port: 3000,

    historyApiFallback: {
      index: '/index.html',
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },

  plugins: [
    new CleanWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProgressPlugin({
      activeModules: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new ModuleFederationPlugin({
      name: 'Host',
      filename: 'remoteEntry.js',
      remotes: {
        SubappOne: 'SubappOne@http://localhost:3001/remoteEntry.js',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true },
      },
      // shared: {
      //   ...deps,
      //   react: { singleton: true, eager: true },
      //   "react-dom": {
      //     singleton: true,
      //     eager: true,

      //   },
      //   "react-router-dom": {
      //     singleton: true,
      //     eager: true,
      //   },
      // },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: path.resolve(__dirname, 'tsconfig.json'),
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts'],
  },
};
