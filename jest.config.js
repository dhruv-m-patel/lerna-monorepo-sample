const baseConfig = require('./jest.config');

module.exports = {
  clearMocks: true,
  collectCoverageFrom: [
    'service/**/*.{js,jsx,ts,tsx}',
    'web-app/**/*.{js,jsx,ts,tsx}',
  ],
  coverageReporters: ['json', 'text', 'lcov', 'clover'],
  moduleDirectories: ['node_modules'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  projects: [
    '<rootDir>/service/jest.config.js',
    '<rootDir>/web-app/jest.config.js',
  ],
  rootDir: __dirname,
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  verbose: true,
};
