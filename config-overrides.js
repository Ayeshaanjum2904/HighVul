const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = function override(config) {
  const newConfig = { ...config };

  newConfig.resolve.fallback = {
    ...newConfig.resolve.fallback,
    crypto: require.resolve('crypto-browserify'),
    stream: require.resolve('stream-browserify'),
    vm: require.resolve('vm-browserify'),
  };

  newConfig.plugins = (newConfig.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
    new ESLintPlugin({ useEslintrc: true, emitWarning: true, failOnError: false }),
  ]);

  newConfig.module.rules.push({
    test: /\.m?js$/,
    resolve: {
      fullySpecified: false,
    },
  });

  return newConfig;
};
