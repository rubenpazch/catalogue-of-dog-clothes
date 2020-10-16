import * as actionsTypes from '../actionsType';

const initialState = {
  tours: [],
  loading: false,
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
    case actionsTypes.ORDER_TOURS_BY_PRICE_DESC:
      return {
        ...state,
        tours: action.tours.sort((a, b) => b.price.amount - a.price.amount),
        loading: false,
      };
    case actionsTypes.ORDER_TOURS_BY_PRICE_ASC:
      return {
        ...state,
        tours: action.tours.sort((a, b) => a.price.amount - b.price.amount),
        loading: false,
      };
    case actionsTypes.ORDER_TOURS_BY_DESCRIPTION_DESC:
      return {
        ...state,
        tours: action.tours.sort((a, b) => {
          if (a.name < b.name) {
            return 1;
          }
          if (a.name > b.name) {
            return -1;
          }
          return 0;
        }),
        loading: false,
      };
    case actionsTypes.ORDER_TOURS_BY_DESCRIPTION_ASC:
      return {
        ...state,
        tours: action.tours.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        }),
        loading: false,
      };
    default:
      return state;
  }
}
