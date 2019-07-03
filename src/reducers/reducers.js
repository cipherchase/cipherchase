import { combineReducers } from 'redux';
import gameReducer from './gameReducer';

const reducers = combineReducers({
  games: gameReducer,
});

export default reducers;
