/* eslint-disable no-nested-ternary */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from 'react-autocomplete';
import { matchStateToTerm, sortStates } from './utils';
import { getStates } from '../static_data/data';
import setSearchInput from '../redux/actions/searchInput.acions';
import styles from '../css/searchInput.module.css';

function SearchInput() {
  const searchCity = useSelector(state => state.searchInputStore);
  const dispatch = useDispatch();

  return (
    <div className={styles.autocompletewrapper}>
      <Autocomplete
        value={searchCity.searchCity}
        inputProps={{ id: 'states-autocomplete', placeholder: 'Type a city' }}
        items={getStates(searchCity.searchCity)}
        getItemValue={item => `${item.city}, ${item.country}`}
        shouldItemRender={matchStateToTerm}
        sortItems={sortStates}
        onChange={(event, value) => dispatch(setSearchInput(value))}
        onSelect={value => dispatch(setSearchInput(value))}
        openOnFocus={false}
        renderMenu={(items, value) => (

          <div className={styles.dropdown}>
            {value === '' ? (
              <div>Ej. New York</div>
            ) : items.length === 0 ? (
              <div>
                No matches for
                { ` ${value}`}
              </div>
            ) : items}
          </div>

        )}
        renderItem={(item, isHighlighted) => (
          item.header
            ? (
              <div key={item.header} className={`styles.item ${isHighlighted ? 'selected-item' : ''}`}>
                {item.header}
              </div>
            )
            : (
              <div key={item.id}>
                {`${item.city}, ${item.country} ` }
              </div>
            )
        )}
      />
    </div>
  );
}

export default SearchInput;
