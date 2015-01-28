describe("Bowling Score Card", function() {

	var frame;
	var player; 

  beforeEach(function() {
  	frame = new Frame(1);
  	player = new Player("Emily");
  });

  describe("Player", function() {

  	it("has a name", function() {
  		expect(player.username).toEqual("Emily")
  	});

    it("can hit between 0 and 10 pins with their first throw", function() {
      expect(player.bowl(frame)).toBeLessThan(11);
    })

    it("can hit any remaining pins if they have a second throw", function() {
    	var pinsStandingAfterFirstBowl = 10 - player.bowl(frame);
    	var pinsStandingAfterSecondBowl = pinsStandingAfterFirstBowl - player.bowl(frame);
    	expect(pinsStandingAfterSecondBowl).toBeLessThan(pinsStandingAfterFirstBowl);
    });

  });

  describe("Frame", function() {

  	it("will know how many pins are standing", function() {
  		expect(frame.pins).toEqual(10)
  	});

  	it ("will allow a maximum of 2 bowls (excl. frame10)", function () {
  		frame.bowlsHadThisFrame = 0;
  		expect(frame.isAllowingBowl()).toEqual(true);
  		frame.bowlsHadThisFrame = 1;
  		expect(frame.isAllowingBowl()).toEqual(true);
  		frame.bowlsHadThisFrame = 2; 
  		expect(frame.isAllowingBowl()).toEqual(false);
  	})

  	it("knows which frame number it is", function() {
  		expect(frame.frameNumber).toEqual(1);
  	});

  	it("knows if a strike has occurred", function() {
  		frame.bowlsHadThisFrame = 1;
  		frame.pins = 0;
  		expect(frame.isStrikeScored()).toEqual(true)
  	});

  	it("knows if a spare has occurred", function() {
  		frame.bowlsHadThisFrame = 2;
  		frame.pins = 0;
  		expect(frame.isSpareScored()).toEqual(true)
  	});

//   	describe("Frame 10", function() {
//   		it("will allow a 3rd bowl where a player scores a spare or strike in their second bowl", function() {
//   			game.frames = [frame10 = new Frame()]
//         game.frame.bowl = 2;
//         game.frame.pins = 0;
//   			expect(game.play()).not.toEqual("You have bowled all 10 frames, Game Over")
//   		});

//   		it("will not allow a 3rd bowl where a player doesn't score a spare or a strike in their second bowl", function() {
//   			game.frames = [frame10 = new Frame()]
//   			game.frame.bowl = 2;
//   			game.frame.pins = 3;
//         game.frame.frameNumber = 10;
//   			expect(game.play()).toEqual("You have bowled all 10 frames, Game Over")
//   		});

//       it("will reset the pins after a strike or spare", function() {
//         game.frames = [frame10 = new Frame()];
//         game.frame.pins = 0;
//         game.frame.resetPins();
//         expect(game.frame.pins).toEqual(10);
//       })
//   	});

  });

//   describe("ScoreCard", function() {
//     it("will add the score from each frame to the scorecard", function() {
//       game.play();
//       game.play();
//       expect(game.scorecard.total).toEqual(game.frame.score)
//     });
//   })

//   describe("Game", function() {

//   	it("has 10 frames", function() {
//   		expect(game.frames.length).toEqual(10);
//   	});

//   	it("moves from frame 1 through to 10", function() {
//   		game.play();
//   		expect(game.frames[8]).toEqual(frame9);
//   	});

//   	it("ends after frame 10", function() {
//   		game.frame.frameNumber = 10;
//       game.frame.bowl = 3;
//   		expect(game.play()).toEqual("You have bowled all 10 frames, Game Over");
//   	});

//   });

});