'use strict';

var MetaExtractor = require('../meta-extractor');

module.exports = MetaExtractor('localStorage', function () {
  return Boolean(window.localStorage) | 0;
});
