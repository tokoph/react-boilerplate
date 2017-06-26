import {
 incrementCounter,
 decrementCounter,
} from '../../src/actions/counter';

import counterReducer from '../../src/reducers/counter';

test('counterReducer default', () => {
  expect(counterReducer(undefined, {})).toBe(0);
});

test('increment by 1', () => {
  expect(counterReducer(0, incrementCounter(1))).toBe(1);
});

test('increment by 0', () => {
  expect(counterReducer(2, incrementCounter(0))).toBe(2);
});

test('decrement by 1', () => {
  expect(counterReducer(0, decrementCounter(1))).toBe(-1);
});

test('decrement by 0', () => {
  expect(counterReducer(2, decrementCounter(0))).toBe(2);
});
