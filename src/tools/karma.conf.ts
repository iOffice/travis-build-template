import { Config } from 'karma';
import { executablePath } from 'puppeteer';

import { PATHS } from './Paths';

const TEST_DEV = process.env['TEST_DEV'];
process.env.CHROME_BIN = executablePath();

// https://github.com/mlex/karma-spec-reporter
const specReporterOptions = {
  suppressErrorSummary: true, // do not print error summary
  suppressFailed: false, // do not print information about failed tests
  suppressPassed: false, // do not print information about passed tests
  suppressSkipped: true, // do not print information about skipped tests
  showSpecTiming: false, // print the time elapsed for each spec
};

function karmaConfig(config: Config): void {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [`${PATHS.buildBrowser}/test.bundle.js`],
    reporters: ['spec'],
    plugins: [
      'karma-mocha',
      'karma-chai',
      'karma-spec-reporter',
      'karma-chrome-launcher',
    ],
    port: 9876, // karma web server port
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadlessNoSandbox'],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    autoWatch: !!TEST_DEV,
    singleRun: !TEST_DEV, // Karma captures browsers, runs the tests and exits
    concurrency: 1,
    ...{
      specReporter: specReporterOptions,
    },
  });
}

export { karmaConfig as default };
