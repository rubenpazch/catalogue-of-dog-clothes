import * as actionsTypes from '../actionsType';

export const showAlertDanger = text => ({
  type: actionsTypes.SHOW_ALERT_ERROR,
  message: text,
});

export const showAlertWarning = text => ({
  type: actionsTypes.SHOW_ALERT_WARNING,
  message: text,
});

export const hideAlert = text => ({
  type: actionsTypes.HIDE_ALERT_WARNING,
  message: text,
});

export const showAlertSuccess = text => ({
  type: actionsTypes.SHOW_ALERT_SUCCESS,
  message: text,
});
