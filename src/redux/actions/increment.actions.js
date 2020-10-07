import * as actionsTypes from '../actionsType';

export const loading = () => {
  return {
    type: actionsTypes.LOADING,
  };
};

export const incrementCounterAsync = () => ({ type: actionsTypes.INCREMENT });

export const incrementCounter = () => dispatch => {
  dispatch(loading());
  setTimeout(() => {
    dispatch(incrementCounterAsync());
  }, 5000);
};

export const decrecrementCounter = () => ({ type: actionsTypes.DECREMENT });
