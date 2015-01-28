var Player = function(name) {
	this.username = name;
};

Player.prototype.bowl = function(frame) {
	var knockedDownPins = this.knockDownPins(frame);
	return knockedDownPins;
};

Player.prototype.knockDownPins = function(frame) {
	pinsKnockedDown = Math.floor(Math.random()*11);
	frame.pinsStanding(pinsKnockedDown);
	return pinsKnockedDown;
};
// Player.prototype.bowl = function(frame, scorecard) {
// 	var score = this.knockDownPins(frame);
// 	if (score === 10) {
// 		frame.strikeScored(scorecard);
// 	} else if (frame.bowl === 2 && frame.pins === 0) {
// 		frame.spareScored(scorecard);
// 	} else {
// 		frame.addToScore(score, scorecard)
// 	}
// 	return score;	
// };

// Player.prototype.knockDownPins = function(frame) {
// 	var knockedDownPins = Math.floor(Math.random()*(frame.pins+1));
// 	console.log(knockedDownPins);
// 	frame.pinsKnockedDown(knockedDownPins);
// 	frame.bowlNumber();
// 	return knockedDownPins;
// }