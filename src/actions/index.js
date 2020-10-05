import * as ActionTypes from '../constants/action-types';

export const createTour = tour => ({
  type: ActionTypes.ADD_TOUR,
  payload: tour,
});

export const filterChange = cityCode => ({
  type: ActionTypes.CHANGE_FILTER,
  payload: cityCode,
});

export const fetchToursRequest = () => ({
  type: ActionTypes.FETCH_TOURS_REQUEST,
});

export const fetchToursSuccess = tours => ({
  type: ActionTypes.FETCH_TOURS_SUCCESS,
  payload: tours,
});

export const fetchToursFailure = error => ({
  type: ActionTypes.FETCH_TOURS_FAILURE,
  payload: error,
});
