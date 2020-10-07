import * as actionsTypes from '../actionsType';

export const getMealsAsync = result => ({
  type: actionsTypes.FETCH_MEALS_SUCCESS,
  meals: result,
});

const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken';

export const getMeals = () => dispatch => {
  fetch(URL)
    .then(response => response.json())
    .then(result => {
      dispatch(getMealsAsync(result));
    })
    .catch(error => {
      console.log(error);
    });
};
