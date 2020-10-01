import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import styles from '../css/tourslist.module.css';
import ItemTour from '../components/ItemTour';
import fetchTours from '../actions/GetTours';

function ToursList(props) {
  const {
    match: {
      params: { term },
    },
  } = props;

  const dispatch = useDispatch();
  React.userEffect(() => {
    dispatch(fetchTours(term));
  }, [dispatch, term]);

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

ToursList.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool.isRequired,
    params: PropTypes.shape({
      term: PropTypes.string.isRequired,
    }).isRequired,
    path: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ToursList;
