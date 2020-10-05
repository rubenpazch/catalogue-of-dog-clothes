import { fetchToursRequest, fetchToursSuccess, fetchToursFailure } from './index';
import * as ActionTypes from '../constants/action-types';

const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s=chicken';

export default function fetchTours() {
  return function (dispatch) {
    dispatch({
      type: ActionTypes.FETCH_TOURS_REQUEST,
    });

    fetch(URL)
      .then(response => response.json())
      .then(data => dispatch({
        type: ActionTypes.FETCH_TOURS_SUCCESS,
        payload: data,
      }))
      .catch(error => dispatch({
        type: ActionTypes.FETCH_TOURS_FAILURE,
        payload: error,
      }));
  };
}
