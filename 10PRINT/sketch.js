var cellW = 50;
var cellH = 50;
var numRows = 10;
var numCols = 10;

var bColor = 200; //background color
var lColor = 100; //line color
var weight = 2;

var slider;

function setup() {
  createCanvas(cellW * numCols, cellH * numRows);
  createDiv('Slide to change chance of creating filled cells.');
  slider = createSlider(0.05, 0.95, 0.5, 0.05);
  slider.size(cellW * numCols - 2 * cellW);

  stroke(lColor);
  strokeCap(SQUARE);
  strokeWeight(weight);
  strokeJoin(ROUND);
  frameRate(1);

  background(bColor);
  initialFill();
}

function draw() {
  for (let i = 0; i < numRows; i++) {

    let cell = Math.floor(random() * numCols);
    let row = Math.floor(random() * numRows);

    updateCell(cell, row);
    //updateCell(random(numCols), random(numRows));
    console.log("Cell: " + cell + " Row: " + row);
  }
}

function initialFill() {
  for (let curRow = 0; curRow < numCols; curRow++) {
    for (let curCol = 0; curCol < numCols; curCol++) {
      updateCell(curCol, curRow);


    }
  }
}

function updateCell(curCol, curRow) {
  //get treshhold from slider position
  let threshold = slider.value();
  //assume all shapes are drawn in CENTER mode, x & y are center of cell
  let x = curCol * cellW + (cellW / 2);
  let y = curRow * cellH + (cellH / 2);

  rectMode(CENTER);
  noStroke();

  if (random(1) < threshold) {
    fill(bColor);
  } else {
    fill(lColor);
  }
  rect(x, y, cellW, cellH);
  //ellipse(x, y, cellW - weight * 2, cellH - weight * 2);

}
