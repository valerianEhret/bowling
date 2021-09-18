
class BowlingGame {
  constructor() {
    this.currentScore = 0;
  }
  roll(pinsDown) {
    this.currentScore += pinsDown;
  }
  get score() {
    return this.currentScore;
  }
}

module.exports = BowlingGame;