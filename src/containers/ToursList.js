import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import styles from '../css/tourslist.module.css';
import ItemTour from '../components/ItemTour';
import { fetchTours } from '../actions/index';

function ToursList() {
  const tours = useSelector(state => state.toursReducer);
  const dispatch = useDispatch();
  const toursApi = dispatch(fetchTours());

  return (
    <Row className={styles.wrapper}>
      <Col md={9} className={styles.wrapperContent}>
        <Row className={styles.wrapperTours} />
      </Col>
      <Col md={3} className={styles.filters}>
        <p>filters</p>
      </Col>
    </Row>
  );
}

export default ToursList;
