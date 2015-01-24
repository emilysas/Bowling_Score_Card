var Player = function(name) {
	this.name = name;
};

var Game = function(player) {
	this.frames = [frame1 = new Frame(), 
								frame2 = new Frame(), 
								frame3 = new Frame(), 
								frame4 = new Frame(), 
								frame5 = new Frame(), 
								frame6 = new Frame(), 
								frame7 = new Frame(), 
								frame8 = new Frame(), 
								frame9 = new Frame(), 
								frame10 = new Frame()]
}

var Frame = function() {
	var pins = 10;Vz`z`ZAaV
	var bowl = 0;

	this.remainingPins = function() {
		return pins;
	};

	this.bowlCount = function() {
		return bowl;
	};
};

var ScoreCard = function(){
};

Player.prototype.bowl = function(frameNumber) {
	if (frameNumber.bowlCount === 2) {
		return "You've had two bowls already this frame, please start a new frame"
	} else if (frameNumber.remainingPins === 0) {
		return "All your pins are down, please start a new frame"
	} else {
		knockedDownPins = this.knockDownPins(frameNumber);	
		return knockedDownPins;
	}
	
};

Player.prototype.knockDownPins = function(frameNumber) {
	knockedDownPins = Math.floor(Math.random()*(frameNumber.remainingPins+1));
	frameNumber.remainingPins -= knockedDownPins;
	frameNumber.bowlCount += 1;
	return knockedDownPins;
}

Game.prototype.play = function() {
	frame = this.frames.shift;
	result = player.bowl(frame);
	return result;
}


