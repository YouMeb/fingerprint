'use strict';

var MetaExtractor = require('../meta-extractor');

module.exports = MetaExtractor('colorDepth', function () {
  return navigator.colorDepth;
});
