'use strict';

var bind = require('component/bind');
var murmurhash = require('./murmurhash');
var proto = MetaExtractor.prototype;

module.exports = MetaExtractor;

function MetaExtractor(name, extract) {
  if (!(this instanceof MetaExtractor)) {
    return new MetaExtractor(name, extract);
  }
  extract && (this._extract = extract);
  this.name = name;
  this.plugin = bind(this, this.plugin);
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
