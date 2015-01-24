describe("Bowling Score Card", function() {

	var game;
  var player;

  beforeEach(function() {
  	player = new Player("Emily");
  	game = new Game(player);
  });

  describe("Game", function() {

  	it("has 10 frames", function() {
  		expect(game.frames.length).toEqual(10);
  	});

  	it("moves from frame 1 through to 10", function() {
  		game.play();
  		expect(game.frames[8]).toEqual(frame9)
  	});

  	it("ends after frame 10", function() {
  		for (var i = 1; i <= 10; i++) {game.frames.shift()};
  		expect(game.play()).toEqual("You have bowled all 10 frames, Game Over");
  	});

  });

  describe("Player", function() {

    it("can hit between 0 and 10 pins with their first throw", function() {
      expect(game.play()).toBeLessThan(11);
    });

    it("can hit any remaining pins if they have a second throw", function() {
    	game.frames[0].pins = 6;
    	expect(game.play()).toBeLessThan(7);
    });

  });

  describe("Frame", function() {

  	describe("Frame 10", function() {
  		it("will allow a 3rd bowl where a player scores a spare in their second bowl", function() {

  		});
  	});

  });





});