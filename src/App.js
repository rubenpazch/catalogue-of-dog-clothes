import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import './App.scss';
import NavBar from './containers/NavBar';
import Notifications from './containers/Notifications';

function App() {
  return (
    <Container fluid className="wrapperApp">
      <Notifications />
      <Container className="wrapperMidle">
        <h1>title</h1>
      </Container>
    </Container>
  );
}

export default App;
