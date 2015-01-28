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
	if (this.bowlsHadThisFrame === 1 && this.pins === 0) {
		return true;
	} else {
		return false;
	}
}

Frame.prototype.isSpareScored = function() {
		if (this.bowlsHadThisFrame === 2 && this.pins === 0) {
		return true;
	} else {
		return false;
	}
}

Frame.prototype.pinsStanding = function(pinsKnockedDown) {
	this.pins -= pinsKnockedDown;
};

