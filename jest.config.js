const baseConfig = require('./jest.config');

module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'packages/**/*.{js,jsx,ts,tsx}',
    'services/**/*.{js,jsx,ts,tsx}',
    'apps/**/*.{js,jsx,ts,tsx}',
  ],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  projects: [
    '<rootDir>/packages/*/jest.config.js',
    '<rootDir>/services/*/jest.config.js',
    '<rootDir>/apps/*/jest.config.js',
  ],
  rootDir: __dirname,
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  verbose: true,
};
