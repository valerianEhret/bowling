
class BowlingGame {
  constructor() {
    this.rolls = [];
  }

  roll(scoreCard) {
    for (let i = 0; i < scoreCard.length; i++) {
      if (scoreCard[i] === ' ') {
      } else if (scoreCard[i] === '-') {
        this.rolls.push(0);
      } else if (scoreCard[i] === '/') {
        this.rolls.push(10 - +scoreCard[i - 1]);
      } else {
        this.rolls.push(+scoreCard[i]);
      }
    }
  }

  get score() {
    let score = 0;
    let rollIndex = 0;

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      const frameScore = this.rolls[rollIndex] + this.rolls[rollIndex + 1];

      if (this._isSpare(frameScore)) {
        score += this._spareBonus(rollIndex);

      } else {
        score += frameScore;
      }
      rollIndex += 2;
    }
    return score;
  }

  _isSpare(frameScore) {
    return frameScore === 10;
  }
  _spareBonus(rollIndex) {
    return 10 + this.rolls[rollIndex + 2];
  }
}

module.exports = BowlingGame;