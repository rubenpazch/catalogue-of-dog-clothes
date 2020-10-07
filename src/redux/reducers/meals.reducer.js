import * as actionsTypes from '../actionsType';

const initialState = {
  meals: [],
  loading: false,
};

export default function mealsReducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.FETCH_MEALS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionsTypes.FETCH_MEALS_SUCCESS:
      return {
        ...state,
        meals: action.meals,
        loading: false,
      };
    default:
      return state;
  }
}
