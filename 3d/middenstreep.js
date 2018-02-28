function MiddenStreep(_horizon, _numStrepen) {
  this.horizon = _horizon;
  this.numStrepen = _numStrepen;
  this.strepen = new Array(); //array om streep objecten in te bewaren
  this.streepLen = 30;
  this.update = update;
  this.draw = draw;

  //vul streep[] met in initiele strepen
  for (i = 0; i < this.numStrepen; i++) {
    var pos = this.horizon + (i * this.streepLen * 2);
    this.strepen.push(pos);
  }

  // update streep posities met snelheid
  function update(_snelheid) {
    // verwijder strepen die niet meer getekend kunnen worden; positie - streepLen
    // ligt buiten scherm.
    if (this.strepen[this.numStrepen - 1] - this.streepLen >= 480 + this.streepLen) {
      var debug = this.strepen[this.numStrepen - 1];
      this.strepen.pop();
      console.log('Streep verwijderd!; #strepen = ' + this.strepen.length + ' met waarde ' + debug);
    }

    // als eerste streep meer dan streepLen opweg is, voeg nieuwe streep toe die start aan
    // de horizon.
    if (this.strepen[0] >= this.horizon + (2 * this.streepLen)) {
      this.strepen.unshift(this.horizon);
      console.log('Streep toegevoegd!; #strepen = ' + this.strepen.length + ' met waarde ' + this.horizon);
    }

    // update streep posities.
    for (i = 0; i < this.strepen.length; i++) {
      this.strepen[i] += _snelheid;
    }
  }

  function draw() {
    for (i = 0; i < this.strepen.length; i++) {
      line(320, constrain(this.strepen[i] - this.streepLen, this.horizon, 480 + this.streepLen), 320, this.strepen[i]);

    }

    //line(320, this.startX, 320, this.endX);
  }


}
