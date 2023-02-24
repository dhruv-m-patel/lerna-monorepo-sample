const path = require('path');
const JestConfig = require('../jest.config');

const { projects, ...baseConfig } = JestConfig;

module.exports = {
  ...baseConfig,
  displayName: 'node-service',
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['/node_modules/', path.join(__dirname, 'build')],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testEnvironment: 'node',
  testMatch: [path.join(__dirname, 'tests/**/*.test.ts')],
  verbose: true,
};
