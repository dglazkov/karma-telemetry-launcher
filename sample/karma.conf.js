module.exports = function(config) {
  config.set({
    frameworks: ['telemetry'],
    files: [
      // put your files here.
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: [ 'Telemetry' ],
    captureTimeout: 50000,
    singleRun: true,
    plugins: [
      // FIXME: These will be real npm packages one day.
      require('./index.js'),
      require('./adapter.js')
    ]
  });
};
