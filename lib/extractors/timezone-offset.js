'use strict';

var MetaExtractor = require('../meta-extractor');

module.exports = MetaExtractor('timezoneOffset', function () {
  return (new Date()).getTimezoneOffset();
});
