'use strict';

var MetaExtractor = require('../meta-extractor');

module.exports = MetaExtractor('language', function () {
  return navigator.languages
    && navigator.language;
});
