import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styles from '../css/itemtour.module.css';

const ItemTour = ({ image, text }) => (
  <Row className={styles.wrapper}>
    <img src={image} />
    <p>{text}</p>
  </Row>
);

export default ItemTour;
