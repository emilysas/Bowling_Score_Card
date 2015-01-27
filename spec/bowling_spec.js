describe("Bowling Score Card", function() {

	var game;
  var player;

  beforeEach(function() {
  	player = new Player("Emily");
  	game = new Game(player, frames = [frame1 = new Frame(), frame2 = new Frame(), frame3 = new Frame(), frame4 = new Frame(), frame5 = new Frame(), frame6 = new Frame(), frame7 = new Frame(), frame8 = new Frame(), frame9 = new Frame(), frame10 = new Frame()]);
  });

  describe("Game", function() {

  	it("has 10 frames", function() {
  		expect(game.frames.length + 1).toEqual(10);
  	});

  	it("moves from frame 1 through to 10", function() {
  		game.play();
  		expect(game.frames[8]).toEqual(frame9);
  	});

  	it("ends after frame 10", function() {
  		game.frame = undefined;
  		expect(game.play()).toEqual("You have bowled all 10 frames, Game Over");
  	});

  });

  describe("Player", function() {

    it("can hit between 0 and 10 pins with their first throw", function() {
      expect(game.play()).toBeLessThan(11);
    });

    it("can hit any remaining pins if they have a second throw", function() {
    	game.frame.pins = 6;
    	expect(game.play()).toBeLessThan(7);
    });

  });

  describe("Frame", function() {

  	it("will keep track of the score for the current frame", function() {
  		game.play();
  		game.play();
  		expect(game.frame.score).toEqual(10 - Number(game.frame.pins));
  	});

  	describe("Frame 10", function() {
  		// it("will allow a 3rd bowl where a player scores a spare in their second bowl", function() {

  		// });
  	});

  });


});