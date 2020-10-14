import React from 'react';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import styles from '../css/itemtour.module.css';

const ItemTour = ({ titleTour, imgPath, amount }) => (
  <Col className={styles.wrapper}>
    <img src={imgPath} alt="tour1" />
    <div className={styles.header}>
      <h5 md={9}>{ titleTour }</h5>
      <span md={3}>{amount}</span>
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
