'use strict';

var MetaExtractor = require('../meta-extractor');

module.exports = MetaExtractor('css-properties', function () {
  return window.getComputedStyle
    && getAllCSSPropertyNames();
});

function getAllCSSPropertyNames() {
  return Object.keys(window.getComputedStyle(document.body));
}
