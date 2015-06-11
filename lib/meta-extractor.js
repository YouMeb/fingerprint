'use strict';

var murmurhash = require('./murmurhash');
var proto = MetaExtractor.prototype;

module.exports = MetaExtractor;

function MetaExtractor(name, extract) {
  if (!(this instanceof MetaExtractor)) {
    return new MetaExtractor(name, extract);
  }
  extract && (this._extract = extract);
  this.name = name;
  this.plugin = this.plugin.bind(this);
}

proto.plugin = function (fingerprint) {
  fingerprint.extractors.push(this);
};

proto.extract = function () {
  var value = this._extract();
  return value === undefined
    ? undefined
    : (this.name + ':' + murmurhash(String(value), 31));
};
