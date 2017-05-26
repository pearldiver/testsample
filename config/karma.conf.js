module.exports = function(config) {
    var testWebpackConfig = require('./webpack.test.js')({ env: 'test' });
    var reportOutput = config.reportOutput ? config.reportOutput : "./coverage";
    var covJson = reportOutput + '/coverage.json';
    var covHtml = reportOutput + '/html';
    var configuration = {

        // base path that will be used to resolve all patterns (e.g. files, exclude)
        basePath: '',

        /*
         * Frameworks to use
         *
         * available frameworks: https://npmjs.org/browse/keyword/karma-adapter
         */
        frameworks: ['jasmine', 'karma-typescript'],

        // list of files to exclude
        exclude: [],

        /*
         * list of files / patterns to load in the browser
         *
         * we are building the test environment in ./spec-bundle.js
         */
        files: [{ pattern: './config/spec-bundle.js', watched: false }],

        /*
         * preprocess matching files before serving them to the browser
         * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
         */
        preprocessors: { './config/spec-bundle.js': ['coverage', 'webpack', 'sourcemap'] },

        // Webpack Config at ./webpack.test.js
        webpack: testWebpackConfig,

        coverageReporter: {
            reporters: [
                { type: 'in-memory' },
                { type: 'cobertura', dir: reportOutput, subdir: 'cobertura', file: 'cobertura-coverage.xml' },
                { type: 'lcovonly', dir: reportOutput, subdir: 'coverageReporter', file: 'coverage.lcov' }
            ]
        },
        sonarQubeUnitReporter: {
            sonarQubeVersion: 'LATEST',
            outputDir: reportOutput + '/sonarQubeUnitReporter/',
            outputFile: 'sonar_report.xml',
            useBrowserName: false
        },
        tfsReporter: {
            outputDir: reportOutput + '/tfsReporter/',
            outputFile: 'testresult.trx'
        },
        remapCoverageReporter: {
            'text': null,
            'text-summary': null,
            json: covJson,
            html: covHtml
        },

        // Webpack please don't spam the console when running in karma!
        webpackMiddleware: { stats: 'errors-only' },

        /*
         * test results reporter to use
         *
         * possible values: 'dots', 'progress'
         * available reporters: https://npmjs.org/browse/keyword/karma-reporter
         */
        reporters: ['mocha', 'coverage', 'remap-coverage', 'tfs', 'sonarqubeUnit'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        /*
         * level of logging
         * possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
         */
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // For collecting console log, but now it log twice for every message.
        // browserConsoleLogOptions: {
        //   level: 'log',
        //   format: '%b %T: %m'
        //   //,
        //   //terminal: true
        // },

        /*
         * start these browsers
         * available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
         */
        browsers: [
            'PhantomJS'
        ],

        /*
         * Continuous Integration mode
         * if true, Karma captures browsers, runs the tests and exits
         */
        singleRun: true,

        browserNoActivityTimeout: 240000
    };

    config.set(configuration);
};