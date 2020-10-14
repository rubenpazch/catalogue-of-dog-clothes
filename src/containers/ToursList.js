import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../css/tourslist.module.css';
import ItemTour from '../components/ItemTour';
import getTours from '../redux/services/tours.service';

function ToursList() {
  const { searchCity } = useSelector(state => state.searchInputStore);
  const { tours } = useSelector(state => state.toursStore);
  const dispatch = useDispatch();
  const [toursReceived, settoursReceived] = useState([]);
  
  useEffect(() => {
    dispatch(getTours(searchCity));
  }, [searchCity]);

  useEffect(() => {
    if(tours.data){
      settoursReceived(tours.data);
    }
  }, [tours.data]);
  //let toursReceived = [];
  //if (tours.data !== undefined) {
  //  toursReceived = tours.data;
  //}
  //console.log(tours);
  return (
    <Row className={styles.wrapper}>
      <Col md={9} className={styles.wrapperContent}>
        <Row className={styles.wrapperTours}>
          {toursReceived.map(t => (
            <ItemTour
              key={t.id}
              titleTour={t.name}
              imgPath={t.pictures}
              amount={t.price.amount}
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
