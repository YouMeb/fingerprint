'use strict';

var map = require('component/map');
var fontDetect = require('YouMeb/font-detect');
var MetaExtractor = require('../../meta-extractor');
var fontList = require('./list.json');

module.exports = MetaExtractor('fontList', function () {
  return map(fontList, detect);
});

function detect(fontName) {
  return fontDetect(fontName) | 0;
}
