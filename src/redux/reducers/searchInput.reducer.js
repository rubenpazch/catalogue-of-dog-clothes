import * as actionsTypes from '../actionsType';

const initialState = {
  searchCity: '',
};

const searchInputReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_CITY:
      return {
        ...state,
        searchCity: action.searchCity,
      };

    default:
      return state;
  }
};

export default searchInputReducer;
