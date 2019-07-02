import * as types from '../actions/actionTypes';

const initialState = {
  count: 1,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return { ...state, count: state.count + 1 }

    default:
      return state;
  }
  return state;
};

export default gameReducer;
