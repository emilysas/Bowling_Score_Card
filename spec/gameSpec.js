describe("Game", function() {

	var game;

	beforeEach(function() {
		player = new Player("Emily")
		game = new Game(player)
  });

	it("has a player", function() {
		expect(game.playerUsername).toEqual("Emily")
	});

	it("ends after 10 frames", function() {
		expect(game.frames.length).toEqual(10);
	})

//   	it("moves from frame 1 through to 10", function() {
//   		game.play();
//   		expect(game.frames[8]).toEqual(frame9);
//   	});

//   	it("ends after frame 10", function() {
//   		game.frame.frameNumber = 10;
//       game.frame.bowl = 3;
//   		expect(game.play()).toEqual("You have bowled all 10 frames, Game Over");
//   	});

  });