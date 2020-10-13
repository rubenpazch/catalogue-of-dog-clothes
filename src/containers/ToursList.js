import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../css/tourslist.module.css';
import ItemTour from '../components/ItemTour';

import getTours from '../redux/services/tours.service';
import { getCity } from '../components/data';

function ToursList() {
  const { searchCity } = useSelector(state => state.searchInputStore);
  const { tours } = useSelector(state => state.toursStore);
  const dispatch = useDispatch();
  // const currentLocation = searchCity.split(',');
  // const city = currentLocation[0];
  // const country = currentLocation[1];
  // const objLocation = getCity(city, country);
  useEffect(() => {
    dispatch(getTours(searchCity));
  }, [searchCity]);

  let toursReceived = [];
  if (tours.data !== undefined) {
    toursReceived = tours.data;
  }

  return (
    <Row className={styles.wrapper}>
      <Col md={9} className={styles.wrapperContent}>
        <Row className={styles.wrapperTours}>
          {toursReceived.map(t => (
            <ItemTour
              key={t.id}
              titleTour={t.name}
            />
          ))}
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
