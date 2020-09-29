import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from '../css/tourslist.module.css';
import ItemTour from '../components/ItemTour';
import { filterChange } from '../actions/index';

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

const mapStateToProps = state => ({
  tours: state.toursReducer,
  filter: state.filterReducer,
});

const mapDispatchToProps = dispatch => ({
  filterChange: filter => dispatch(filterChange(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToursList);
