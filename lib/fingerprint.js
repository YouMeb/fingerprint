'use strict';

var murmurhash = require('./murmurhash');
var extractors = require('./extractors');
var proto = Fingerprint.prototype;

module.exports = Fingerprint;

Fingerprint.extractors = extractors;

function Fingerprint() {
  if (!(this instanceof Fingerprint)) {
    return new Fingerprint();
  }
  this.extractors = [];
}

proto.use = function (fn) {
  if (typeof fn === 'string') {
    fn = extractors[fn];
  }

  (fn.plugin || fn)(this);

  return this;
};

proto.get = function () {
  var val = this.extractors
    .map(extract)
    .join();
  return murmurhash(val, 31);
};

function extract(extractor) {
  return extractor.extract();
}
