"use strict";

var Player = function (name) {
  var username = name;

  this.getName = function () {
    return username;
  };

  this.bowl = (function () {
    var hitPins = function(frame){
      return Math.floor(Math.random()*(frame.pins+1));
    };
      return function (frame) {
        var pins = hitPins(frame);
        frame.pinsStanding(pins);
        frame.bowlsHadThisFrame += 1;
        return pins;
      }
  }());
}

