import * as ActionTypes from '../constants/action-types';

const URL = term => `https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`;

const fetchTours = term => dispatch => {
  fetch(URL(term))
    .then(response => response.json())
    .then(result => {
      dispatch({
        type: ActionTypes.FETCH_TOURS_SUCCESS,
        payload: result.meals,
      });
    })
    .catch(error => {
      dispatch({
        type: ActionTypes.FETCH_TOURS_FAILURE,
        payload: error,
      });
    });
};

export default fetchTours;
