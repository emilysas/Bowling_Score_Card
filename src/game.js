var Game = function(player, frames = []) {
	this.player = player;
	this.playerUsername = player.username;
	this.frames = frames
	this.currentFrame = frames[0]
}

Game.prototype.play = function() {
	var frame = this.frame();
	return player.bowl(frame);
}

Game.prototype.frame = function() {
	if(this.currentFrame.isBowlAllowed()) {
		return this.currentFrame;
	} else {
		return this.nextFrame();
	}
};

Game.prototype.nextFrame = function() {
	this.frames.shift();
	this.currentFrame = this.frames[0];
	return this.currentFrame;
}
