import GameCreationController from './gameCreation.controller';
import GameCreationService from './gameCreation.service';

describe('GameCreation controller', () => {
  let gameCreationController: GameCreationController;
  let gameCreationService: GameCreationService;

  beforeEach(() => {
    gameCreationService = new GameCreationService();
    gameCreationController = new GameCreationController(gameCreationService);
  });

  it('should be defined', () => {
    expect(gameCreationController).toBeDefined();
  });

  it('should create a new game', () => {
    const game = { name: 'Game 1', description: 'This is a game' };
    expect(gameCreationController.createGame(game)).toBe(
      'This action creates a new game',
    );
  });

  it("should call the service's createGame method", () => {
    const game = { name: 'Game 1', description: 'This is a game' };
    const createGameSpy = jest.spyOn(gameCreationService, 'createGame');
    gameCreationController.createGame(game);
    expect(createGameSpy).toHaveBeenCalledWith(game);
  });
});
