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

  test('should return the correct score when a spare is rolled', () => {

    game.roll(5);
    game.roll(5);
    game.roll(1);
    rollMany(17, 0);

    expect(game.score).toEqual(12);
  });

  function rollMany(times, pinsDown) {
    for (let i = 0; i < times; i++) {
      game.roll(pinsDown);
    }
  }

});



