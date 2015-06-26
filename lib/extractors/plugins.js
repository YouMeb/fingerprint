'use strict';

var map = require('component/map');
var MetaExtractor = require('../meta-extractor');

module.exports = MetaExtractor('plugins', function () {
  return map(navigator.plugins || [], getPluginKey);
});

function getPluginKey(plugin) {
  var plugins = map(plugin, getMimeTypes);
  var keys = map(plugins, function (mimeTypes) {
    return [
      plugin.name,
      plugin.description,
      mimeTypes
    ].join('#')
  });
  return keys.join(':');
}

function getMimeTypes(mimeType) {
  return [
    mimeType.type,
    mimeType.suffixes
  ].join('~');
}
