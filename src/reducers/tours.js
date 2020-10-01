import * as ActionTypes from '../constants/action-types';

const initialState = {
  loading: false,
  tours: [],
  error: '',
};

const toursReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_TOURS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ActionTypes.FETCH_TOURS_SUCCESS:
      return {
        ...state,
        loading: false,
        tours: action.payload,
        error: '',
      };
    case ActionTypes.FETCH_TOURS_FAILURE:
      return {
        loading: false,
        tours: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default toursReducer;
