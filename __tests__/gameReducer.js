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

  describe('MOVE_PLAYER', () => {
    const action = { type: 'MOVE_PLAYER', payload: { num: 5 } };

    it('Game is active', () => {
      const { gameActive } = gameReducer(state, action);
      expect(gameActive).toBe(true);
    });

    it('Character Index should increase by 5', () => {
      const { charIndex } = gameReducer(state, action);
      expect(charIndex).toBe(state.charIndex + 5);
    });

    it('Player\'s position should increase by the playerSpeed', () => {
      let randomNum = Math.random() * 10
      state.playerSpeed = randomNum;
      const { playerPosition } = gameReducer(state, action);
      expect(playerPosition).toBe(state.playerPosition + randomNum);
    });

    it('When player\'s position is greater than 300, game becomes inactive and win increases by 1', () => {
      state.playerPosition = 300;
      const { gameActive, wins } = gameReducer(state, action);
      expect(gameActive).toBe(false);
      expect(wins).toBe(state.wins + 1);
    });
  });

  describe('MOVE_CPU', () => {
    const action = { type: 'MOVE_CPU' };

    it('CPU\'s position should increase by the cpuSpeed', () => {
      let randomNum = Math.random() * 10
      state.cpuSpeed = randomNum;
      const { cpuPosition } = gameReducer(state, action);
      expect(cpuPosition).toBe(state.cpuPosition + randomNum);
    });

    it('When CPU\'s position is greater than 300, game becomes inactive', () => {
      state.cpuPosition = 300;
      const { gameActive } = gameReducer(state, action);
      expect(gameActive).toBe(false);
    });

  });


});

// MOVE_CPU
// SET_INTERVAL_ID
// PLAY_GAME
// LOG_IN
// SIGN_UP
// SET_USERNAME
// SET_PASSWORD