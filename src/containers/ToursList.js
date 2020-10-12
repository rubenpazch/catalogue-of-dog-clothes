import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../css/tourslist.module.css';
import ItemTour from '../components/ItemTour';
import { incrementCounterAsync, decrecrementCounterAsync } from '../redux/services/increment.service';
import getSearchInput from '../redux/actions/searchInput.acions';
import getTokenAsync from '../redux/services/token.service';
import logo from '../React-icon.svg';
import { getStates } from '../components/data';
import getDetailCity from '../components/CitiesCountries';

function ToursList() {
  const { searchCity } = useSelector(state => state.searchInputStore);
  // const { token } = useSelector(state => state.tokenStore);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTokenAsync());
  }, [dispatch]);

  const currentLocation = searchCity.split(',');
  const city = currentLocation[0];
  const country = currentLocation[1];

  
  console.log(getDetailCity(city));

  return (
    <Row className={styles.wrapper}>
      <Col md={9} className={styles.wrapperContent}>
        <Row className={styles.wrapperTours}>
          <ItemTour titleTour="text1" />
          <ItemTour titleTour="text2" />
          <ItemTour titleTour="text3" />
          <ItemTour titleTour="text4" />
          <ItemTour titleTour="text5" />
          <ItemTour titleTour="text6" />

        </Row>
      </Col>

    </Row>
  );
}

export default ToursList;

/*
 <Col md={3} className={styles.filters}>
        <p>filters</p>
        <h1>
          {' '}
          counter:
          { counter }
        </h1>
        <button type="button" onClick={(() => dispatch(incrementCounterAsync()))}>INCREMENT</button>
        <button type="button" onClick={(() => dispatch(decrecrementCounterAsync()))}>DECREMENT</button>
        <button type="button" onClick={(() => dispatch(getTokenAsync()))}>MEALS</button>
        {loading && <img alt="text" src={logo} className="App-logo" />}
      </Col>

*/
