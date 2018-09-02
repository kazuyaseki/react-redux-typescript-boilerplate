import { ActionType } from 'app/actions/helloWorld';

export const helloWorldReducer = (
  state: string = '',
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case ActionType.success:
      return action.payload;
    case ActionType.failure:
      return action.payload;

    default:
      return state;
  }
};
