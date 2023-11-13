const path = require('path');
const { getWebpackConfig } = require('@dhruv-m-patel/web-app');

module.exports = () => {
  const webpackConfig = getWebpackConfig(process.env.NODE_ENV, path.resolve(__dirname));

  return {
    ...webpackConfig,
  };
};
