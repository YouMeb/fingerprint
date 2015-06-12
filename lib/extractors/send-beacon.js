'use strict';

var MetaExtractor = require('../meta-extractor');

module.exports = MetaExtractor('sendBeacon', function () {
  return Boolean(navigator.sendBeacon) | 0;
});
