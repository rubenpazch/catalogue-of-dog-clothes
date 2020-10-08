import getMealsAsync from '../actions/meals.actions';

const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken';

const getMeals = () => dispatch => {
  fetch(URL)
    .then(response => response.json())
    .then(result => {
      dispatch(getMealsAsync(result));
    })
    .catch(error => {
      console.log(error);
    });
};

export default getMeals;
