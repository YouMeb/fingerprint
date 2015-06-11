'use strict';

var MetaExtractor = require('../meta-extractor');

module.exports = MetaExtractor('doNotTrack', function () {
  return navigator.doNotTrack;
});
