const path = require('path');
const JestConfig = require('../../jest.config');

const { projects, ...baseConfig } = JestConfig;

module.exports = {
  ...baseConfig,
  displayName: 'express-app',
  clearMocks: true,
  coveragePathIgnorePatterns: ['/node_modules/', path.join(__dirname, 'build')],
  testEnvironment: 'node',
  testMatch: [path.join(__dirname, 'tests/**/*.test.ts')],
  verbose: true,
  roots: [path.join(__dirname, './src'), path.join(__dirname, './tests')],
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^src(.*)$': path.resolve(__dirname, 'src$1'),
  },
};
