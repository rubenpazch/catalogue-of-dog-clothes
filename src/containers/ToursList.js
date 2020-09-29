import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../css/tourslist.module.css';
import ItemTour from '../components/ItemTour';

function ToursList() {
  return (
    <Row className={styles.wrapper}>
      <Col md={9} className={styles.wrapperContent}>
        <Row className={styles.wrapperTours}>
          <ItemTour />
          <ItemTour />
          <ItemTour />
          <ItemTour />
          <ItemTour />
          <ItemTour />
          <ItemTour />
          <ItemTour />
          <ItemTour />
        </Row>
      </Col>
      <Col md={3} className={styles.filters}>
        <p>filters</p>
      </Col>
    </Row>
  );
}

export default ToursList;
