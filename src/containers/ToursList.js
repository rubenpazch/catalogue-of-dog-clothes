import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../css/tourslist.module.css';
import ItemTour from '../components/ItemTour';
import { incrementCounter, decrecrementCounter } from '../redux/actions/increment.actions';
import { getMeals } from '../redux/actions/meals.actions';
import logo from '../React-icon.svg';

function ToursList() {
  const { counter, loading } = useSelector(state => state.incrementStore);
  const { meals } = useSelector(state => state.mealsStore);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  console.log(meals);
  return (
    <Row className={styles.wrapper}>
      <Col md={9} className={styles.wrapperContent}>
        <Row className={styles.wrapperTours}>
          <ItemTour titleTour="text1" />
        </Row>
      </Col>
      <Col md={3} className={styles.filters}>
        <p>filters</p>
        <h1>
          {' '}
          counter:
          { counter }
        </h1>
        <button type="button" onClick={(() => dispatch(incrementCounter()))}>INCREMENT</button>
        <button type="button" onClick={(() => dispatch(decrecrementCounter()))}>DECREMENT</button>
        <button type="button" onClick={(() => dispatch(getMeals()))}>MEALS</button>
        {loading && <img alt="text" src={logo} className="App-logo" />}
      </Col>
    </Row>
  );
}

export default ToursList;
