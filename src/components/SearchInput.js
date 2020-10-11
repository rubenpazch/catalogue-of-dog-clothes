import React, { useEffect, useState } from 'react';
import Autocomplete from 'react-autocomplete';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { CitiesData, renderCitieTitle } from '../static_data/cities';
import styles from '../css/itemtour.module.css';
import img1 from '../img/tour1.jpg';

function SearchInput() {
    //const {} = useState(0);
    //console.log();

  <div className="autocomplete-wrapper">
    <Autocomplete
      //value={this.state.val}
     // items={CitiesData()}
      //getItemValue={item => item.title}
      //shouldItemRender={renderCitieTitle}
      //renderMenu={item => (
      //  <div className="dropdown">
       //   {item}
       // </div>
      //)}
      //renderItem={(item, isHighlighted) => (
       // <div className={`item ${isHighlighted ? 'selected-item' : ''}`}>
        //  {item.title}
        //</div>
      //)}
      // onChange={(event, val) => this.setState({ val })}
      // onSelect={val => this.setState({ val })}
    />
  </div>

}

export default SearchInput;
