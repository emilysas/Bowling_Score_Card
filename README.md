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
		


Game Objects
	

	Frame is responsible for:

	* knowing how many pins (pincount or array of pins)
	* whether another bowl allowed (need to ask whether another bowl allowed)
	* know whether strike or spare (expose interface to query strike or spare)

	doesn't know:

	* player
	* score

	Player responsible for:

	* knowing name/metrics
	* bowling

	doesn't know:

	* score

	Game is responsbile for:

	* players
	* score
	* responsbility for starting/ending
	* managing running game

	Scorecard: 

	* calculates score



