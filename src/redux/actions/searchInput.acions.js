import * as actionsTypes from '../actionsType';

const setSearchInput = data => ({
  type: actionsTypes.FETCH_CITY,
  searchCity: data,
});

export default setSearchInput;
