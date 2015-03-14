# Bowling_Score_Card

This was my personal weekend challenge for Week 5 of Makers Academy. The task was to create a bowling score card using Javascript.

##Learning Objectives

To consolidate our understanding of Javascript, Jasmine, and jQuery

##CRC/Domain Model

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

###Game Objects
	
Frame is responsible for:

* knowing how many pins (pincount or array of pins)
* whether another bowl allowed (need to ask whether another bowl allowed)
* know whether strike or spare (expose interface to query strike or spare)

but doesn't know:

* player
* score

Player responsible for:

* knowing name/metrics
* bowling

but doesn't know:

* score

Game is responsbile for:

* players
* score
* responsbility for starting/ending
* managing running game

Scorecard: 

* calculates score

##Issues Faced

Having made a basic version of this using prototypal javascript, I decided to try to implement some of the best practices advocated by Crockford in [Javascript The Good Parts](http://it-ebooks.info/book/274/). I did this on a branch, and whilst I learned a lot and made a lot of improvements, the resulting programme does not yet work and so has not been incorporated into master. One spent a long time trying to write private methods using anonymous closure - what I didn't realise for a long time is that this wasn't conducive with the style in which I was trying to create my objects. 

##Future Intentions

To rethink the OOD, to fix the issues on the bowling_the_good_parts branch and merge this into master. To create a front end using CSS and jQuery. I would like to spend a lot longer learning about best practice in JS.


