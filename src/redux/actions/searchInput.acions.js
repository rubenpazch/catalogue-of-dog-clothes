import * as actionsTypes from '../actionsType';

const setSearchInput = data => ({
  type: actionsTypes.FETCH_CITY,
  searchCity: data,
  country: data.country,
  city: data.city,
  lat: data.lat,
  lng: data.lng,
});

export default setSearchInput;
