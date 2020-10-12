import * as actionsTypes from '../actionsType';

const initialState = {
  searchCity: '',
};

export default function searchInputReducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.FETCH_CITY:
      return {
        ...state,
        searchCity: action.searchCity,
      };

    default:
      return state;
  }
}
