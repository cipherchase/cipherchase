import * as types from './actionTypes';

/* example of an action creator

  export const actionName = (arg) => ({
    type: types.ACTION ,
    payload: arg,
  })

*/

export const increment = () => {
  return {
    type: "INCREMENT",
  }
}