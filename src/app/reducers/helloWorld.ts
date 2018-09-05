import { Action } from 'redux';
import { isType } from 'typescript-fsa';
import { ActionType, helloWorldActions } from 'app/actions/helloWorld';

// export const helloWorldReducer = (
//   state: string = '',
//   action: { type: string; payload: string }
// ) => {
//   switch (action.type) {
//     case ActionType.success:
//       return action.payload;
//     case ActionType.failure:
//       return action.payload;

//     default:
//       return state;
//   }
// };

export const helloWorldReducer = (state: string = '', action: Action) => {
  if (isType(action, helloWorldActions.started)) {
    return { bar: action.payload.foo };
  }

  if (isType(action, helloWorldActions.done)) {
    return { bar: action.payload.result.bar };
  }

  return state;
};
