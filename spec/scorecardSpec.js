describe("Bowling Score Card", function() {

	var player;
	var scorecard;

  beforeEach(function() {
  	player = new Player()
  	scorecard = new Scorecard()

  });

  it("will know the score from the first bowl in each frame", function() {

  	expect(scorecard.frame1.roll1).toEqual(player.knockDownPins())
  });

  it("will know the score from the second bowl in each frame", function() {

  });
  // it("will add the score from each frame to the scorecard", function() {

    
  // });
 

});