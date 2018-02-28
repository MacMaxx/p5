// 1730 RHAV: List class for use in p5.js
// allows appending objects (e.g. (x,y)-tuples) to list while restraining
// length of list to maxLength. Intended use is for keeping track of trails.

// constructor
function MaxArray(_maxLength) {
  this.maxLength = _maxLength; // max. number of objects to store
  this.values = []; // array for storing objects
  this.getLength = getLength; // return length of array, aka num. of objects stored
  this.append = append; //add object to end of array


  function getLength() {
    return this.values.length;
  }

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
}
// var ma = new MaxArray(60);
//
// for (i = 0; i < 130; i++) {
//   ma.append({
//     x: i,
//     y: i * 2
//   });;
// }
//
// for (i = 0; i < ma.getLength(); i++) {
//   console.log("x[" + i + "]= " + ma.values[i].x);
// }
