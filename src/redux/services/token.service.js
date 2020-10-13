import getToken from '../actions/token.actions';
import { BASE_URL, params } from '../../constants/ApplicationConstant';

const getTokenAsync = () => dispatch => {
  fetch(BASE_URL, params)
    .then(response => response.json())
    .then(result => {
      localStorage.setItem('token', result.access_token);
      dispatch(getToken(result));
    })
    .catch(error => {
      console.log(error);
    });
};

export default getTokenAsync;
