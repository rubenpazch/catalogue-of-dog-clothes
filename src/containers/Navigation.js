import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import styles from '../css/navigation.module.css';
import SearchInput from '../components/SearchInput';
import {
  orderToursByPriceDesc,
  orderToursByPriceAsc,
  orderToursByDescriptionDesc,
  orderToursByDescriptionAsc,
} from '../redux/actions/tours.actions';

function Navigation() {
  const { tours } = useSelector(state => state.toursStore);
  const dispatch = useDispatch();
  const [toursReceived, settoursReceived] = useState([]);

  useEffect(() => {
    if (tours.data) {
      settoursReceived(tours.data);
    }
  }, [tours.data]);

  function handleChangePrice(event) {
    if (event.target.value === '1') {
      dispatch(orderToursByPriceAsc(toursReceived));
    } else {
      dispatch(orderToursByPriceDesc(toursReceived));
    }
  }

  function handleChangeDescription(event) {
    if (event.target.value === '1') {
      dispatch(orderToursByDescriptionAsc(toursReceived));
    } else {
      dispatch(orderToursByDescriptionDesc(toursReceived));
    }
  }

  return (
    <Row className={styles.wrapper}>
      <Col className={styles.titleArrows} md={9}>
        <Row className={styles.rowFilter}>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustomPrice" className={styles.filterByPrices}>
              <Form.Label className={styles.labelStyle}>Order by Price: </Form.Label>
              <Form.Control as="select" custom className={styles.selectStyle} onChange={handleChangePrice}>
                <option key={0} value={0}>All tours</option>
                <option key={1} value={1}>Low to High</option>
                <option key={2} value={2}>High to Low</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Row>
        <Row className={styles.rowFilter}>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustomDescription" className={styles.filterByTitle}>
              <Form.Label className={styles.labelStyle}>Order by Title</Form.Label>
              <Form.Control as="select" custom className={styles.selectStyle} onChange={handleChangeDescription}>
                <option key={0} value={0}>None</option>
                <option key={1} value={1}>A-Z</option>
                <option key={2} value={2}>Z-A</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Row>
      </Col>
      <Col md={3}>
        <SearchInput />
      </Col>
    </Row>
  );
}

export default Navigation;
