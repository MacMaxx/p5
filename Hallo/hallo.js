


var greetings = ["hoi","groeten","hallo"];
var places = ["keuken","badkamer","zolder"];

function kies(t) {
  return t[Math.floor(Math.random()*t.length)];
}

for (var i = 0; i < 10; i++) {
  console.log(kies(greetings) + ", vanuit de " + kies(places));
}
