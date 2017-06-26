import { combineReducers } from 'redux';
import counter from './counter';

const rootReducer = function rootReducer(asyncReducers = {}) {
  return combineReducers({
    counter,
    ...asyncReducers,
  });
};

export default rootReducer;
