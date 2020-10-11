import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import styles from './app.module.css';
import NavBar from './containers/NavBar';
import Notifications from './containers/Notifications';
import Slider from './containers/Slider';

function App() {
  return (
    <Container fluid className={styles.mainWrapper}>
      <Notifications />
      <NavBar />
      <Slider />
      <Container className={styles.contentWrapper}>

        <h1>titleasdasd</h1>
      </Container>
    </Container>
  );
}

export default App;
