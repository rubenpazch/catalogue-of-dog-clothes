import * as actionsTypes from '../actionsType';

const initialState = {
  message: '',
  variant: 'danger',
  show: false,
};

export default function alertReducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.SHOW_ALERT_ERROR:
      return {
        ...state,
        message: action.message,
        variant: 'danger',
        show: true,
      };
    case actionsTypes.SHOW_ALERT_WARNING:
      return {
        ...state,
        message: action.message,
        variant: 'warning',
        show: true,
      };
    case actionsTypes.HIDE_ALERT_WARNING:
      return {
        ...state,
        show: false,
      };
    case actionsTypes.SHOW_ALERT_SUCCESS:
      return {
        ...state,
        message: action.message,
        variant: 'success',
        show: true,
      };
    default:
      return state;
  }
}
