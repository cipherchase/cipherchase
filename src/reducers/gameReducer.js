import * as types from '../actions/actionTypes';

const initialState = {
  // codeChallenge: 'let counter = 0;<br/>for (let i = 0; i < test.length; i++) {<br/>&nbsp;&nbsp;counter += 1;<br/>}',
  codeChallenge: 'Hello There',
  playerPosition: 0,
  cpuPosition: 0,
  playerSpeed: 800 / 11,
  // cpuSpeed: Math.random() * 5 + 2,
  cpuSpeed: 10,
  wins: 0,
  winner: '',
  gameActive: true,
  charIndex: 0,
  user: false,
};

const gameReducer = (state = initialState, action) => {
  let charIndex;
  let playerPosition;
  let cpuPosition;
  let winner;
  let gameActive;

  switch (action.type) {
    case types.MOVE_CHAR:
      charIndex = state.charIndex + action.payload.num;
      playerPosition = state.playerPosition + state.playerSpeed * action.payload.num;
      gameActive = true;
      if (playerPosition >= 800) {
        winner = 'Player';
        gameActive = false;
        console.log(winner);
      }
      return {
        ...state,
        charIndex,
        playerPosition,
        winner,
        gameActive,
      };

    case types.MOVE_CPU:
      cpuPosition = state.cpuPosition + state.cpuSpeed;
      gameActive = true;
      if (cpuPosition >= 800) {
        winner = 'CPU';
        gameActive = false;
        console.log(winner);
      }
      return {
        ...state,
        cpuPosition,
        winner,
        gameActive,
      };

    case types.LOG_IN:
      return { ...state, user: action.payload };

    case types.SIGN_UP:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default gameReducer;
