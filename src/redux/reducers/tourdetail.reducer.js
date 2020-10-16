import * as actionsTypes from '../actionsType';

const initialState = {
  tourdetail: {},
  loading: false,
};

export default function tourDetailReducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.FETCH_TOUR_DETAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case actionsTypes.FETCH_TOUR_DETAIL_SUCCESS:
      return {
        ...state,
        tourdetail: action.tourdetail,
        loading: false,
      };
    default:
      return state;
  }
}
