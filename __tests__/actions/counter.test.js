import {
  incrementCounter,
  decrementCounter,
  incrementCounterAsync,
  decrementCounterAsync,
 } from '../../src/actions/counter';

test('test counter increment action with default count', () => {
  expect(incrementCounter()).toEqual({
    count: 1,
    type: 'INCREMENT_COUNTER',
  });
});

test('test counter increment action with specified count', () => {
  expect(incrementCounter(3)).toEqual({
    count: 3,
    type: 'INCREMENT_COUNTER',
  });
});

test('test counter decrement action with default count', () => {
  expect(decrementCounter()).toEqual({
    count: 1,
    type: 'DECREMENT_COUNTER',
  });
});

test('test counter decrement action with specified count', () => {
  expect(decrementCounter(4)).toEqual({
    count: 4,
    type: 'DECREMENT_COUNTER',
  });
});


test('test incrementCounterAsync()', () => {
  expect.assertions(1);
  return new Promise((resolve) => {
    incrementCounterAsync()((action) => {
      expect(action).toEqual({
        count: 1,
        type: 'INCREMENT_COUNTER',
      });

      resolve();
    });
  });
});

test('test incrementCounterAsync(6)', () => {
  expect.assertions(1);
  return new Promise((resolve) => {
    incrementCounterAsync(6)((action) => {
      expect(action).toEqual({
        count: 6,
        type: 'INCREMENT_COUNTER',
      });

      resolve();
    });
  });
});

test('test decrementCounterAsync()', () => {
  expect.assertions(1);
  return new Promise((resolve) => {
    decrementCounterAsync()((action) => {
      expect(action).toEqual({
        count: 1,
        type: 'DECREMENT_COUNTER',
      });

      resolve();
    });
  });
});

test('test decrementCounterAsync(6)', () => {
  expect.assertions(1);
  return new Promise((resolve) => {
    decrementCounterAsync(6)((action) => {
      expect(action).toEqual({
        count: 6,
        type: 'DECREMENT_COUNTER',
      });

      resolve();
    });
  });
});
