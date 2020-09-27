import React from 'react';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';
import { Col, Row } from 'react-bootstrap';
import styles from '../css/menunavbar.module.css';

function MenuNavBar() {
  return (
    <Row className={styles.wrapper}>
      <Col className={styles.leftwrapper} md={2} />
      <Col className={styles.midlewrapper} md={7}>
        <ul className={styles.wrapperMenu}>
          <li href="#home" className={styles.itemList}>
						<a>Home</a>
					</li>
          <li href="#features" className={styles.itemList}>
						<a> Features</a>
					</li>
          <li href="#pricing" className={styles.itemList}>
            <a>Pricing</a>
          </li>
        </ul>
      </Col>
      <Col className={styles.rigthwrapper} md={3}>
        <p>cart</p>
      </Col>
    </Row>
  );
}

export default MenuNavBar;
