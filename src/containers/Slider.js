import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/lago-humantay.jpg';
import img2 from '../img/machupicchu.jpg';
import img3 from '../img/machupicchu2.jpg';
import styles from '../css/slider.module.css';

function Slider() {
  return (
    <Carousel className={styles.wrapper}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>

  );
}

export default Slider;
