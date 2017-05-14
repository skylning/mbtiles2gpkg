#!/usr/bin/env node
const meow = require('meow')
const mbtiles2geopackage = require('../')

const cli = meow(`
  Usage:
    $ mbtiles2geopackage <mbtiles> <geopackage>
  Options:
    --verbose         [false] Verbose output
  Examples:
    $ mbtiles2geopackage example.mbtiles example.gpkg
`, {
  alias: {v: 'verbose'},
  boolean: ['verbose']
})