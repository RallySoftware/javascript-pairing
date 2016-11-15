import { GameOfLife } from '../GameOfLife';

describe("GameOfLife", function() {
  let game;
  beforeEach(() => {
    game = new GameOfLife();
  });

  it('is created', () => {
    expect(game).to.exist;
  });
});
