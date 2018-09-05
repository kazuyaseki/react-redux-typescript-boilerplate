import { fetchHello, HelloResponse } from '../utils/api';
import actionCreatorFactory from 'typescript-fsa';
import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

const actionCreator = actionCreatorFactory();

export const helloWorldActions = actionCreator.async<
  { foo: number }, // parameter type
  { bar: number }, // success type
  { code: number } // error type
>('DO_SOMETHING');

// この辺s2sで生成する
export enum ActionType {
  request = 'HELLO_WORLD_REQUEST',
  success = 'HELLO_WORLD_SUCCESS',
  failure = 'HELLO_WORLD_FAILURE'
}

interface IState {
  type: string;
  payload: {
    params: { foo: number };
    result?: { bar: number };
    error?: { code: number };
  };
}

// export const helloWorld: ActionCreator<
//   ThunkAction<Promise<Action>, IState, void, Action<string>>
// > = (hello: string) => {
//   return async (dispatch: Dispatch<IState>): Promise<Action> => {
//     try {
//       const result = await fetchHello(hello);
//       return dispatch(helloWorldActions.done({ params: { foo: 2 }, result: { bar: 1 } }));
//     } catch (e) {
//       return dispatch(helloWorldActions.failed({ params: { foo: 2 }, error: { code: 1 } }));
//     }
//   };
// };

export function helloWorld(hello: string) {
  return async (dispatch: ThunkDispatch<IState, void, Action>): Promise<Action> => {
    try {
      const result = await fetchHello(hello);
      return dispatch(helloWorldActions.done({ params: { foo: 2 }, result: { bar: 1 } }));
    } catch (error) {
      return dispatch(helloWorldActions.failed({ params: { foo: 2 }, error: { code: 1 } }));
    }
  };
}

// export const helloWorld = (hello: string) => (dispatch: any) => {
//   helloWorldActions.started({ foo: 1 });

//   fetchHello(hello)
//     .then((res: HelloResponse) => {
//       helloWorldActions.done({ params: { foo: 2 }, result: { bar: 1 } });
//     })
//     .catch((error) =>
//       dispatch(helloWorldActions.failed({ params: { foo: 2 }, error: { code: 1 } }))
//     );
// };
