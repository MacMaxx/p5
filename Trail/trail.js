// 1730 RHAV: Trail class for use in p5.js

// constructor
function List(_maxLength) {
  this.maxLength = _maxLength; // max. number of objects to store
  this.values = []; // array for storing objects
  this.getLength = getLength; // return length of trail, aka num. of objects stored
  this.append = append; //add object to end of list
}

function getLength() {
  return this.values.length;
};

function append(_object) {
  if (this.values.length == this.maxLength) {
    // if max array list is reached, remove first element from arrays
    // to make room for new element at end of array
    this.values.reverse();
    this.values.pop();
    this.values.reverse();
  }

  //Simply add supplied values to end of arrays
  this.values.push(_object);
}

var l = new List(60);

for (i = 0; i < 130; i++) {
  l.append({
    x: i,
    y: i * 2
  });;
}

for (i = 0; i < l.getLength(); i++) {
  console.log("x[" + i + "]= " + l.values[i].x);
}
