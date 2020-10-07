// import { fetchToursRequest, fetchToursSuccess, fetchToursFailure } from './index';
// import * as ActionTypes from '../constants/action-types';
export const FETCH_TOURS_SUCCESS = 'FETCH_TOURS_SUCCESS';
export const FETCH_TOURS_FAILURE = 'FETCH_TOURS_FAILURE';
export const FETCH_TOURS_REQUEST = 'FETCH_TOURS_REQUEST';

const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken';

const fetchTours = () => dispatch => {
  fetch(URL)
    .then(response => response.json())
    .then(result => {
      // console.log(result.meals);
      dispatch({
        type: FETCH_TOURS_SUCCESS,
        payload: result.meals,
      });
    })
    .catch(error => {
      dispatch({
        type: FETCH_TOURS_FAILURE,
        payload: error,
      });
    });
};

export default fetchTours;
