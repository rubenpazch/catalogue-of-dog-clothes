import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import styles from './app.module.css';
import NavBar from './containers/NavBar';
import Notifications from './containers/Notifications';
import Slider from './containers/Slider';
import FeatureTours from './containers/FeatureTours';
import Navigation from './containers/Navigation';
import ToursList from './containers/ToursList';
import getTokenAsync from './redux/services/token.service';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTokenAsync());
  }, []);
  return (
    <Container fluid className={styles.mainWrapper}>
      <Notifications />
      <NavBar />
      <Slider />
      <Container className={styles.contentWrapper}>
        <FeatureTours />
        <Navigation />
        <ToursList />
      </Container>
    </Container>
  );
}

export default App;
