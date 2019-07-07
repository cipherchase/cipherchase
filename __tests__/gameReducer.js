import gameReducer from '../src/reducers/gameReducer';


describe('Game Reducer Test ', () => {

  let state;

  beforeEach(() => {
    state = {
      codeChallenge: '',
      playerPosition: 0,
      cpuPosition: 0,
      playerSpeed: 0,
      cpuSpeed: 0,
      intervalID: null,
      wins: 0,
      message: 'Play Now!',
      gameActive: false,
      charIndex: 0,
      isAuthenticated: false,
      username: null,
      password: null,
    }
  })

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(gameReducer(undefined, { type: undefined })).toEqual(state);
    });
  });

  describe('unrecognized action types', () => {
    it('should return original state without any duplication,', () => {
      const action = { type: 'asdfghjkl' };
      expect(gameReducer(state, action)).toBe(state);
    });
  });


});

