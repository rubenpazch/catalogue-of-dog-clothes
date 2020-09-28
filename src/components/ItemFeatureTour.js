import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import styles from '../css/itemfeaturetours.module.css';


const ItemFeatureTour = ({image, text}) =>  (
    <Row className={styles.wrapper} >
      <img src={image}></img>
			<p>{text}</p>
    </Row>
);

export default ItemFeatureTour;
