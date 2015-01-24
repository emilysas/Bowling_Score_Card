var Player = function(name) {
	this.name = name;
};

var Frame = function() {
	this.pins = 10;
	this.bowl = 0;
	this.score = 0;
};

var Game = function(player) {
	this.player = player;
	this.frames = [frame2 = new Frame(), 
								frame3 = new Frame(), 
								frame4 = new Frame(), 
								frame5 = new Frame(), 
								frame6 = new Frame(), 
								frame7 = new Frame(), 
								frame8 = new Frame(), 
								frame9 = new Frame(), 
								frame10 = new Frame()]
	this.frame = frame1 = new Frame();
}

var ScoreCard = function(){
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

Frame.prototype.strikeScored = function() {
	return "Strike!"
}

Frame.prototype.spareScored = function() {
	return "Spare!"
}

Game.prototype.play = function() {
	frame = this.frame;
	if (frame === undefined) {
		return "You have bowled all 10 frames, Game Over"
	} else {
		bowl = this.player.bowl(frame);
		return bowl;
	};
}
