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
    default:
      return state;
  }
}
