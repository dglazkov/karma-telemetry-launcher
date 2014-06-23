#!/bin/bash
# FIXME: Shell scripts are silly here, just use Python or JS.
# FIXME: Figure out how to fish the path to chrome:tracing file out of test.log
# FIXME: using URL should assume use-live-sites
# FIXME All these arguments (measurement, browser) should be customizable
$CR_PATH/src/tools/perf/run_measurement --browser=release until_done $1 --use-live-sites --output=telemetry-results.html --profiler=trace &> test.log