describe("Player", function() {

	var player;
	
	beforeEach(function() {
  	player = new Player("Emily");
  	frame = new Frame(1);
  });

		it("has a name", function() {
			expect(player.username).toEqual("Emily")
		});

	  it("can hit between 0 and 10 pins with their first throw", function() {
	    expect(player.bowl(frame)).toBeLessThan(11);
	  })

	  it("can hit any remaining pins if they have a second throw", function() {
	  	var pinsStandingAfterFirstBowl = 10 - player.bowl(frame);
	  	var pinsStandingAfterSecondBowl = pinsStandingAfterFirstBowl - player.bowl(frame);
	  	expect(pinsStandingAfterSecondBowl).not.toBeGreaterThan(pinsStandingAfterFirstBowl);
	  });

});