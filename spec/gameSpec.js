describe("Game", function() {

	var game;

	beforeEach(function() {
		frames = [frame1 = new Frame(1), frame2 = new Frame(2), frame3 = new Frame(3), frame4 = new Frame(4), frame5 = new Frame(5), frame6 = new Frame(6), frame7 = new Frame(7), frame8 = new Frame(8), frame9 = new Frame(9), frame10 = new Frame(10)]
		player = new Player("Emily")
		game = new Game(player, frames)
  });

	it("has a player", function() {
		expect(game.playerUsername).toEqual("Emily")
	});

	it("has 10 frames", function() {
		expect(game.frames.length).toEqual(10);
	})

	it("moves from frame 1 through to 10", function() {
		expect(game.frames[0].frameNumber).toEqual(1);
		game.play();
		expect(game.frames[0].frameNumber).toEqual(2);
	});

//   	it("ends after frame 10", function() {
//   		game.frame.frameNumber = 10;
//       game.frame.bowl = 3;
//   		expect(game.play()).toEqual("You have bowled all 10 frames, Game Over");
//   	});

  });