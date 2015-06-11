'use strict';

var MetaExtractor = require('../meta-extractor');
var map = Array.prototype.map;

module.exports = MetaExtractor('plugins', function () {
  return map.call(navigator.plugins || [], getPluginKey);
});

function getPluginKey(plugin) {
  return map.call(plugin, getMimeTypes)
    .map(function (mimeTypes) {
      return [
        plugin.name,
        plugin.description,
        mimeTypes
      ].join('#')
    })
    .join(':');
}

function getMimeTypes(mimeType) {
  return [
    mimeType.type,
    mimeType.suffixes
  ].join('~');
}
