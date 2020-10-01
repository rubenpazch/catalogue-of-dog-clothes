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

export {
  createTour,
  filterChange,
  fetchToursRequest,
  fetchToursSuccess,
  fetchToursFailure,
};
