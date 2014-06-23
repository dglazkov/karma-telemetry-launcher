(function() {

window.__karma__.start = function() {
  var karma = window.__karma__;
  karma.info({ total: 1 });
  var result = {
    id: '',
    description: 'telemetry description',
    success: true,
    // FIXME: Use real duration
    time: 0,
  };
  karma.result(result);
  document.dispatchEvent(new Event('telemetry-done'));
  karma.complete();
}

})();