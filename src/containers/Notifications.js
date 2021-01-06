import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styles from '../css/notifications.module.css';
import MenuNotificationBar from '../components/MenuNotificationBar';

function Notifications() {
  return (
    <Row className={styles.wrapper}>
      <Container className={styles.contentWrapper}>
        <MenuNotificationBar />
      </Container>
    </Row>
  );
}

export default Notifications;
