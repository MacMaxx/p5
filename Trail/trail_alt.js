// 1730 RHAV: Trail class for use in p5.js

// constructor
function Trail(_trailLength) {
  var maxLength = _trailLength; // trailLength = number of (x,y) tuples to store
  this.xValues = new Array();
  this.yValues = new Array();
  this.length = getLength();
  this.addToTrail = addToTrail;
  //console.log(this.xValues.length);
}

function getLength() {
  return 60;
};

function addToTrail(_x, _y) {
  console.log("-x:" + _x + " -y: " + _y);
  if (this.xValues.length == this.maxLength) {
    // if max array list is reached, remove last element from end of arrays
    // to make room for new element at beginning of list
    this.xValues.pop();
    this.yValues.pop();
  }

  //Simply add supplied values to beginning of arrays
  var tempXValues = this.xValues.reverse(this.xValues);
  tempXValues.push(_x);
  this.xValues = tempXValues.reverse(tempXValues);
  console.log("tempX.length:" + tempXValues.length);

  var tempYValues = this.yValues.reverse(this.yValues);
  tempYValues.push(_y);
  this.yValues = tempYValues.reverse(tempYValues);

}

console.log("start...");
var t = new Trail(60);
console.log("t.length: " + t.length);

for (i = 0; i < 200; i++) {
  t.addToTrail(i, i * 2);;
  console.log("Trail length: " + t.length);
}

for (i = 0; i < t.length; i++) {
  console.log("x[" + i + "]= " + t.xValues[i]);
}
