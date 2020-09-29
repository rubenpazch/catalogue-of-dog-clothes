import React from 'react';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import styles from '../css/itemtour.module.css';
import img1 from '../img/tour1.jpg';

const ItemTour = () => (
  <Col className={styles.wrapper}>
    <img src={img1} alt="tour1" />
    <div className={styles.header}>
      <h5 md={9}>City Tour Cusco 1D</h5>
      <span md={3}>$15.00</span>
    </div>
    <div className={styles.services}>
      <ul className={styles.listServices}>
        <li>
          <FontAwesomeIcon icon={faCoffee} />
          Guiding
        </li>
        <li>
          <FontAwesomeIcon icon={faCoffee} />
          Transportation
        </li>
        <li>
          <FontAwesomeIcon icon={faCoffee} />
          Entrances
        </li>
        <li>
          <FontAwesomeIcon icon={faCoffee} />
          English
        </li>
      </ul>
      <div>
        text
      </div>
    </div>

  </Col>
);

export default ItemTour;
