import * as types from '../actions/actionTypes';

const initialState = {};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn
      };
    case types.SIGN_UP:
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn
      };
    default:
      return state;
  }
};

export default gameReducer;
