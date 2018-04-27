const webpackConfig = require('./build/webpack.dev.conf');
module.exports = function (config) {
    config.set({
        frameworks: ['mocha'],

        files: [
            'src/**/*.spec.js'
        ],

        preprocessors: {
            '**/*.spec.js': ['webpack', 'sourcemap']
        },

        webpack: webpackConfig,

        reporters: ['spec'],

        browsers: ['Chrome']
    })
};
