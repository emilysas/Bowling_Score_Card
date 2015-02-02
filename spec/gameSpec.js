describe("Game", function() {

	var frames, player, scorecard, game;

	beforeEach(function() {
		frames = [frame1 = new Frame(1), frame2 = new Frame(2), frame3 = new Frame(3), frame4 = new Frame(4), frame5 = new Frame(5), frame6 = new Frame(6), frame7 = new Frame(7), frame8 = new Frame(8), frame9 = new Frame(9), frame10 = new Frame(10)];
		player = new Player("Emily");
    scorecard = new Scorecard();
    game = new Game(player, scorecard, frames);

  });

	it("has a player", function() {
		expect(game.playerUsername).toEqual("Emily")
	});

	it("has 10 frames", function() {
		expect(game.frames.length).toEqual(10);
	})

	it("moves from frame 1 through to 10", function() {
		expect(game.currentFrame.frameNumber).toEqual(1);
		game.currentFrame.bowlsHadThisFrame = 2;
		game.frame();
		expect(game.currentFrame.frameNumber).toEqual(2);
	});

 });