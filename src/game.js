var Game = function(player, frames = []) {
	this.player = player;
	this.frames = frames;
	this.frame = frames[0] || undefined;
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