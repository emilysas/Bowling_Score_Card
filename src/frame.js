var Frame = function() {
	this.pins = 10;
	this.bowl = 0;
	this.score = 0;
};

Frame.prototype.strikeScored = function() {
	return "Strike!"
}

Frame.prototype.spareScored = function() {
	return "Spare!"
}

Frame.prototype.pinsKnockedDown = function(pins) {
	this.pins -= pins;
}

Frame.prototype.bowlNumber = function() {
	this.bowl += 1;
}
