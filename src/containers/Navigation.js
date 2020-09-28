import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styles from '../css/navigation.module.css';


function Navigation() {
  return (
    <Row className={styles.wrapper}>
      <Col className={styles.titleArrows} md={9}>
				<Row><p>Title</p></Row>
				<Row><p>Arrow</p></Row>
			</Col>
			<Col md={3}>Side Bar</Col>
    </Row>
  );
}

export default Navigation;
