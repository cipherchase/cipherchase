/* eslint-disable arrow-parens */
import * as types from './actionTypes';

/* example of an action creator

  export const actionName = (arg) => ({
    type: types.ACTION ,
    payload: arg,
  })

*/

export const movePlayer = num => ({
  type: types.MOVE_PLAYER,
  payload: { num },
});

export const moveCPU = () => ({
  type: types.MOVE_CPU,
});

export const setIntervalID = intervalID => ({
  type: types.SET_INTERVAL_ID,
  payload: { intervalID },
});

export const playGame = () => dispatch => {
  console.log("here");
  fetch('http://localhost:3000/getChallenge')
    .then(res => res.json())
    .then(challenge => dispatch({
      type: types.PLAY_GAME,
      payload: {
        challenge,
        cpuSpeed: Math.random() * 2 + 0.75,
      },
    }));
};

export const login = (username, password) => dispatch => {
  fetch('http://localhost:3000/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then(response => response.json())
    .then(auth => {
      dispatch({
        type: types.LOG_IN,
        payload: {
          username: auth.username,
          isAuthenticated: auth.isAuthenticated,
          score: auth.score,
        },
      });
    });
};

export const signup = (username, password, firstname, lastname, email) => dispatch => {
  fetch('http://localhost:3000/signup', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
      firstname,
      lastname,
      email,
    }),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  })
    .then(response => response.json())
    .then(auth => {
      dispatch({
        type: types.SIGN_UP,
        payload: {
          username: auth.username,
          isAuthenticated: auth.isAuthenticated,
          score: auth.score,
        },
      });
    });
};
