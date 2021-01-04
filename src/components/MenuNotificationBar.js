import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styles from '../css/menunotificationbar.module.css';

function MenuNotificationBar() {
  return (
    <Row className={styles.wrapper} data-testid="MenuNotificationBar">
      <Col className={styles.leftwrapper} md={2} />
      <Col className={styles.midlewrapper} md={7}>
        <ul className={styles.wrapperMenu}>
          <li href="#home" className={styles.itemList}>
            <a href="localhost:3000">Most Populars Places</a>
          </li>
          <li href="#features" className={styles.itemList}>
            <a href="localhost:3000"> Last Time Trip</a>
          </li>
          <li href="#pricing" className={styles.itemList}>
            <a href="localhost:3000">Flexible Itinerary</a>
          </li>
          <li href="#pricing" className={styles.itemList}>
            <a href="localhost:3000">Deals</a>
          </li>
        </ul>
      </Col>
      <Col className={styles.rigthwrapper} md={3}>
        <p>-</p>
      </Col>
    </Row>
  );
}

export default MenuNotificationBar;
