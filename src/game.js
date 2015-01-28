var Game = function(player, scorecard, frames = []) {
	this.player = player;
	this.scorecard = scorecard;
	this.frames = frames;
	this.frame = frames[0];
}

Game.prototype.play = function() {
	var frame
	if(this.frame.isFrameOver()) {
		this.frames.shift;
		return this.frame;
	} 
	frame = this.frame;
	if (frame.frameNumber === 10 && frame.isFrameOver()) {
		return "You have bowled all 10 frames, Game Over"
	} else {
		return this.player.bowl(frame, this.scorecard);
	};
}