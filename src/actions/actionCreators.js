import * as types from './actionTypes';

/* example of an action creator

  export const actionName = (arg) => ({
    type: types.ACTION ,
    payload: arg,
  })

*/

// eslint-disable-next-line import/prefer-default-export
export const moveChar = num => ({
  type: types.MOVE_CHAR,
  payload: { num },
});
