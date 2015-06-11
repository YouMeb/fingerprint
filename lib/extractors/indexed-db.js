'use strict';

var MetaExtractor = require('../meta-extractor');

module.exports = MetaExtractor('indexedDB', function () {
  return Boolean(window.indexedDB) | 0;
});
