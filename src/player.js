"use strict";

var Player = function (name) {
  var username = name;

  this.getName = function () {
    return username;
  };

  this.bowl = (function () {
    var hitPins;
    return function (frame) {
      hitPins = Math.floor(Math.random()*(frame.pins+1));
      frame.pinsStanding(hitPins);
      frame.bowlsHadThisFrame += 1;
      return hitPins;
    }
  }());
}

