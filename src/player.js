"use strict";

var Player = function (name) {
  var username = name;

  this.getName = function () {
    return username;
  };
}

Player.prototype.bowl = function(frame){
  var hitPins,
      knockDownPins;

  knockDownPins = function () {
    hitPins = Math.floor(Math.random()*(frame.pins+1));
    frame.pinsStanding(hitPins);
    frame.bowlsHadThisFrame += 1;
    return hitPins;
  }
  return knockDownPins();
};
