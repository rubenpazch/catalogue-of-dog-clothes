import * as actionsTypes from '../actionsType';

const initialState = {
  tours: [],
  loading: false,
  token: '',
};

export default function toursReducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.FETCH_TOURS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionsTypes.FETCH_TOURS_SUCCESS:
      return {
        ...state,
        tours: action.tours,
        loading: false,
      };
    case actionsTypes.ORDER_TOURS_BY_PRICE:
      return {
        ...state,
        tours: action.tours.sort( function(a, b) { return b.price.amount - a.price.amount }),
        loading: false,
      };
    case actionsTypes.FETCH_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
}
