var Frame = function(number) {
	this.frameNumber = number;
	this.pins = 10;
	this.bowlsHadThisFrame = 0;
};

Frame.prototype.isAllowingBowl = function() {
	if (this.bowlsHadThisFrame < 2) {
		return true;
	} else {
		return false;
	}
}

Frame.prototype.isStrikeScored = function() {
	if (this.bowlsHadThisFrame === 0 && this.pins === 0) {
		return true;
	} else {
		return false;
	}
}

// Frame.prototype.spareScored = function(scorecard) {
// 	return "Spare!"
// }

// Frame.prototype.isFrameOver = function() {
// 	if ((this.pins > 0 && (this.frameNumber < 10 || this.bowl === 2)) || this.bowl === 3) {return true};
// }

// Frame.prototype.pinsKnockedDown = function(pins) {
// 	this.pins -= pins;
// }

// Frame.prototype.bowlNumber = function() {
// 	this.bowl += 1;
// }

// Frame.prototype.addToScore = function(score, scorecard) {
// 	this.score += score;
// 	scorecard.addBowlScore(score)
// }

// Frame.prototype.resetPins = function() {
// 	if ((this.bowl === 1 || 2) && this.pins === 0) {
// 		this.pins = 10;
// 	}
// }
