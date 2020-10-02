import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import styles from '../css/tourslist.module.css';
import ItemTour from '../components/ItemTour';
import fetchTours from '../actions/GetTours';

function ToursList(props) {

  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(fetchTours('Casa'));
  }, [dispatch, 'Casa']);

  const tours = useSelector(state => state.toursReducer);
  console.log(tours);
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
