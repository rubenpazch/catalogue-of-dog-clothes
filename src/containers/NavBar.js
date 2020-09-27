import React from 'react';
import { Spinner } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from '../css/navbar.module.css';
import logoImg from '../img/logo.png';

function Navbar() {
  return (
    <Row className={styles.wrapper}>
      <Container className={styles.contentWrapper}>
        <div class={styles.logo}>
					<img src={logoImg}/>
				</div>
      </Container>
    </Row>
  );
}

export default Navbar;
