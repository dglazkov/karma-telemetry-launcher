karma-telemetry-launcher
===============

Karma + Telemetry = &lt;3

A quick sketch of how [Karma](http://karma-runner.github.io/0.12/index.html) and [Telemetry](http://www.chromium.org/developers/telemetry) could hang out together.

Relies on https://codereview.chromium.org/346783003.

Here, Karma views Telemetry as a type of browser. It simply launches Telemetry's ```run_measurement``` script and feeds it a URL of its server. The measurement used here in the sketch is a simplistic ```until_done```, whose job is to listen for a ```telemetry-done``` event and, when received, finish the measurement.

Even in this setup, the developer can now automate generating useful performance data, like [about:tracing](http://www.chromium.org/developers/how-tos/trace-event-profiling-tool) files.

It should be possible to adapt this sketch to run any measurement (provided some cooperation from Telemetry tooling).
