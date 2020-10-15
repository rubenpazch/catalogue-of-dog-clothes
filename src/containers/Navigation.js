import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import styles from '../css/navigation.module.css';
import SearchInput from '../components/SearchInput';
import { orderToursByPrice } from '../redux/actions/tours.actions';

function Navigation() {
  const { tours } = useSelector(state => state.toursStore);
  const dispatch = useDispatch();
  const [toursReceived, settoursReceived] = useState([]);

  useEffect(() => {
    if (tours.data) {
      settoursReceived(tours.data);
    }
  }, [tours.data]);

  /* useEffect(() => {
    dispatch(orderToursByPrice(toursReceived));
  }, []); */

  return (
    <Row className={styles.wrapper}>
      <Col className={styles.titleArrows} md={9}>
        <Row className={styles.rowFilter}>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom" className={styles.filterByPrices}>
              <Form.Label className={styles.labelStyle}>Custom select</Form.Label>
              <Form.Control as="select" custom className={styles.selectStyle} onChange={() => dispatch(orderToursByPrice(toursReceived))}>
                <option>High to Low</option>
                <option>Low to High</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Row>
        <Row className={styles.rowFilter}>
          <Form>
            <Form.Group controlId="exampleForm.SelectCustom" className={styles.filterByTitle}>
              <Form.Label className={styles.labelStyle}>Custom select</Form.Label>
              <Form.Control as="select" custom className={styles.selectStyle}>
                <option>A-Z</option>
                <option>Z-A</option>
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
