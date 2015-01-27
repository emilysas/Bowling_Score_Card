describe("Bowling Score Card", function() {

	var game;
  var player;
  var scorecard;

  beforeEach(function() {
  	player = new Player("Emily");
  	game = new Game(player, frames = [frame1 = new Frame(), frame2 = new Frame(), frame3 = new Frame(), frame4 = new Frame(), frame5 = new Frame(), frame6 = new Frame(), frame7 = new Frame(), frame8 = new Frame(), frame9 = new Frame(), frame10 = new Frame()]);
    scorecard = new ScoreCard();
  });

  describe("Game", function() {

  	it("has 10 frames", function() {
  		expect(game.frames.length).toEqual(10);
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
  		it("will allow a 3rd bowl where a player scores a spare or strike in their second bowl", function() {
  			game.frames = [frame10 = new Frame()]
        game.frame.bowl = 2;
        game.frame.pins = 0;
  			expect(game.play()).not.toEqual("You have bowled all 10 frames, Game Over")
  		});

  		it("will not allow a 3rd bowl where a player doesn't score a spare or a strike in their second bowl", function() {
  			game.frames = [frame10 = new Frame()]
  			game.frame.bowl = 2;
  			game.frame.pins = 3;
  			expect(game.play()).toEqual("You have bowled all 10 frames, Game Over")
  		});

      it("will reset the pins after a strike or spare", function() {
        game.frames = [frame10 = new Frame()];
        game.frame.pins = 0;
        game.frame.resetPins();
        expect(game.frame.pins).toEqual(10);
      })
  	});

  });

  describe("ScoreCard", function() {
    it("will add the score from each frame to the scorecard", function() {
      game.play();
      game.play();
      expect(scorecard.total).toEqual(game.frame.score)
    });
  })


});