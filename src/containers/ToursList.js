import React, { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import styles from '../css/tourslist.module.css';
import ItemTour from '../components/ItemTour';
import getTours from '../redux/services/tours.service';
import TokenContext from '../context/TokenContext';

function ToursList() {
  const { searchCity } = useSelector(state => state.searchInputStore);
  const { tours } = useSelector(state => state.toursStore);
  // eslint-disable-next-line camelcase
  const token = useContext(TokenContext);
  const dispatch = useDispatch();
  const [toursReceived, settoursReceived] = useState([]);

  useEffect(() => {
    dispatch(getTours(searchCity, token.access_token));
  }, [searchCity]);

  useEffect(() => {
    if (tours.data) {
      settoursReceived(tours.data);
    }
  }, [tours.data]);
  return (
    <Row className={styles.wrapper}>
      <Col md={9} className={styles.wrapperContent}>
        <Row className={styles.wrapperTours}>
          {toursReceived.map(t => (
            <ItemTour
              key={t.id}
              titleTour={t.name}
              imgPath={t.pictures[0]}
              amount={t.price.amount}
              id={t.id}
            />
          ))}
        </Row>
      </Col>

    </Row>
  );
}

export default ToursList;
