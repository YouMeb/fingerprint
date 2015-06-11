'use strict';

var MetaExtractor = require('../meta-extractor');

module.exports = MetaExtractor('canvas', function () {
  return canvasSupported()
    && createCanvasFingerprint();
});

function createCanvas() {
  var canvas = document.createElement('canvas');
  canvas.with = 1000;
  canvas.height = 1000;
  return canvas;
}

function canvasSupported() {
  var canvas = createCanvas();
  return canvas.getContext
    && canvas.getContext('2d');
}

function createCanvasFingerprint() {
  var text = 'Gypq aoli emzx AHKLvfE, #*&@`)<}]';
  var run = createTestRunner(text);

  var tests = [
    arial,
    arial16,
    arialColor,
    arialBold,
    serif,
    serifBold,
    sansSerif,
    sansSerifBold,
    unknownFont,
    winding
  ];

  return String(tests.map(run));
}

function createTestRunner(text) {
  return function (test) {
    var canvas = createCanvas();
    var ctx = canvas.getContext('2d');
    test(ctx, text);
    return canvas.toDataURL();
  };
}

function arial(ctx, text) {
  ctx.textBaseline = 'top';
  ctx.font = '14px \'Arial\'';
}

function arial16(ctx, text) {
  ctx.textBaseline = 'top';
  ctx.font = '16px \'Arial\'';
}

function arialColor(ctx, text) {
  ctx.fillStyle = '#069';
  ctx.textBaseline = 'top';
  ctx.font = '16px \'Arial\'';
}

function arialBold(ctx, text) {
  ctx.textBaseline = 'top';
  ctx.font = 'bold 14px \'Arial\'';
}

function serif(ctx, text) {
  ctx.textBaseline = 'top';
  ctx.font = '14px \'serif\'';
}

function serifBold(ctx, text) {
  ctx.textBaseline = 'top';
  ctx.font = '14px \'serif\'';
}

function sansSerif(ctx, text) {
  ctx.textBaseline = 'top';
  ctx.font = '14px \'sans-serif\'';
}

function sansSerifBold(ctx, text) {
  ctx.textBaseline = 'top';
  ctx.font = '14px \'sans-serif\'';
}

function unknownFont(ctx, text) {
  ctx.textBaseline = 'top';
  ctx.font = '14px \'thisfontdoesnotexist\'';
}

function winding(ctx) {
  ctx.fillStyle = 'rgb(255,0,255)';
  ctx.beginPath();
  ctx.arc(75, 75, 75, 0, Math.PI * 2, true); 
  ctx.arc(75, 75, 25, 0, Math.PI * 2, true); 
  ctx.fill('evenodd');
}
