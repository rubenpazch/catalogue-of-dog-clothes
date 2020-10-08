import * as actionsTypes from '../actionsType';

const getMealsAsync = result => ({
  type: actionsTypes.FETCH_MEALS_SUCCESS,
  meals: result,
});

export default getMealsAsync;
