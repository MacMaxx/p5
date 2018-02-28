var beweeg = 0;
var streepLen = 30; //30 px lange strepen
var ms;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  createCanvas(640, 480);
  ms = new MiddenStreep(240, 5);

  console.log('pelle is niet gek!!');
}

function draw() {
  //lijndikte en lijnkleur
  background(200);
  stroke(100);
  noFill();
  strokeWeight(10);

  // teken horizon
  line(0, height / 2, width, height / 2);

  // teken weg
  line(300, height / 2, 60, height);
  line(340, height / 2, 580, height);

  ms.update(1);
  ms.draw();


}
