function init(files) {
  var path = __dirname + '/runner.js';
  files.unshift({
    pattern: path,
    included: true,
    served: true,
    watched: false
  })
}

init.$inject = ['config.files'];

module.exports = {
  'framework:telemetry': ['factory', init]
}