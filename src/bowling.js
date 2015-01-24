var Player = function(name) {
	this.name = name;
};

var Game = function(player) {
	this.player = player;
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
	this.pins = 10;
	this.bowl = 0;
};

var ScoreCard = function(){
};

Player.prototype.bowl = function(frameNumber) {
	if (frameNumber === undefined) {
		return "You have bowled all 10 frames, Game Over"
	} else if (frameNumber.bowl === 2) {
		return "You've had two bowls already this frame, please start a new frame"
	} else if (frameNumber.pins === 0) {
		return "All your pins are down, please start a new frame"
	} else {
		knockedDownPins = this.knockDownPins(frameNumber);	
		return knockedDownPins;
	}
	
};

Player.prototype.knockDownPins = function(frameNumber) {
	knockedDownPins = Math.floor(Math.random()*(frameNumber.pins+1));
	frameNumber.pins -= knockedDownPins;
	frameNumber.bowl += 1;
	return knockedDownPins;
}

Game.prototype.play = function() {
	frame = this.frames.shift();
	result = this.player.bowl(frame);
	return result;
}


