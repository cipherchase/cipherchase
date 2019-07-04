import * as types from '../actions/actionTypes';

const initialState = {
  // codeChallenge: 'let counter = 0;<br/>for (let i = 0; i < test.length; i++) {<br/>&nbsp;&nbsp;counter += 1;<br/>}',
  codeChallenge: '',
  playerPosition: 0,
  cpuPosition: 0,
  playerSpeed: 800 / 11, // 800 / getLen(codeChallenge)
  // cpuSpeed: Math.random() * 5 + 2,
  cpuSpeed: 5,
  intervalID: null,
  wins: 100,
  winner: '',
  gameActive: false,
  charIndex: 0,
  user: false,
};

const gameReducer = (state = initialState, action) => {
  let charIndex;
  let playerPosition;
  let cpuPosition;
  let winner;
  let gameActive;
  let wins;
  let codeChallenge;

  switch (action.type) {
    case types.GET_CHALLENGE:
      codeChallenge = action.payload.challenge;
      return { ...state, codeChallenge };

    case types.RESET_GAME:
      return {
        ...initialState,
        intervalID: state.intervalID,
        wins: state.wins,
        gameActive: true,
        user: true,
      };

    case types.MOVE_CHAR:
      charIndex = state.charIndex + action.payload.num;
      playerPosition = state.playerPosition + state.playerSpeed * action.payload.num;
      gameActive = true;
      wins = state.wins;
      if (playerPosition >= 800) {
        winner = 'Player';
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
      if (cpuPosition >= 800) {
        winner = 'CPU';
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
