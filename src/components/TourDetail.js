import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import imgExample from '../img/tour1.jpg';

function TourDetail() {
  return (
    <div>
      <img src={imgExample} alt="images" />
      <h2>Titulo del tours  Titulo del tours Titulo del tours </h2>
      <p>lorem askdj askdjaskdjalskdj asd jasdlkj asldk jasdk jaslkd jasldk jaslkd j lorem askdj askdjaskdjalskdj asd jasdlkj asldk jasdk jaslkd jasldk jaslkd j</p>
      <h1>$17.00</h1>
      <p>Quantity</p>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default TourDetail;
