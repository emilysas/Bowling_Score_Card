"use strict";

var Scorecard = function(){
	this.card = [];
  this.totalScore = 0;
  // this.game = null;
  // this.frame = game.currentFrame || null;
  // this.frameNum = frame.frameNumber || null;
}

Scorecard.prototype = {

  // calculateFirstScore: function (score) {
  //   this.frame.isStrikeScored() ? score = [10, "-", "-"].join()) : this.runningTotal(score);
  //   this.addScore(this.card, [score])
  // },

  // calculateSecondScore: function (score) {
  //   var cell = this.getCell(1), value;
  //   this.isSpareScored() ? value = '-' : value = this.getFrameTotal(cell, score);
  //   this.addScore(cell, score);
  //   this.addScore(cell, value);
  //   this.runningTotal(score);
  // },

  // getCell: function (index) {
  //   return this.card[this.frameNum - index]
  // },

  // calculatePreviousScore: function (bonus, score) {,
  //   lastFrame = this.getCell(2),
  //   thisFrame = this.getCell(1),
  //   totalThisFrame = thisFrame[2],
  //   totalPlusBonus = totalThisFrame+10;

  //   if (bonus === "strike" && thisFrame[0] === 10){
  //     lastFrame[2] = totalPlusBonus;
  //     this.runningTotal(10);
  //   } else if (bonus === "strike"){
  //     lastFrame[2] = (totalPlusBonus);
  //     this.runningTotal(totalThisFrame));
  //   } else if (bonus === "spare"){
  //     lastFrame[2] = (score+10);
  //     this.runningTotal(score);
  //   }
  // },

  // addScore: function (scoreboardCell, score) {
  //   scoreboardCell.push(score);
  // },

  // runningTotal: function (score) {
  //   this.totalScore += Number(score);
  // },   

  // getFrameTotal: function (cell, score) {
  //   return cell[0] + score;
  // },

  // isStrikeLastFrame: function (lastFrame) {
  //   return lastFrame[0] === 10;
  // },

  // isSpareLastFrame: function (lastFrame) {
  //   return lastFrame[2] === '-' && lastFrame[0] < 10;
  // },

  calculateScore: function (game, score) {
    this.game = this.game || game;
    emptyCell = !getCell(1);
    var lastFrame = this.getCell(2) ? this.getCell(2) : false;
    emptyCell ? this.calculateFirstScore(score) : this.calculateSecondScore(score);
    bonus = this.isSpareLastFrame() || this.isStrikeLastFrame();
    whichBonus = this.isSpareLastFrame ? "spare" : "strike";
    if(lastFrame && bonus){this.calculatePreviousScore(whichBonus, score)};
  };

};
