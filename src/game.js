"use strict";

var Game = function (player, frames) {
  this.player = player;
  this.playerUsername = player.getName();
  this.frames = frames;
  this.currentFrame = frames[0];
  this.scorecard = [];
  this.totalScore = 0;
};

Game.prototype = {

  play: function () {
    var frame = this.frame();
    var score = player.bowl(frame);
    this.calculateScore(score);
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

  calculateScore: function (score) {
    var frameNum = this.currentFrame.frameNumber,
        lastFrame = this.scorecard[frameNum - 2] ? this.scorecard[frameNum - 2] : false

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
      }
    }	
  },

  calculateFirstScore: function (score) {
    this.currentFrame.isStrikeScored() ? this.addScore(this.scorecard, [10, "-", "-"])
                                       : this.addScore(this.scorecard, [score]), this.runningTotal(score);
  },

  calculateSecondScore: function (score) {
    var frame = this.currentFrame,
        frameNum = frame.frameNumber,
        cell = this.scorecard[frameNum - 1]
    if (frame.isSpareScored()) {
      this.addScore(cell, score);
      this.addScore(cell, "-");
      this.runningTotal(score)
    } else {
      this.addScore(cell, score)	
      this.addScore(cell, this.getFrameTotal(score))
      this.runningTotal(score)
    }
  },

  calculatePreviousScore: function (bonus, score) {
    var frameNum = this.currentFrame.frameNumber,
        lastFrame = this.scorecard[frameNum - 2],
        thisFrame = this.scorecard[frameNum - 1],
        totalThisFrame = thisFrame[2];
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
  },

  addScore: function (scoreboardCell, score) {
    scoreboardCell.push(score);
  },

  isStrikeLastFrame: function (lastFrame) {
    return lastFrame[0] === 10;
  },

  isSpareLastFrame: function (lastFrame) {
    return lastFrame[2] === '-' && lastFrame[0] < 10;
  },

  getFrameTotal: function (score) {
    var frame = this.currentFrame.frameNumber,
        total = this.scorecard[frame - 1][0] + score;
    return total;
  },

  runningTotal: function (score) {
    this.totalScore += Number(score);
  }
};



