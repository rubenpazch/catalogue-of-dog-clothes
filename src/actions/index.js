import axios from 'axios';
import * as ActionTypes from '../constants/action-types';

const createTour = tour => ({
  type: ActionTypes.ADD_TOUR,
  payload: tour,
});

const filterChange = cityCode => ({
  type: ActionTypes.CHANGE_FILTER,
  payload: cityCode,
});

const fetchToursRequest = () => ({
  type: ActionTypes.FETCH_TOURS_REQUEST,
});

const fetchToursSuccess = tours => ({
  type: ActionTypes.FETCH_TOURS_SUCCESS,
  payload: tours,
});

const fetchToursFailure = error => ({
  type: ActionTypes.FETCH_TOURS_FAILURE,
  payload: error,
});

const fetchTours = () => async dispatch => {
  try {
    const res = await axios.get('http://jsonplaceholder.typicode.com/users');
    dispatch({
      type: ActionTypes.FETCH_TOURS_SUCCESS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ActionTypes.FETCH_TOURS_FAILURE,
      payload: console.log(e),
    });
  }
};

export {
  createTour,
  filterChange,
  fetchToursRequest,
  fetchToursSuccess,
  fetchToursFailure,
  fetchTours,
};
