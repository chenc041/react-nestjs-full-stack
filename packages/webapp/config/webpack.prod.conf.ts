import webpack, { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import { config } from './webpack.common';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const plugins: Configuration['plugins'] = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
];

if (process.env.ANALYZER) {
  plugins.push(new BundleAnalyzerPlugin());
}

export default merge(config, {
  mode: 'production',
  devtool: false,
  output: {
    filename: '[name].[contenthash].js',
    publicPath: './',
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
    minimize: true,
    minimizer: [
      new TerserPlugin({
        parallel: true,
      }),
    ],
  },
  stats: {
    modules: false,
    children: false,
    chunks: false,
    warnings: false,
    performance: false,
    chunkModules: false,
  },
  plugins,
});
