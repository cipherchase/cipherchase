import * as types from '../actions/actionTypes';

const initialState = {
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
};

const gameReducer = (state = initialState, action) => {
  let charIndex;
  let playerSpeed;
  let playerPosition;
  let cpuPosition;
  let message;
  let gameActive;
  let newWins;
  let codeChallenge;
  let i;
  let codeLength;
  let newCPUSpeed;

  switch (action.type) {

    case types.PLAY_GAME:
      newCPUSpeed = action.payload.cpuSpeed;
      codeChallenge = action.payload.challenge;
      i = 0;
      codeLength = 0;
      while (i < codeChallenge.length - 1) {
        if (codeChallenge.substring(i, i + 5) === '<br/>') i += 5;
        else if (codeChallenge.substring(i, i + 6) === '&nbsp;') i += 6;
        else if (codeChallenge.substring(i, i + 12) === '&nbsp;&nbsp;') i += 12;
        else i += 1;
        codeLength += 1;
      }
      playerSpeed = 300 / codeLength;
      return {
        ...initialState,
        intervalID: state.intervalID,
        wins: state.wins,
        gameActive: true,
        username: state.username,
        isAuthenticated: true,
        codeChallenge,
        cpuSpeed: newCPUSpeed,
        playerSpeed,
      };

    case types.MOVE_PLAYER:
      charIndex = state.charIndex + action.payload.num;
      playerPosition = state.playerPosition + state.playerSpeed;
      gameActive = true;
      newWins = state.wins;
      message = '=W=';
      if (playerPosition >= (300 - 2)) {
        message = 'Player Wins';
        newWins += 1;
        gameActive = false;
      }
      return {
        ...state,
        charIndex,
        playerPosition,
        message,
        gameActive,
        wins: newWins,
      };

    case types.MOVE_CPU:
      cpuPosition = state.cpuPosition + state.cpuSpeed;
      gameActive = true;
      message = 'uWu';
      if (cpuPosition >= (300 - 1)) {
        message = 'CPU Wins!';
        gameActive = false;
      }
      return {
        ...state,
        cpuPosition,
        message,
        gameActive,
      };

    case types.SET_INTERVAL_ID:
      return { ...state, intervalID: action.payload.intervalID };

    case types.LOG_IN:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        username: action.payload.username,
        wins: action.payload.score,
      };

    case types.SIGN_UP:
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        username: action.payload.username,
        wins: action.payload.score,
      };

    case types.SET_USERNAME:
      return {
        ...state,
        username: action.payload.username,
      };

    case types.SET_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };

    default:
      return state;
  }
};

export default gameReducer;
