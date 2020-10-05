import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
// import { compose } from 'redux';
import fetchTours from '../actions/GetTours';

import styles from '../css/tourslist.module.css';
import ItemTour from '../components/ItemTour';

function ToursList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTours());
  }, [dispatch]);
  const state = useState(0);
  console.log(state);

  return (
    <Row className={styles.wrapper}>
      <Col md={9} className={styles.wrapperContent}>
        <Row className={styles.wrapperTours}>
          <ItemTour titleTour="text1" />
        </Row>
      </Col>
      <Col md={3} className={styles.filters}>
        <p>filters</p>
      </Col>
    </Row>
  );
}

export default ToursList;
