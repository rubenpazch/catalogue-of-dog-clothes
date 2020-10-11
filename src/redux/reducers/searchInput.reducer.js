import * as actionsTypes from '../actionsType';

const initialState = {
  searchCity: '',
  country: '',
  city: '',
  lat: 0,
  lng: 0,
};

export default function searchInputReducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.FETCH_CITY:
      return {
        ...state,
        searchCity: action.searchCity,
        country: action.country,
        city: action.city,
        lat: action.lat,
        lng: action.lng,
      };

    default:
      return state;
  }
}
