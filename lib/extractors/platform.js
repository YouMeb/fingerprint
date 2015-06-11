'use strict';

var MetaExtractor = require('../meta-extractor');

module.exports = MetaExtractor('platform', function () {
  return navigator.platform;
});
