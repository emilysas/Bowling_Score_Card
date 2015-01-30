"use strict";

var Frame = function (number) {
  this.frameNumber = number;
  this.pins = 10;
  this.bowlsHadThisFrame = 0;
}

Frame.prototype = {
  isBowlAllowed: function () {  
    if (this.isLastFrame()) {
      if (this.bowlsHadThisFrame === 2) {
        return (this.isSpareScored());
      } else {
        return (this.bowlsHadThisFrame < 2);
      };
    } else if (this.bowlsHadThisFrame === 1) {
      return !(this.isStrikeScored());
    } else {
      return (this.bowlsHadThisFrame < 2)
    };
  },

  isLastFrame: function () {
    return (this.frameNumber === 10);
  },

  isStrikeScored: function () {
    return (this.bowlsHadThisFrame === 1 && this.pins === 0);
  },

  isSpareScored: function () {
    return (this.bowlsHadThisFrame === 2 && this.pins === 0); 
  },

  pinsStanding: function (pinsKnockedDown) {
    this.pins -= pinsKnockedDown;
  },

  resetPins: function () {
    this.pins = 10;
  }

}


// Frame.prototype.isBowlAllowed = function () {
//   this.isLastFrame() ? 
//           (this.bowlsHadThisFrame === 2) ? return (this.isSpareScored());
//                                          : return (this.bowlsHadThisFrame < 2);
//                      : (this.bowlsHadThisFrame === 1) ? return !(this.isStrikeScored());
//                                                       : return (this.bowlsHadThisFrame < 2);
// };
