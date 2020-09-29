import * as ActionTypes from '../constants/action-types';

const createTour = tour => ({
  type: ActionTypes.ADD_TOUR,
  payload: tour,
});

const filterChange = cityCode => ({
  type: ActionTypes.CHANGE_FILTER,
  payload: cityCode,
});

export {
  createTour,
  filterChange,
};
