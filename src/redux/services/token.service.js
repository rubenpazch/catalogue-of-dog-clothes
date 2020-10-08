import getToken from '../actions/token.actions';
import { BASE_URL, params } from '../../constants/ApplicationConstant';

const getTokenAsync = () => dispatch => {
  fetch(BASE_URL, params)
    .then(response => response.json())
    .then(result => {
      dispatch(getToken(result));
    })
    .catch(error => {
      console.log(error);
    });
};

export default getTokenAsync;
