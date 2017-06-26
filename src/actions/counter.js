import * as types from '../constants/ActionTypes';

export function incrementCounter(count = 1) {
  return {
    type: types.INCREMENT_COUNTER,
    count,
  };
}

export function incrementCounterAsync(count = 1) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: types.INCREMENT_COUNTER,
        count,
      });
    }, 1);
  };
}

export function decrementCounter(count = 1) {
  return {
    type: types.DECREMENT_COUNTER,
    count,
  };
}

export function decrementCounterAsync(count = 1) {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: types.DECREMENT_COUNTER,
        count,
      });
    }, 1);
  };
}

export default {
  incrementCounter,
  incrementCounterAsync,
  decrementCounter,
  decrementCounterAsync,
};
