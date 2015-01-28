var Frame = function() {
	this.frameNumber = 1;
	this.pins = 10;
	this.score = 0;
	this.bowl = 0;
};

Frame.prototype.isFrameOver = function() {
	if ((this.pins > 0 && (this.frameNumber < 10 || this.bowl === 2)) || this.bowl === 3) {return true};
}

Frame.prototype.strikeScored = function(scorecard) {
	return "Strike!"
}

Frame.prototype.spareScored = function(scorecard) {
	return "Spare!"
}

Frame.prototype.pinsKnockedDown = function(pins) {
	this.pins -= pins;
}

Frame.prototype.bowlNumber = function() {
	this.bowl += 1;
}

Frame.prototype.addToScore = function(score, scorecard) {
	this.score += score;
	scorecard.addBowlScore(score)
}

Frame.prototype.resetPins = function() {
	if ((this.bowl === 1 || 2) && this.pins === 0) {
		this.pins = 10;
	}
}
