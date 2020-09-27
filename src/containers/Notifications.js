import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styles from '../css/notifications.module.css';

function Notifications() {
  return (
    <Row className={styles.wrapper}>
      <Container className={styles.contentWrapper}>
        <p>Notifications</p>
      </Container>
    </Row>
  );
}

export default Notifications;
