var Player = function(name) {
	this.name = name;
};

var Frame = function() {
	this.pins = 10;
	this.bowl = 0;
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

var ScoreCard = function(){
};

Player.prototype.bowl = function(frame) {
	if (frame === undefined) {
		return "You have bowled all 10 frames, Game Over"
	} else {
		knockedDownPins = this.knockDownPins(frame);	
		return knockedDownPins;
	}
	
};

Player.prototype.knockDownPins = function(frame) {
	knockedDownPins = Math.floor(Math.random()*(frame.pins+1));
	frame.pins -= knockedDownPins;
	frame.bowl += 1;
	return knockedDownPins;
}


Frame.prototype.strike = function() {
	return "Strike!"
}

Frame.prototype.spare = function() {
	return "Spare!"
}

Game.prototype.play = function() {
	frame = this.frames.shift();
	firstBowl = this.player.bowl(frame);
	return firstBowl;
	if (firstBowl === 10) {
		frame.strike();
	} else {
		secondBowl = this.player.bowl(frame);
		return secondBowl;
		if (frame.pins === 0) {
			frame.spare();
		}  
	}
}