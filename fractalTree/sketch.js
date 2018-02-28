var slider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  slider = createSlider(0, PI / 2, PI / 4, 0.01);
  slider.position(10, 10);
}

function draw() {
  background(200);
  angle = slider.value();

  translate(windowWidth / 2, windowHeight);
  branch(windowHeight * 0.33, angle);

}

function branch(len, angle) {

  line(0, 0, 0, -len);
  translate(0, -len);

  if (len > 2) {

    push();
    rotate(angle);
    branch(len * 0.67, angle);
    pop();

    push();
    rotate(-angle);
    branch(len * 0.67, angle);
    pop();

  }

}
