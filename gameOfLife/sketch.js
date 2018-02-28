// return grid array; default to 10 x 10
function make2Darray(cols = 10, rows =10) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function populate2Dgrid(grid) {
  for (let c = 0; c < grid.length; c++) {
    for (let r = 0; r < grid[c].length; r++) {
      grid[c][r] = floor(random(2));
    }
  }
  return grid;
}

function numLifeSurroundingCels(grid, col, row){
  let maxCol = grid.length-1;
  let maxRow = grid[col].length-1;

  let numLife = 0;

  // linksboven
  if (col == 0 && row == 0) {
    numLife += grid[col][row+1];
    numLife += grid[col+1][row+1];
    numLife += grid[col+1][row];
  }
  // rechtsboven
  else if (col == maxCol && row == 0) {
    numLife += grid[col-1][row];
    numLife += grid[col-1][row+1];
    numLife += grid[col][row+1];
  }
  // linksonder
  else if (col == 0 && row == maxRow) {
    numLife += grid[col][row-1];
    numLife += grid[col+1][row-1];
    numLife += grid[col+1][row];
  }
  // rechtsonder
  else if (col == maxCol && row == maxRow) {
    numLife += grid[col-1][row];
    numLife += grid[col-1][row-1];
    numLife += grid[col][row-1];
  }

  return numLife;
}

function applyRules(grid) {
  // kopieer grid; in kopie wordt volgend frame
  // opgebouwd door regels toe te passen
  let nextFrame = grid;

  // doorloop alle cellen van grid
  for (let c= 0; c < grid.length; c++){
    for (let r= 0; r < grid[c].length; r++){
      //console.log("c: "+c+" r: "+r+" numLife: "+numLifeSurroundingCels(grid, c, r));
    }
  }

  return nextFrame;
}


let grid;

let cellSize = 40;

function setup() {
  createCanvas(600, 400);
  background(255);

  let cols = width / cellSize;
  let rows = height / cellSize;

  grid = make2Darray(cols, rows);
  grid = populate2Dgrid(grid);

}

function draw() {
  grid = applyRules(grid);

  for (let c = 0; c < grid.length; c++) {
    for (let r = 0; r < grid[c].length; r++) {
      if (grid[c][r] == 1) {
        let x = c * cellSize;
        let y = r * cellSize;
        fill('red');
        noStroke();
        //stroke(0);

        rect(x, y, cellSize - 1, cellSize - 1);
      }

    }
  }


}
