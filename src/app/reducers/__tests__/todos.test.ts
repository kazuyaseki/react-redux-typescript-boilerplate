import { todoReducer, initialState } from '../todos';

test('init', () => {
  expect(todoReducer(initialState, { type: 'CLEAR_ALL' })).toEqual(initialState);
});
