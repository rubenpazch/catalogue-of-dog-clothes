import * as ActionTypes from '../constants/action-types';

const initialState = {
  data: [],
  status: '',
};

const toursReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TOURS_REQUEST:
      return {
        ...state,
        status: 'waiting',
      };
    case ActionTypes.FETCH_TOURS_SUCCESS:
      return {
        ...state,
        tours: action.payload,
        status: 'received',
      };
    case ActionTypes.FETCH_TOURS_FAILURE:
      return {
        status: 'failed',
        error: action.payload,
      };
    default:
      return state;
  }
};
export default toursReducer;
