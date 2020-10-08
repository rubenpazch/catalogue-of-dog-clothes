import * as actionsTypes from '../actionsType';

export function loading() {
  return ({
    type: actionsTypes.LOADING,
  });
}

export function incrementCounter() {
  return ({
    type: actionsTypes.INCREMENT,
  });
}

export function decrecrementCounter() {
  return ({
    type: actionsTypes.DECREMENT,
  });
}
