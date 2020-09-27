import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from '../css/navbar.module.css';

function Navbar() {
  return (
    <Row className={styles.wrapper}>
      <Container className={styles.contentWrapper}>
        <p>Navbar</p>
      </Container>
    </Row>
  );
}

export default Navbar;
