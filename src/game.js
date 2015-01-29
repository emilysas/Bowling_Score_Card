var Game = function(player, frames = []) {
	this.player = player;
	this.playerUsername = player.username;
	this.frames = frames;
	this.currentFrame = frames[0];
	this.scorecard = [];
}

Game.prototype.play = function() {
	var frame = this.frame();
	score = player.bowl(frame);
	this.addScore(score);
	return score;
}

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

Game.prototype.addScore = function(score) {
	var frame = this.currentFrame.frameNumber;
	if (this.scorecard[frame - 1] === undefined) {
		this.scorecard.push([score]);
	} else {
		this.scorecard[frame - 1].push(score);
		var total = this.getFrameTotal(score);
		this.scorecard[frame - 1].push(total);
	}
};

Game.prototype.getFrameTotal = function (score) {
	var frame = this.currentFrame.frameNumber;
	var total = this.scorecard[frame - 1][0] + score;
	return total;
}
