import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styles from './app.module.css';
import NavBar from './containers/NavBar';
import Notifications from './containers/Notifications';
import Slider from './containers/Slider';
import FeatureTours from './containers/FeatureTours';
import Navigation from './containers/Navigation';

function App() {
  return (
    <Container fluid className={styles.mainWrapper}>
      <Notifications />
      <NavBar />
      <Slider />
      <Container className={styles.contentWrapper}>
        <FeatureTours />
        <Navigation />
      </Container>
    </Container>
  );
}

export default App;
