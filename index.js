var TelemetryBrowser = function(baseBrowserDecorator) {
  baseBrowserDecorator(this);

  this.name = 'Telemetry';

  this._getCommand = function() {
    var crPath = process.env.CR_PATH;
    if (!crPath)
      throw "CR_PATH environment variable is not defined. Please set it to point to your Chromium checkout and try again."

    return 'bin/run-telemetry.sh';
  };
};

TelemetryBrowser.$inject = ['baseBrowserDecorator'];

module.exports = {
  'launcher:Telemetry': ['type', TelemetryBrowser]
};