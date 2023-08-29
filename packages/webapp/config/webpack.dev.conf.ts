import webpack from 'webpack';
import { merge } from 'webpack-merge';
import { config } from './webpack.common';
export default merge(config, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    hot: true,
    port: 'auto',
    open: true,
    client: {
      logging: 'info',
      progress: true,
    },
    historyApiFallback: true,
  },
  stats: {
    modules: false,
    errorDetails: true,
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
});
