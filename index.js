
class BowlingGame {
  constructor() {
    this.rolls = [];
  }
  roll(pinsDown) {
    this.rolls.push(pinsDown);
  }
  get score() {
    let score = 0;
    let rollIndex = 0;

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];

      if (frameScore === 10) {
        score += 10 + this.rolls[rollIndex + 2];

      } else {
        score += frameScore;
      }
      rollIndex += 2;
    }
    return score;
  }
}

module.exports = BowlingGame;