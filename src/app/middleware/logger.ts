import { Middleware } from 'redux';

export const logger: Middleware = (store) => (next) => (action) => {
  if (process.env.NODE_ENV !== 'production') {
    // tslint:disable-next-line
    console.log(action);
  }
  return next(action);
};
