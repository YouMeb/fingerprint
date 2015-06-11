'use strict';

var MetaExtractor = require('../meta-extractor');

module.exports = MetaExtractor('cpuClass', function () {
  return navigator.cpuClass;
});
