import { Configuration } from 'webpack';

import { PATHS } from './Paths';

const config: Configuration = {
  mode: 'development',
  entry: {
    'test.bundle': `${PATHS.buildBrowser}/test/index.browser.js`,
  },
  node: {
    fs: 'empty',
  },
  output: {
    path: PATHS.buildBrowser,
    filename: '[name].js',
  },
};

export { config as default };
