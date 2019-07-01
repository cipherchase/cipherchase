import { combineReducers } from 'redux';
import gameReducer from './gameReducer';

const xreducers = combineReducers({
  games: gameReducer,
})

export default reducers; 