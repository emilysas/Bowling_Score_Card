var ScoreCard = function(){
	this.total = 0;
	this.scorePerBowl = []
};

ScoreCard.prototype.addBowlScore = function(score) {
	this.scorePerBowl.push(score);
};
