import * as types from '../actions/actionTypes';

const initialState = {
  // codeChallenge: 'let counter = 0;<br/>for (let i = 0; i < test.length; i++) {<br/>&nbsp;&nbsp;counter += 1;<br/>}',
  codeChallenge: '',
  playerPosition: 0,
  cpuPosition: 0,
  playerSpeed: 0,
  cpuSpeed: Math.random() * 2 + 2,
  cpuSpeed: 1,
  intervalID: null,
  wins: 100,
  winner: 'Play Now!',
  gameActive: false,
  charIndex: 0,
  user: false,
};

const gameReducer = (state = initialState, action) => {
  let charIndex;
  let playerSpeed;
  let playerPosition;
  let cpuPosition;
  let winner;
  let gameActive;
  let wins;
  let codeChallenge;

  switch (action.type) {
    case types.PLAY_GAME:
      codeChallenge = action.payload.challenge;
      playerSpeed = 800 / codeChallenge.length;
      return {
        ...initialState,
        intervalID: state.intervalID,
        wins: state.wins,
        gameActive: true,
        user: true,
        codeChallenge,
        playerSpeed
      };

    case types.MOVE_PLAYER:
      charIndex = state.charIndex + action.payload.num;
      playerPosition = state.playerPosition + state.playerSpeed * action.payload.num;
      gameActive = true;
      wins = state.wins;
      if (playerPosition >= (800 - 1)) {
        winner = 'Player Wins';
        wins += 1;
        gameActive = false;
      }
      return {
        ...state,
        charIndex,
        playerPosition,
        winner,
        gameActive,
        wins,
      };

    case types.MOVE_CPU:
      cpuPosition = state.cpuPosition + state.cpuSpeed;
      gameActive = true;
      if (cpuPosition >= (800 - 1)) {
        winner = 'CPU Wins!';
        gameActive = false;
      }
      return {
        ...state,
        cpuPosition,
        winner,
        gameActive,
      };

    case types.SET_INTERVAL_ID:
      return { ...state, intervalID: action.payload.intervalID };

    case types.LOG_IN:
      return { ...state, user: action.payload };

    case types.SIGN_UP:
      return { ...state, user: action.payload };

    default:

      return state;
  }
};

export default gameReducer;
