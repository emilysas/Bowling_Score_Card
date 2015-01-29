var Game = function(player, frames = []) {
	this.player = player;
	this.playerUsername = player.username;
	this.frames = frames;
	this.currentFrame = frames[0];
	this.scorecard = [];
};

Game.prototype.play = function() {
	var frame = this.frame();
	score = player.bowl(frame);
	this.calculateScore(score);
	return score;
};

Game.prototype.frame = function() {
	if(this.currentFrame.isBowlAllowed()) {
		return this.currentFrame;
	} else {
		return this.nextFrame();
	}
};

Game.prototype.nextFrame = function() {
	this.frames.shift();
	this.currentFrame = this.frames[0];
	return this.currentFrame;
};

Game.prototype.calculateScore = function(score) {
	var frameNum = this.currentFrame.frameNumber;
	var lastFrame;
	frameNum > 1 ? lastFrame = this.scorecard[frameNum - 2] : lastFrame = false;
	console.log(lastFrame)
	if (!this.scorecard[frameNum -1]) {
		this.calculateFirstScore(score);
		if (lastFrame && this.spareLastFrame(lastFrame)){
			console.log("spare");
			this.calculatePreviousScore("spare", score);
		}
	} else {
		this.calculateSecondScore(score);
		if (lastFrame && this.strikeLastFrame(lastFrame)){
			console.log("strike");
			this.calculatePreviousScore("strike", score);
		};
	};	
};

Game.prototype.calculateFirstScore = function(score) {
	if (this.currentFrame.isStrikeScored()) {
		this.addScore(this.scorecard, [10, "-", "-"]);
	} else {
		this.addScore(this.scorecard, [score]);
	};
};

Game.prototype.calculateSecondScore = function(score) {
	var frame = this.currentFrame;
	var frameNum = frame.frameNumber;
	var cell = this.scorecard[frameNum -1]
	if (frame.isSpareScored()) {
		this.addScore(cell, score);
		this.addScore(cell, "-");
	} else {
		this.addScore(cell, score)	
	};
};

Game.prototype.calculatePreviousScore = function(bonus, score) {
	var lastFrame = this.scorecard[frameNum - 2][2];
	var totalThisFrame = this.scorecard[frameNum -1][2];
	if (bonus === "strike"){
		this.addScore(lastFrame, totalThisFrame+10);
	} else if (bonus === "spare"){
		this.addScore(lastFrame, score+10);
	}
};

Game.prototype.addScore = function(scoreboardCell, score) {
	scoreboardCell.push(score);
};

Game.prototype.strikeLastFrame = function(lastFrame) {
	lastFrame[0] === 10;
};

Game.prototype.spareLastFrame = function(lastFrame) {
	lastFrame[2] === 10 && lastFrame[0] < 10;
};

Game.prototype.getFrameTotal = function (score) {
	var frame = this.currentFrame.frameNumber;
	var total = this.scorecard[frame - 1][0] + score;
	return total;
};
