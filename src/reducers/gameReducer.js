import * as types from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  codeChallenge: 'let counter = 0;<br/>for (let i = 0; i < test.length; i++) {<br/>&nbsp;&nbsp;counter += 1;<br/>}',
  cpuSpeed: 50 + Math.random() * 50,
  score: 0,
  gameActive: false,
  charIndex: 0,
  user: null,
};

const gameReducer = (state = initialState, action) => {
  let charIndex;

  switch (action.type) {
    case types.MOVE_CHAR:
      charIndex = state.charIndex + action.payload.num;
      return { ...state, charIndex };

    case types.LOG_IN:
      return { ...state, user: action.payload };

    case types.SIGN_UP:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default gameReducer;
