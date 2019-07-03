import * as types from './actionTypes';

/* example of an action creator

  export const actionName = (arg) => ({
    type: types.ACTION ,
    payload: arg,
  })

*/
export const login = (username, password) => (dispatch) => {
  // replace the url to login route
  // console.log(username, password);
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      username: 'davidkim',
      email: 'davidkim@email.com',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then((json) => {
      // simulate user authentication
      const isAuthenticated = json.email === 'davidkim@email.com';
      dispatch({ type: types.SIGN_UP, payload: { isLoggedIn: isAuthenticated } });
    });
};

export const signup = (username, password, firstname, lastname, email) => (dispatch) => {
  // console.log(username, password, firstname, lastname, email);
  // replace the fetch url to signup route
  fetch('https://jsonplaceholder.typicode.com/users', {
    method: 'POST',
    body: JSON.stringify({
      username: 'davidkim',
      email: 'davidkim@email.com',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(response => response.json())
    .then((json) => {
      // simulate user authentication
      const isAuthenticated = json.email === 'davidkim@email.com';
      dispatch({ type: types.SIGN_UP, payload: { isLoggedIn: isAuthenticated } });
    });
};
