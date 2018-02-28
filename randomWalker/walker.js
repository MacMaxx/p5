function Walker(_x, _y, _color) {
  this.ma = new MaxArray(60); //keep track of 60 frames

  this.x = _x;
  this.y = _y;
  this.color = _color;
  this.step = step;
  this.show = show;

  function step() {
    var dx = (random(-1, 1));
    var dy = (random(-1, 1));
    // console.log("dx: " + dx + " dy: " + dy);
    this.x += dx;
    this.y += dy;

    this.ma.append({
      x: this.x,
      y: this.y
    });
  }

  function show() {
    for (i = 0; i < this.ma.getLength(); i++) {
      fill(i * 4);
      ellipse(this.ma.values[i].x, this.ma.values[i].y, 20, 20);

    }
    // fill(this.color);
    // console.log("x: " + this.x + " y: " + this.y);
  }
}
