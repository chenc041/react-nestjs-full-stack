import path from 'node:path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import 'webpack-dev-server';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import * as process from 'process';

export const config: webpack.Configuration = {
  entry: path.resolve(__dirname, '../src/index'),
  output: {
    path: path.resolve(__dirname, '../../api/client'),
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)/,
        use: [
          process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              esModule: false,
              modules: {
                localIdentName: '[name]__[local]__[contenthash:base64:5]',
              },
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
        exclude: /(global\.scss|node_modules)/,
      },
      {
        test: /global.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: false,
            },
          },
          'postcss-loader',
          'sass-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 15000,
              name: './assets/[name].[contenthash:4].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx|jsx|js)$/,
        use: [
          {
            loader: 'thread-loader',
          },
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx',
              target: 'es2015',
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '~': path.resolve('src'),
    },
    fallback: {
      process: require.resolve('process/browser'),
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash:5].css',
    }),
    new webpack.ProgressPlugin({
      activeModules: true,
      entries: true,
      modules: true,
      profile: true,
      dependencies: true,
      dependenciesCount: 10000,
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'hello-webpack',
      template: path.resolve(__dirname, '../index.html'),
    }),
  ],
};
