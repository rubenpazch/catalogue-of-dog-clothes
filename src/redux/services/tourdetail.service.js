import { getToursAsync } from '../actions/tours.actions';
import { showAlertDanger } from '../actions/alert.actions';

const getTourDetail = id => dispatch => {
  const myHeaders = new Headers();
  const token = localStorage.getItem('token');
  myHeaders.append('Authorization', `Bearer ${token}`);
  let URL = '';

  if (objLocation === undefined) {
    URL = 'https://test.api.amadeus.com/v1/shopping/activities/82701';
  } else {
    URL = `https://test.api.amadeus.com/v1/shopping/activities/${id}`;
  }

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  };

  fetch(URL, requestOptions)
    .then(response => response.json())
    .then(result => {
      dispatch(getToursAsync(result));
    })
    .catch(error => {
      dispatch(showAlertDanger(`Error calling to the API for tours: ${error}`));
    });
};

export default getTourDetail;
