'use strict';

var MetaExtractor = require('../meta-extractor');

module.exports = MetaExtractor('userAgent', function () {
  return navigator.userAgent;
});
