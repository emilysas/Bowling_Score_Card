# Bowling_Score_Card

A score card requires:

* A Player

* Game

* 10 frames per game

		- The first 9 frames allow one or two throws
		- The 10th frame can have two to three throws (in the event of a strike or spare)


* 10 pins at the beginning of each frame

* Scores

		- A player scores 1 per pin they knock down. However, they will score bonus points if they get a strike or a spare.

		- Strike - 10 pins all at once. When player has next two throws in next frame the score is added to this one. If player has strike in next frame then the score is added from the following frame to both previous frames.

		- Spare - 10 pins over the frame.  When player has first throw in next frame the socre is added to this one.
		

NB - no easy way to do inheritance in JS. Might be good to have a lastFrame object which inherits from Frame. Could do this using (as per p.115, Haverbeke 2009):

function clone(object) {
  function cloneConstructor() {}
  cloneConstructor.prototype = object;
  return new cloneConstructor();
end

function lastFrame(){
  Frame.call(this);
}

lastFrame.prototype = clone(Frame.prototype);
lastFrame.prototype.constructor = lastFrame;
	
