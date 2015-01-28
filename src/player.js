var Player = function(name) {
	this.username = name;
};

Player.prototype.bowl = function(frame) {
	var knockedDownPins = this.knockDownPins(frame);
	return knockedDownPins;
};

Player.prototype.knockDownPins = function(frame) {
	pinsKnockedDown = Math.floor(Math.random()*11);
	frame.pinsStanding(pinsKnockedDown);
	return pinsKnockedDown;
};
