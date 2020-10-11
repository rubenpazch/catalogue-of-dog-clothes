import React from 'react';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import { Col, Row } from 'react-bootstrap';
import styles from '../css/menunotificationbar.module.css';

function MenuNotificationBar() {
  return (
    <Row className={styles.wrapper}>
      <Col className={styles.leftwrapper} md={2} />
      <Col className={styles.midlewrapper} md={7}>
        <ul className={styles.wrapperMenu}>
          <li href="#home" className={styles.itemList}>
						<a href="#">Home</a>
					</li>
          <li href="#features" className={styles.itemList}>
						<a href="#"> Features</a>
					</li>
          <li href="#pricing" className={styles.itemList}>
            <a href="#">Pricing</a>
          </li>
        </ul>
      </Col>
      <Col className={styles.rigthwrapper} md={3}>
        <p>cart</p>
      </Col>
    </Row>
  );
}

export default MenuNotificationBar;
