import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from '../css/navbar.module.css';
import logoImg from '../img/logo.png';
import MenuNavBar from '../components/MenuNavBar';

function Navbar() {
  return (
    <Row className={styles.wrapper}>
      <Container className={styles.contentWrapper}>
        <div className={styles.logo}>
          <img src={logoImg} />
        </div>
        <MenuNavBar />
      </Container>
    </Row>
  );
}

export default Navbar;
