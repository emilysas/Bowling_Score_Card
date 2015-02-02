describe("Scorecard", function() {

	var frames, player, scorecard, game;

	beforeEach(function() {
		frames = [frame1 = new Frame(1), frame2 = new Frame(2), frame3 = new Frame(3), frame4 = new Frame(4), frame5 = new Frame(5), frame6 = new Frame(6), frame7 = new Frame(7), frame8 = new Frame(8), frame9 = new Frame(9), frame10 = new Frame(10)];
		player = new Player("Emily");
		scorecard = new Scorecard();
		game = new Game(player, scorecard, frames);
  });

		// it("will know the score from the first bowl in each frame", function() {
  // 	game.play();
  // 	expect(scorecard.card[0][0]).toEqual(10 - game.currentFrame.pins)
  // 	});

  // 	it("will know the score from the second bowl in each frame", function() {
  // 		game.play();
  // 		game.play();
  // 		game.play();
  // 		expect(game.scorecard.length).toBeGreaterThan(1)
  // 	});

  // 	it("will calculate the total score of each frame", function() {
  // 		game.calculateScore(3);
  // 		game.calculateScore(2);
  // 		expect(game.scorecard[0][0]).toEqual(3);
  // 		expect(game.scorecard[0][1]).toEqual(2);
  // 		expect(game.scorecard[0][2]).toEqual(5);
  // 	});

  // 	it("when a strike occurs, it will not calculate the score until after the next frame", function() {
  // 		game.currentFrame.pins = 0;
  // 		game.currentFrame.bowlsHadThisFrame = 1;
  // 		game.calculateScore(10);
  // 		expect(game.scorecard[0][2]).toEqual("-");
  // 		game.currentFrame = game.frames[1];
  // 		game.calculateScore(5);
  // 		game.calculateScore(3)
  // 		expect(game.scorecard[0][2]).toEqual(18);
  // 	});

  // 	it("when a strike is followed by another strike, it still will calculate the score", function() {
  // 		game.currentFrame.pins = 0;
  // 		game.currentFrame.bowlsHadThisFrame = 1;
  // 		game.calculateScore(10);
  // 		expect(game.scorecard[0][2]).toEqual("-");
  // 		game.currentFrame = game.frames[1];
  // 		game.currentFrame.pins = 0;
  // 		game.currentFrame.bowlsHadThisFrame = 1;
  // 		game.calculateScore(10);
  // 		expect(game.scorecard[0][2]).toEqual(20);
  // 	});

  //   it("can calculate a running total", function() {
  //     game.calculateScore(4);
  //     game.calculateScore(3);
  //     game.currentFrame = game.frames[1];
  //     game.calculateScore(5);
  //     game.calculateScore(2);
  //     expect(game.totalScore).toEqual(14)
  //   })

	});