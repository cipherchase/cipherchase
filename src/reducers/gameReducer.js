import * as types from '../actions/actionTypes';

const initialState = {
  codeChallenge: 'let counter = 0;<br/>for (let i = 0; i < test.length; i++) {<br/>&nbsp;&nbsp;counter += 1;<br/>}',
  playerPosition: 0,
  cpuPosition: 0,
  playerSpeed: 800 / 96,
  cpuSpeed: 5,
  score: 0,
  gameActive: false,
  charIndex: 0,
  user: false,
};

const gameReducer = (state = initialState, action) => {
  let charIndex;
  let playerPosition;
  let cpuPosition;

  switch (action.type) {
    case types.MOVE_CHAR:
      charIndex = state.charIndex + action.payload.num;
      playerPosition = state.playerPosition + state.playerSpeed * action.payload.num;
      return { ...state, charIndex, playerPosition };

    case types.MOVE_CPU:
      cpuPosition = state.cpuPosition + state.cpuSpeed;
      return { ...state, cpuPosition };

    case types.LOG_IN:
      return { ...state, user: action.payload };

    case types.SIGN_UP:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default gameReducer;
