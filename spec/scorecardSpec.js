describe("Bowling Score Card", function() {

	var frame;
	 // var game;
//   var player;
//   var scorecard;

  beforeEach(function() {
  	frame = new Frame();
  	// player = new Player("Emily");
  	// game = new Game(player, scorecard = new ScoreCard(), [frame1 = new Frame(), frame2 = new Frame(), frame3 = new Frame(), frame4 = new Frame(), frame5 = new Frame(), frame6 = new Frame(), frame7 = new Frame(), frame8 = new Frame(), frame9 = new Frame(), frame10 = new Frame()]);
  });

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

//   describe("Player", function() {

//     it("can hit between 0 and 10 pins with their first throw", function() {
//       expect(game.play()).toBeLessThan(11);
//     });

//     it("can hit any remaining pins if they have a second throw", function() {
//     	game.frame.pins = 6;
//     	expect(game.play()).toBeLessThan(7);
//     });

//   });

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


});