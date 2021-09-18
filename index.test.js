const { beforeEach } = require('@jest/globals');
const BowlingGame = require('./index');

describe('Bowling Game tests', () => {

  let game;
  beforeEach(() => {
    game = new BowlingGame();
  });

  test('should return 0 for a game of all zeros', () => {

    rollMany(20, 0)

    expect(game.score).toEqual(0);
  });

  test('should return 20 for a game of all ones', () => {

    rollMany(20, 1)

    expect(game.score).toEqual(20);
  });

  function rollMany(times, pinsDown) {
    for (let i = 0; i < times; i++) {
      game.roll(pinsDown);
    }
  }

});



