import getToken from '../actions/token.actions';
import { BASE_URL, params } from '../../constants/ApplicationConstant';
import { showAlertDanger } from '../actions/alert.actions';

const getTokenAsync = () => dispatch => {
  fetch(BASE_URL, params)
    .then(response => response.json())
    .then(result => {
      localStorage.setItem('token', result.access_token);
      dispatch(getToken(result));
    })
    .catch(error => {
      dispatch(showAlertDanger(`Error calling to the API for tours: ${error}`));
    });
};

export default getTokenAsync;
