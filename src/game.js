var Game = function(player, scorecard, frames = []) {
	this.player = player;
	this.frames = frames;
	this.frame = frames[0];
	this.scorecard = scorecard;
}

Game.prototype.play = function() {
	var frame
	if(this.frame.isFrameOver()) {
		this.frames.shift;
		return this.frame;
	} 
	frame = this.frame;
	if (frame.frameNumber === 10 && frame.isFrameOver() && frame.pins >= 1) {
		return "You have bowled all 10 frames, Game Over"
	} else {
		bowl = this.player.bowl(frame, this.scorecard);
		return bowl; 
	};
}