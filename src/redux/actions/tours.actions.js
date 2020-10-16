import * as actionsTypes from '../actionsType';

export const getToursAsync = result => ({
  type: actionsTypes.FETCH_TOURS_SUCCESS,
  tours: result,
});

export const orderToursByPriceDesc = result => ({
  type: actionsTypes.ORDER_TOURS_BY_PRICE_DESC,
  tours: result,
});

export const orderToursByPriceAsc = result => ({
  type: actionsTypes.ORDER_TOURS_BY_PRICE_ASC,
  tours: result,
});

export const orderToursByDescriptionDesc = result => ({
  type: actionsTypes.ORDER_TOURS_BY_DESCRIPTION_DESC,
  tours: result,
});

export const orderToursByDescriptionAsc = result => ({
  type: actionsTypes.ORDER_TOURS_BY_DESCRIPTION_ASC,
  tours: result,
});

export const getTourDetailAsync = result => ({
  type: actionsTypes.FETCH_TOUR_DETAIL_SUCCESS,
  tours: result,
});
