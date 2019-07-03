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
  playerCharIndex: -1,
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.MOVE_CAR:
      console.log('Moving car');
      return { ...state, playerCharIndex: state.playerCharIndex + 1 };

    default:
      return state;
  }
};

export default gameReducer;
