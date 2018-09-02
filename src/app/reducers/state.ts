import { TodoModel } from 'app/models';
import { RouterState } from 'react-router-redux';

export interface RootState {
  todos: RootState.TodoState;
  helloWorld: RootState.HelloState;
  loading: RootState.LoadingState;
  router: RouterState;
}

export namespace RootState {
  export type TodoState = TodoModel[];
  export type HelloState = string;
  export interface LoadingState {
    [key: string]: boolean;
  }
}
