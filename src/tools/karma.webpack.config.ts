import { Configuration } from 'webpack';

import { PATHS } from './Paths';

const TEST_DEV = process.env['TEST_DEV'];

/**
 * Configuration used to create the testing bundle with webpack in watch mode.
 */
const config: Configuration = {
  mode: 'development',
  entry: {
    'test.bundle': TEST_DEV
      ? `${PATHS.test}/index.browser.ts`
      : `${PATHS.buildBrowser}/test/index.browser.js`,
  },
  node: {
    fs: 'empty',
  },
  stats: {
    warnings: false,
    warningsFilter: /System.import/,
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: [PATHS.nodeModules],
  },
  output: {
    path: PATHS.buildBrowser,
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              silent: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
};

export { config as default };
