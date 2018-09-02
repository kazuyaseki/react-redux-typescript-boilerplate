import { fetchHello, HelloResponse } from '../utils/api';

// この辺s2sで生成する
export enum ActionType {
  request = 'HELLO_WORLD_REQUEST',
  success = 'HELLO_WORLD_SUCCESS',
  failure = 'HELLO_WORLD_FAILURE'
}

export const helloWorld = (hello: string) => (dispatch: any) => {
  dispatch({ type: ActionType.request });

  fetchHello(hello)
    .then((res: HelloResponse) => {
      dispatch({
        type: ActionType.success,
        payload: res.unko.hello
      });
    })
    .catch((error) => dispatch({ type: ActionType.failure, payload: error, error: true }));
};
