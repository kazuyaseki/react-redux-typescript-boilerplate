import { todoReducer } from './todos';
import { combineReducers } from 'redux';
import { RootState } from './state';
import { loadingReducer } from './api';
import { helloWorldReducer } from './helloWorld';
import { routerReducer, RouterState } from 'react-router-redux';

export { RootState, RouterState };

// NOTE: current type definition of Reducer in 'react-router-redux' and 'redux-actions' module
// doesn't go well with redux@4
export const rootReducer = combineReducers<RootState>({
  todos: todoReducer as any,
  helloWorld: helloWorldReducer as any,
  loading: loadingReducer as any,
  router: routerReducer as any
});
