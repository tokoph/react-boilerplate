import * as types from '../constants/ActionTypes';

export default function (state = 0, action) {
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      return state + action.count;
    case types.DECREMENT_COUNTER:
      return state - action.count;
    default:
      return state;
  }
}
