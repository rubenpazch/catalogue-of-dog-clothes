import {
  loading,
  incrementCounter,
  decrecrementCounter,
} from '../actions/increment.actions';

export function incrementCounterAsync() {
  return dispatch => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(incrementCounter());
    }, 5000);
  };
}

export function decrecrementCounterAsync() {
  return dispatch => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(decrecrementCounter());
    }, 5000);
  };
}
