const BowlingGame = require('./index');

test('should return 0 for a game of all zeros', () => {

  game = new BowlingGame();

  for (let i = 0; i < 20; i++) {
    game.roll(0);
  }

  expect(game.score).toEqual(0);
});