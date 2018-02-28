// 1727.6 RHAV
// > node groeten.js <#begroetingen>

var begroeting = ["Hallo", "Hoi", "Gegroet", "Goedemorgen", "Hello", "Houdoe", "Narwal"];
var namen = ["Rik", "Marieke", "Lieve", "Pelle", "Pippa"];

// random keuze van element uit lijst
function kies(lijst) {
  return lijst[Math.floor(Math.random() * lijst.length)];
}

//haal commandline parameter op
function getAantalBegroetingen() {
  var parm = process.argv[2];
  var aantal = 1;

  if (parm != null) {
    aantal = parm;
  }
  return aantal;
}

//console.log(getAantalBegroetingen());

// print begroeting n-maal
for (i = 0; i < getAantalBegroetingen(); i++) {
  console.log((i + 1) + ": " + kies(begroeting) + " " + kies(namen));
}
