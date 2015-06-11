'use strict';

var fontDetect = require('YouMeb/font-detect');
var MetaExtractor = require('../../meta-extractor');
var fontList = require('./list.json');

module.exports = MetaExtractor('fontList', function () {
  return fontList.map(detect);
});

function detect(fontName) {
  return fontDetect(fontName) | 0;
}
