var Player = function(name) {
	this.name = name;
};

Player.prototype.bowl = function(frame, scorecard) {
	knockedDownPins = this.knockDownPins(frame);
	if (knockedDownPins === 10) {
		frame.strikeScored(scorecard);
	} else if (frame.bowl === 2 && frame.pins === 0) {
		frame.spareScored(scorecard);
	} else {
		frame.addToScore(knockedDownPins, scorecard)
	}
	return knockedDownPins;	
};

Player.prototype.knockDownPins = function(frame) {
	knockedDownPins = Math.floor(Math.random()*(frame.pins+1));
	frame.pinsKnockedDown(knockedDownPins);
	frame.bowlNumber();
	return knockedDownPins;
}