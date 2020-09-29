import * as ActionTypes from '../constants/action-types';

const toursReducer = defaultTours => (state = defaultTours, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TOUR:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
};

export default toursReducer;
