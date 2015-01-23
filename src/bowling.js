var Player = function(name) {
	this.name = name;
};

var Frame = function() {
	this.pins = 10;
	this.bowl = 0;
};

var ScoreCard = function(){
};

Player.prototype.bowl = function(frameNumber) {
	if (frameNumber.bowl === 2) {
		return "You've had two bowls already this frame, please start a new frame"
	} else if (frameNumber.pins === 0) {
		return "All your pins are down, please start a new frame"
	} else {
		pins = this.knockDownPins(frameNumber);	
		return pins;
	}
	
};

Player.prototype.knockDownPins = function(frameNumber) {
	pins = Math.floor(Math.random()*(frameNumber.pins+1));
	frameNumber.pins -= pins;
	frameNumber.bowl += 1;
	return pins;
}


