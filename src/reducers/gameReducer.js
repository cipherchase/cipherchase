import * as types from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  codeChallenge: 'let counter = 0;<br/>for (let i = 0; i < test.length; i++) {<br/> &nbsp; &nbsp; counter += 1;<br/>}',
  cpuSpeed: 50 + Math.random() * 50,
  score: 0,
  gameActive: false,
  charIndex: 0,
  isWrongChar: false,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.MOVE_CHAR:

      return { ...state, charIndex: state.charIndex + 1 };

    default:
      return state;
  }
};

export default gameReducer;
