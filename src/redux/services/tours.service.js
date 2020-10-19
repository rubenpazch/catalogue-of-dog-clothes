import { getToursAsync } from '../actions/tours.actions';
import { showAlertDanger } from '../actions/alert.actions';
import { getCity } from '../../static_data/data';

const getTours = searchCity => dispatch => {
  const currentLocation = searchCity.split(',');
  const city = currentLocation[0];
  const country = currentLocation[1];
  const objLocation = getCity(city, country);
  const myHeaders = new Headers();
  const token = localStorage.getItem('token');
  myHeaders.append('Authorization', `Bearer ${token}`);
  let URL = '';

  if (objLocation === undefined) {
    URL = 'https://test.api.amadeus.com/v1/shopping/activities/by-square?north=35.685&west=139.7514&south=35.985&east=139.8514';
  } else {
    URL = `https://test.api.amadeus.com/v1/shopping/activities/by-square?north=${objLocation.lat}&west=${objLocation.lat + 0.00005}&south=${objLocation.lng}&east=${objLocation.lng + 0.00005}`;
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

export default getTours;
