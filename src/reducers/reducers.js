import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import gameReducer from './gameReducer';

const reducers = combineReducers({
  games: gameReducer,
  form: formReducer,
});

export default reducers;
