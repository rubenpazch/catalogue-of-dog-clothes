import React from 'react';
import { NavLink } from 'react-router-dom';
// import Navbar from 'react-bootstrap/NavBar';
// import Nav from 'react-bootstrap/Nav';
import { Col, Row } from 'react-bootstrap';
import styles from '../css/menunavbar.module.css';

function MenuNavBar() {
  return (
    <Row className={styles.wrapper} data-testid="MenuNavBar">
      <Col className={styles.leftwrapper} md={2} />
      <Col className={styles.midlewrapper} md={7}>
        <ul className={styles.wrapperMenu}>
          <li href="#home" className={styles.itemList}>
            <NavLink to="/" activeClassName="active">Home</NavLink>
          </li>
          <li href="#features" className={styles.itemList}>
            <a href="www.google.com"> ADVENTURES</a>
          </li>
          <li href="#pricing" className={styles.itemList}>
            <a href="www.google.com">MUSEUMS</a>
          </li>
          <li href="#pricing" className={styles.itemList}>
            <a href="www.google.com">LUXURY</a>
          </li>
          <li href="#pricing" className={styles.itemList}>
            <a href="www.google.com">TRADITIONAL</a>
          </li>
        </ul>
      </Col>
      <Col className={styles.rigthwrapper} md={3}>
        <p>-</p>
      </Col>
    </Row>
  );
}

export default MenuNavBar;
