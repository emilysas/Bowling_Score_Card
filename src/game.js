"use strict";

var Game = function (player, scorecard, frames) {
  this.player = player;
  this.playerUsername = player.getName();
  this.frames = frames;
  this.currentFrame = frames[0];
  this.scorecard = scorecard;
  this.scorecard.game = this;
};

Game.prototype = {

  play: function () {
    var frame = this.frame();
    var score = player.bowl(frame);
    this.scorecard.calculateScore(this, score);
    return score;
  },

  frame: function () {
    return this.currentFrame.isBowlAllowed() ? this.currentFrame : this.nextFrame();
  },

  nextFrame: function () {
    this.frames.shift();
    this.currentFrame = this.frames[0];
    return this.currentFrame;
  },

};

  


