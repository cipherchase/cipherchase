import * as types from '../actions/actionTypes';

const initialState = {
  isLoggedIn: false,
  codeChallenge: `let counter = 0;
for (let i = 0; i < test.length; i++) {
  counter += 1;
}`,
  cpuSpeed: 50 + Math.random() * 50,
  score: 0,
  gameActive: false,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      };
    case types.SIGN_UP:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
      };
    default:
      return state;
  }
};

export default gameReducer;
