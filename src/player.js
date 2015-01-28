var Player = function(name) {
	this.name = name;
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