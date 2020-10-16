import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import getTourDetail from '../redux/services/tourdetail.service';
import imgExample from '../img/tour1.jpg';

function TourDetail() {
  const dispatch = useDispatch();
  const { tourdetail } = useSelector(state => state.tourdetailStore);
  const { id } = useParams();
  const [tourDetailReceived, settourDetailReceived] = useState([]);

  useEffect(() => {
    dispatch(getTourDetail(id));
  }, [id]);

  useEffect(() => {
    if (tourdetail) {
      settourDetailReceived(tourdetail);
    }
  }, [tourdetail]);

  return (
    <div>
      <img src={tourDetailReceived.pictures} alt="images" />
      <h2>
        { tourDetailReceived.name }
      </h2>
      <p>{tourDetailReceived.shortDescription}</p>
      <h1> </h1>
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
