"use strict";

var Scorecard = function(){
	this.card = [];
  this.totalScore = 0;
}

Scorecard.prototype = {

    // var that = this;

  //   var calculateFirstScore = function (score) {
  //     this.currentFrame.isStrikeScored() ? this.addScore(this.scorecard, [10, "-", "-"])
  //                                        : this.addScore(this.scorecard, [score]), this.runningTotal(score);
  //   };

  //   var calculateSecondScore = function (score) {
  //     var frame = this.currentFrame,
  //         frameNum = frame.frameNumber,
  //         cell = this.scorecard[frameNum - 1]
  //     if (frame.isSpareScored()) {
  //       this.addScore(cell, score);
  //       this.addScore(cell, "-");
  //       this.runningTotal(score)
  //     } else {
  //       this.addScore(cell, score)  
  //       this.addScore(cell, this.getFrameTotal(score))
  //       this.runningTotal(score)
  //     }
  //   };

  //   var calculatePreviousScore = function (bonus, score) {
  //     var frameNum = this.currentFrame.frameNumber,
  //         lastFrame = this.scorecard[frameNum - 2],
  //         thisFrame = this.scorecard[frameNum - 1],
  //         totalThisFrame = thisFrame[2];
  //     if (bonus === "strike" && thisFrame[0] === 10){
  //       lastFrame[2] = 20;
  //       this.runningTotal(10);
  //     } else if (bonus === "strike"){
  //       lastFrame[2] = (Number(totalThisFrame)+10);
  //       this.runningTotal(Number(totalThisFrame));
  //     } else if (bonus === "spare"){
  //       lastFrame[2] = (Number(score)+10);
  //       this.runningTotal(Number(score));
  //     }
  //   };

  //   var addScore = function (scoreboardCell, score) {
  //     scoreboardCell.push(score);
  //   };

  //   var runningTotal = function (score) {
  //     this.totalScore += Number(score);
  //   };   

  //   var isStrikeLastFrame = function (lastFrame) {
  //     return lastFrame[0] === 10;
  //   };

  //   var isSpareLastFrame = function (lastFrame) {
  //     return lastFrame[2] === '-' && lastFrame[0] < 10;
  //   };

  //   var getFrameTotal = function (score) {
  //     var frame = this.currentFrame.frameNumber,
  //         total = this.scorecard[frame - 1][0] + score;
  //     return total;
  //   };

  //   return {

  //   calculateScore: function (score) {
  //     var frameNum = this.currentFrame.frameNumber,
  //         lastFrame = this.scorecard[frameNum - 2] ? this.scorecard[frameNum - 2] : false

  //       if (!this.scorecard[frameNum - 1]) {
  //         this.calculateFirstScore(score);
  //         if (lastFrame && this.isSpareLastFrame(lastFrame)){
  //           this.calculatePreviousScore("spare", score);
  //         } else if (lastFrame && this.isStrikeLastFrame(lastFrame) && this.currentFrame.isStrikeScored()) {
  //           this.calculatePreviousScore("strike", score);
  //         }
  //       } else {
  //         this.calculateSecondScore(score);
  //         if (lastFrame && this.isStrikeLastFrame(lastFrame)){
  //           this.calculatePreviousScore("strike", score);
  //         }
  //       }	
  //     }

  //   };

  // })()

};
