import * as actionsTypes from '../actionsType';

const initialState = {
  counter: 0,
  loading: false,
};

export default function incrementReducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
        loading: false,
      };
    case actionsTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionsTypes.LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
