import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { Row, Col } from 'react-bootstrap';
import getTourDetail from '../redux/services/tourdetail.service';
import styles from '../css/tourdetail.module.css';

function TourDetail() {
  const dispatch = useDispatch();
  const { tourdetail } = useSelector(state => state.tourdetailStore);
  const { id } = useParams();
  const [tourDetailReceived, settourDetailReceived] = useState([]);

  useEffect(() => {
    dispatch(getTourDetail(id));
  }, [id]);

  useEffect(() => {
    if (tourdetail) {
      settourDetailReceived(tourdetail);
    }
  }, [tourdetail]);
  const { price } = tourDetailReceived;
  return (
    <Row className={styles.wrapper}>
      <Col md={6} className={styles.wrapperImages}>
        <Row className={styles.rowPictures}>
          <Col md={10} className={styles.bigPicture}>
            <img src={tourDetailReceived.pictures} alt="images" />
          </Col>
          <Col md={2} className={styles.smallPictures}>
            <img src={tourDetailReceived.pictures} alt="images" />
            <img src={tourDetailReceived.pictures} alt="images" />
            <img src={tourDetailReceived.pictures} alt="images" />
            <img src={tourDetailReceived.pictures} alt="images" />
          </Col>
        </Row>
      </Col>
      <Col md={6}>
        <Row className={styles.WrapperContent}>
          <Col className={styles.titleDetailtTour}>
            <h1>
              { tourDetailReceived.name }
            </h1>
          </Col>
          <Col className={styles.descripcionTour}>
            <p>{tourDetailReceived.shortDescription}</p>
          </Col>
          <Col className={styles.price}>
            <h2>
              { typeof price !== 'undefined' ? `${price.currencyCode} ` : '0' }
              { typeof price !== 'undefined' ? `${price.amount} ` : '0' }
            </h2>
          </Col>
          <Col className={styles.Type}>
            <h5>
              Category
              {' '}
              <Badge variant="secondary">{tourDetailReceived.type}</Badge>
            </h5>
          </Col>
          <Col className={styles.bookNow}>
            <Button variant="warning">Book now</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default TourDetail;
