import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styles from './app.module.css';
import NavBar from './containers/NavBar';
import Notifications from './containers/Notifications';
import Slider from './containers/Slider';
import FeatureTours from './containers/FeatureTours';
import Navigation from './containers/Navigation';
import ToursList from './containers/ToursList';
import getTokenAsync from './redux/services/token.service';
import TourDetail from './components/TourDetail';
import TokenContext from './context/TokenContext';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTokenAsync());
  }, []);

  const { token } = useSelector(state => state.tokenStore);

  return (
    <TokenContext.Provider value={token}>
      <Router>
        <Container fluid className={styles.mainWrapper}>
          <Notifications />
          <NavBar />
          <Slider />
          <Container className={styles.contentWrapper}>
            <Switch>
              <Route path="/tourdetail/:id">
                <TourDetail />
              </Route>
              <Route path="/">
                <FeatureTours />
                <Navigation />
                <ToursList />
              </Route>
            </Switch>
          </Container>
        </Container>
      </Router>
    </TokenContext.Provider>
  );
}

export default App;
