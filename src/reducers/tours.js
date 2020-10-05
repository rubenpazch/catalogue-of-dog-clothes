import {
  FETCH_TOURS_SUCCESS,
  FETCH_TOURS_FAILURE,
  FETCH_TOURS_REQUEST,
} from '../actions/GetTours';

const initialState = {
  meals: [],
  status: '',
};

const toursReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOURS_REQUEST:
      return {
        ...state,
        status: 'waiting',
      };
    case FETCH_TOURS_SUCCESS:
      return {
        ...state,
        meals: action.payload,
        status: 'received',
      };
    case FETCH_TOURS_FAILURE:
      return {
        ...state,
        status: 'failed',
        error: action.payload,
      };
    default:
      return state;
  }
};
export default toursReducer;
