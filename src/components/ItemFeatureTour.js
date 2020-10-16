import React from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import styles from '../css/itemfeaturetours.module.css';

const ItemFeatureTour = ({ image, text }) => (
  <Row className={styles.wrapper}>
    <img src={image} alt="casa" />
    <p>{text}</p>
  </Row>
);

ItemFeatureTour.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string,
};

ItemFeatureTour.defaultProps = {
  image: 'Example',
  text: '../img/tour1.jpg',
};

export default ItemFeatureTour;
