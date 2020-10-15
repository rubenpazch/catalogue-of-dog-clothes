import * as actionsTypes from '../actionsType';

export const getToursAsync = result => ({
  type: actionsTypes.FETCH_TOURS_SUCCESS,
  tours: result,
});

export const orderToursByPrice = result => ({
  type: actionsTypes.ORDER_TOURS_BY_PRICE,
  tours: result,
});

/* const getGetToken = result => ({
  type: actionsTypes.FETCH_TOKEN,
  token: result,
}); */
/*
export default {
  getToursAsync,
  orderToursByPrice,
};
*/
