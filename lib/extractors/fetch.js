'use strict';

var MetaExtractor = require('../meta-extractor');

module.exports = MetaExtractor('fetch', function () {
  return Boolean(navigator.fetch) | 0;
});
