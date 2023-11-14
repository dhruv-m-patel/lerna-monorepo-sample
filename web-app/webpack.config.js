const path = require('path');
const { getWebpackConfig } = require('@dhruv-m-patel/web-app');
const { loadableTransformer } = require('loadable-ts-transformer');
const nodeExternals = require('webpack-node-externals');

module.exports = () => {
  const webpackConfig = getWebpackConfig(process.env.NODE_ENV, path.resolve(__dirname));

  webpackConfig.module.rules[1] = {
    ...webpackConfig.module.rules[1],
    options: {
      ...webpackConfig.module.rules[1].options,
      transpileOnly: true,
      getCustomTransformers: () => ({ before: [loadableTransformer] }),
    },
  };

  webpackConfig.externals = nodeExternals({
    allowlist: [
      /^@loadable\/component$/,
      /^react$/,
      /^react-dom$/,
      /^loadable-ts-transformer$/,
    ],
  });

  return {
    ...webpackConfig,
  };
};
