/* eslint-disable arrow-parens */
import * as types from './actionTypes';

/* example of an action creator

  export const actionName = (arg) => ({
    type: types.ACTION ,
    payload: arg,
  })

*/

export const moveChar = num => ({
  type: types.MOVE_CHAR,
  payload: { num },
});

export const moveCPU = () => ({
  type: types.MOVE_CPU,
});

export const setIntervalID = intervalID => ({
  type: types.SET_INTERVAL_ID,
  payload: { intervalID },
});

export const resetGame = () => ({
  type: types.RESET_GAME,
});

export const login = (username, password) => dispatch => {
  fetch('http://localhost:3000/login', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: types.LOG_IN,
        payload: json,
      });
    });
};

export const signup = (
  username,
  password,
  firstname,
  lastname,
  email,
) => dispatch => {
  fetch('http://localhost:3000/signup', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
      firstname,
      lastname,
      email,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: types.SIGN_UP,
        payload: json,
      });
    });
};
