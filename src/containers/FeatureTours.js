import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styles from '../css/featuretours.module.css';
import ItemFeatureTour from '../components/ItemFeatureTour';
import img1 from '../img/imgFeature1.png'
import img2 from '../img/imgFeature2.png'
import img3 from '../img/imgFeature3.png'

function FeatureTours() {
  return (
    <Row className={styles.wrapper}>
      <Col className={styles.featureWrapper} ><ItemFeatureTour image={img1} text="Don't need to make a plann we are always available" /></Col>
			<Col className={styles.featureWrapper} ><ItemFeatureTour image={img2} text="The best colletion of servicios ready to go"/></Col>
			<Col className={styles.featureWrapper} ><ItemFeatureTour image={img3} text="Check reviews before booking a tour"/></Col>
    </Row>
  );
}

export default FeatureTours;
