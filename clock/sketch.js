function setup() {
  createCanvas(400, 400);
}

function draw() {
  let hr = hour();
  let min = minute();
  let sec = second();

  //background(255, 255, 255);
  background(0);

  strokeWeight(5);
  noFill();

  let sec_end = map(sec, 0, 60, 0, TWO_PI);
  translate(200, 200);
  rotate(-HALF_PI);
  stroke(200, 200, 0);
  arc(0, 0, 300, 300, 0, sec_end);

  let min_end = map(min, 0, 60, 0, TWO_PI);
  stroke(200, 160, 0);
  arc(0, 0, 280, 280, 0, min_end);

  let hr_end = map(hr % 12, 0, 12, 0, TWO_PI);
  stroke(200, 120, 0);
  arc(0, 0, 260, 260, 0, hr_end);

  rotate(HALF_PI);
  let hrText = str('0' + hr).slice(-2); // prefix 1 digit values with '0' to yield '01'
  let minText = str('0' + min).slice(-2);
  let secText = str('0' + sec).slice(-2);
  let timeText = hrText + ':' + minText + ':' + secText;

  textSize(30);
  fill(200, 120, 0);
  strokeWeight(2);
  textAlign(CENTER);
  text(timeText, 0, 0);
  //console.log(timeText);
}
