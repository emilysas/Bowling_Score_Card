// describe("Frame", function() {
//
// 	var frame;
//
// 	beforeEach(function() {
//   	frame = new Frame(1);
//   	frame10 = new Frame(10);
//   });
//
//
// 		describe("Frames 1-9", function () {
//
// 	  	it("will know how many pins are standing", function() {
// 	  		expect(frame.pins).toEqual(10)
// 	  	});
//
// 	  	it ("will allow a maximum of 2 bowls (excl. frame10)", function () {
// 	  		frame.bowlsHadThisFrame = 0;
// 	  		expect(frame.isBowlAllowed()).toEqual(true);
// 	  		frame.bowlsHadThisFrame = 1;
// 	  		expect(frame.isBowlAllowed()).toEqual(true);
// 	  		frame.bowlsHadThisFrame = 2;
// 	  		expect(frame.isBowlAllowed()).toEqual(false);
// 	  	})
//
// 	  	it("knows which frame number it is", function() {
// 	  		expect(frame.frameNumber).toEqual(1);
// 	  	});
//
// 	  	it("knows if a strike has occurred", function() {
// 	  		frame.bowlsHadThisFrame = 1;
// 	  		frame.pins = 0;
// 	  		expect(frame.isStrikeScored()).toEqual(true)
// 	  	});
//
// 	  	it("knows if a spare has occurred", function() {
// 	  		frame.bowlsHadThisFrame = 2;
// 	  		frame.pins = 0;
// 	  		expect(frame.isSpareScored()).toEqual(true)
// 	  	});
//
// 	  	it("will not allow another bowl after a strike", function() {
// 	  		frame.bowlsHadThisFrame = 1;
// 	  		frame.pins = 0;
// 	  		expect(frame.isBowlAllowed()).toEqual(false);
// 	  	});
//
// 	  });
//
// 		describe("Last Frame", function() {
//
// 			it("unless a strike or spare is scored, a player only has 2 bowls", function() {
// 				frame10.bowlsHadThisFrame = 0;
// 	  		expect(frame10.isBowlAllowed()).toEqual(true);
// 	  		frame10.bowlsHadThisFrame = 1;
// 	  		expect(frame10.isBowlAllowed()).toEqual(true);
// 	  		frame10.pins = 1;
// 	  		frame10.bowlsHadThisFrame = 2;
// 	  		expect(frame10.isBowlAllowed()).toEqual(false);
// 			});
//
// 			it("will allow a 3rd bowl where a player scores a spare or strike in their second bowl", function() {
// 				frame10.pins = 0;
// 				frame10.bowlsHadThisFrame = 2;
// 	  		expect(frame10.isBowlAllowed()).toEqual(true);
// 			});
//
// 	    it("will reset the pins after a strike or spare", function() {
// 				frame10.pins = 0;
// 				frame10.bowlsHadThisFrame = 2;
// 	  		frame10.resetPins();
// 	  		expect(frame10.pins).toEqual(10);
// 	    });
//
// 	  });
//
// });
