const { beforeEach } = require('@jest/globals');
const BowlingGame = require('./index');

describe('Bowling Game tests', () => {

  let game;
  beforeEach(() => {
    game = new BowlingGame();
  });

  test('should return 0 for a game of all zeros', () => {

    const scoreCard = '-- -- -- -- -- -- -- -- -- --';
    game.roll(scoreCard);

    expect(game.score).toEqual(0);
  });

  test('should return 20 for a game of all ones', () => {

    const scoreCard = '11 11 11 11 11 11 11 11 11 11';
    game.roll(scoreCard);

    expect(game.score).toEqual(20);
  });

  test('should return the correct score when a spare is rolled', () => {

    const scoreCard = '5/ 1- -- -- -- -- -- -- -- --';
    game.roll(scoreCard);

    expect(game.score).toEqual(12);
  });

  test('should return the correct score when a strike is rolled', () => {

    const scoreCard = 'X 11 -- -- -- -- -- -- -- --';
    game.roll(scoreCard);

    expect(game.score).toEqual(14);
  });
});



