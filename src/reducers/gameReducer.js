import * as types from '../actions/actionTypes';
import state from '../state/mockState';

const initialState = state;

const gameReducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

export default gameReducer;
