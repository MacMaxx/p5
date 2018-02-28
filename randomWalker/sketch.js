// 1729.2 - Autrans - RHAV
var debug = true;
var dbg; //debug DIV element

var w;

function setup() {
  // setup fullscreen canvas, if debug = true reserve some room for
  // debug DIV. If Canvas is fullscreen, the DIV will not show, so need
  // to reserve some room for this (substract ~20)
  createCanvas(windowWidth, windowHeight - ((debug) ? 20 : 0));

  // include DIV element to show debug info defined in showDebug()
  // NB. Debug DIV isn't part of canvas!
  if (debug) {
    dbg = createDiv("");
  }

  w = new Walker(width / 2, height / 2, 100);
}

function draw() {
  background(51);

  w.step();
  w.show();

  if (debug) {
    showDebug();
  }
}

function showDebug() {
  // construct debugtext
  var dbgtxt = "fr: " + floor(frameRate()); //frameRate
  dbgtxt += " screenSize[" + width + ":" + height + "]"; // screen width & height
  dbgtxt += " fc:" + frameCount; // frameCount

  // display debugtext in Div-element
  dbg.html(dbgtxt);
}
