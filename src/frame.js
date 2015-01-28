var Frame = function(number) {
	this.frameNumber = number;
	this.pins = 10;
	this.bowlsHadThisFrame = 0;
};

Frame.prototype.isBowlAllowed = function() {
	// is it the last frame?
	if (this.isLastFrame()) {
		// has there been 2 bowls in the last frame
		if(this.bowlsHadThisFrame === 2) {
			// has either a strike or a spare been scored?
			return (this.isSpareScored());
		} else { // there has not yet been 2 bowls in the last frame
			return (this.bowlsHadThisFrame < 2)
		};
		// Frame 1-9 there has only been one bowl
	} else if (this.bowlsHadThisFrame === 1) {
		// Frame 1-9 if strike return false, otherwise return true
		return !(this.isStrikeScored())
	} else {
		// Frame 1-9, less than 2 bowls?
		return (this.bowlsHadThisFrame < 2)

	};
};

Frame.prototype.isLastFrame = function() {
	return (this.frameNumber === 10)
}

Frame.prototype.isStrikeScored = function() {
	if (this.bowlsHadThisFrame === 1 && this.pins === 0) { 
		return true; 
	} else { 
		return false; 
	};
};

Frame.prototype.isSpareScored = function() {
		if (this.bowlsHadThisFrame === 2 && this.pins === 0) { 
			return true; 
		} else { 
			return false; 
		}
};

Frame.prototype.pinsStanding = function(pinsKnockedDown) {
	this.pins -= pinsKnockedDown;
};

Frame.prototype.resetPins = function() {
	this.pins = 10;
};

