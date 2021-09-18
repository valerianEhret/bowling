const { beforeEach } = require('@jest/globals');
const BowlingGame = require('./index');

describe('Bowling Game tests', () => {

  let game;
  beforeEach(() => {
    game = new BowlingGame();
  });

  test('should return 0 for a game of all zeros', () => {

    game.roll(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

    expect(game.score).toEqual(0);
  });

  test('should return 20 for a game of all ones', () => {

    game.roll(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

    expect(game.score).toEqual(20);
  });

  test('should return the correct score when a spare is rolled', () => {

    game.roll(5, 5, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);

    expect(game.score).toEqual(12);
  });
});



