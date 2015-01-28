var Player = function(name) {
	this.username = name;
};

Player.prototype.bowl = function(frame) {
	var knockedDownPins = this.knockDownPins(frame);
	return knockedDownPins;
};

Player.prototype.knockDownPins = function(frame) {
	var pinsKnockedDown = Math.floor(Math.random()*(frame.pins+1));
	frame.pinsStanding(pinsKnockedDown);
	frame.bowlsHadThisFrame += 1;
	return pinsKnockedDown;
};
