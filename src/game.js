"use strict";

var Game = function (player, frames) {
  this.player = player;
  this.playerUsername = player.username;
  this.frames = frames;
  this.currentFrame = frames[0];
  this.scorecard = [];
  this.totalScore = 0;
};

Game.prototype.play = function () {
  var frame = this.frame();
  var score = player.bowl(frame);
  this.calculateScore(score);
  return score;
};

Game.prototype.frame = function () {
  if(this.currentFrame.isBowlAllowed()) {
    return this.currentFrame;
  } else {
    return this.nextFrame();
  }
};

Game.prototype.nextFrame = function () {
  this.frames.shift();
  this.currentFrame = this.frames[0];
  return this.currentFrame;
};

Game.prototype.calculateScore = function (score) {
  var frameNum = this.currentFrame.frameNumber;
  var lastFrame;
  frameNum > 1 ? lastFrame = this.scorecard[frameNum - 2] : lastFrame = false;

  if (!this.scorecard[frameNum - 1]) {
    this.calculateFirstScore(score);
    if (lastFrame && this.isSpareLastFrame(lastFrame)){
      this.calculatePreviousScore("spare", score);
    } else if (lastFrame && this.isStrikeLastFrame(lastFrame) && this.currentFrame.isStrikeScored()) {
      this.calculatePreviousScore("strike", score);
    }
  } else {
    this.calculateSecondScore(score);
    if (lastFrame && this.isStrikeLastFrame(lastFrame)){
      this.calculatePreviousScore("strike", score);
    };
  };	
};

Game.prototype.calculateFirstScore = function (score) {
  if (this.currentFrame.isStrikeScored()) {
    this.addScore(this.scorecard, [10, "-", "-"]);
  } else {
    this.addScore(this.scorecard, [score]);
    this.runningTotal(score)
  };
};

Game.prototype.calculateSecondScore = function (score) {
  var frame = this.currentFrame;
  var frameNum = frame.frameNumber;
  var cell = this.scorecard[frameNum - 1]
  if (frame.isSpareScored()) {
    this.addScore(cell, score);
    this.addScore(cell, "-");
    this.runningTotal(score)
  } else {
    this.addScore(cell, score)	
    this.addScore(cell, this.getFrameTotal(score))
    this.runningTotal(score)
  };
};

Game.prototype.calculatePreviousScore = function (bonus, score) {
  var frameNum = this.currentFrame.frameNumber;
  var lastFrame = this.scorecard[frameNum - 2];
  var thisFrame = this.scorecard[frameNum - 1]
  var totalThisFrame = thisFrame[2];
  if (bonus === "strike" && thisFrame[0] === 10){
    lastFrame[2] = 20;
    this.runningTotal(10);
  } else if (bonus === "strike"){
    lastFrame[2] = (Number(totalThisFrame)+10);
    this.runningTotal(Number(totalThisFrame));
  } else if (bonus === "spare"){
    lastFrame[2] = (Number(score)+10);
    this.runningTotal(Number(score));
  }
};

Game.prototype.addScore = function (scoreboardCell, score) {
  scoreboardCell.push(score);
};

Game.prototype.isStrikeLastFrame = function (lastFrame) {
  return lastFrame[0] === 10;
};

Game.prototype.isSpareLastFrame = function (lastFrame) {
  return lastFrame[2] === '-' && lastFrame[0] < 10;
};

Game.prototype.getFrameTotal = function (score) {
  var frame = this.currentFrame.frameNumber;
  var total = this.scorecard[frame - 1][0] + score;
  return total;
};

Game.prototype.runningTotal = function (score) {
  this.totalScore += Number(score);
};



