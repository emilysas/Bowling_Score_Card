describe("Bowling Score Card", function() {

  var player;
  var frame1;

  beforeEach(function() {
  	player = new Player("Emily");
  	frame1 = new Frame();
  });

  describe("Player", function() {

    it("can hit between 0 and 10 pins with their first throw", function() {
      expect(player.bowl(frame1)).toBeLessThan(11);
    });

    it("can hit any remaining pins if they have a second throw", function() {
    	frame1.pins = 6;
    	expect(player.bowl(frame1)).toBeLessThan(7);
    });

  });

  describe("Frame", function() {

  	it("ends when a player has bowled twice", function() {
  		player.bowl(frame1);
  		player.bowl(frame1);
  		expect(player.bowl(frame1)).toEqual("You've had two bowls already this frame, please start a new frame");
  	});

  	it("ends when a player scores a strike", function() {
  		frame1.pins = 0;
  		expect(player.bowl(frame1)).toEqual("All your pins are down, please start a new frame");
  	});

  });





});