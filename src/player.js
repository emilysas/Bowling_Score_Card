var Player = function(name) {
	this.name = name;
};

Player.prototype.bowl = function(frame) {
	knockedDownPins = this.knockDownPins(frame);
	if (knockedDownPins === 10) {
		frame.strikeScored();
	} else if (frame.bowl === 2 && frame.pins === 0) {
		frame.spareScored();
	} else {
		frame.score += knockedDownPins;
	}
	return knockedDownPins;	
};

Player.prototype.knockDownPins = function(frame) {
	knockedDownPins = Math.floor(Math.random()*(frame.pins+1));
	frame.pins -= knockedDownPins;
	frame.bowl += 1;
	return knockedDownPins;
}