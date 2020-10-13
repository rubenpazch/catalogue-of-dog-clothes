/* eslint-disable no-nested-ternary */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Autocomplete from 'react-autocomplete';
import { matchStateToTerm, sortStates } from './utils';
import { getStates } from './data';
import setSearchInput from '../redux/actions/searchInput.acions';

function SearchInput() {
  const searchCity = useSelector(state => state.searchInputStore);
  const dispatch = useDispatch();

  return (
    <Autocomplete
      value={searchCity.searchCity}
      inputProps={{ id: 'states-autocomplete', placeholder: 'Type a city' }}
      wrapperStyle={{ position: 'relative', display: 'inline-block' }}
      items={getStates(searchCity.searchCity)}
      getItemValue={item => `${item.city}, ${item.country}`}
      shouldItemRender={matchStateToTerm}
      sortItems={sortStates}
      onChange={(event, value) => dispatch(setSearchInput(value))}
      onSelect={value => dispatch(setSearchInput(value))}
      openOnFocus={false}
      renderMenu={(items, value) => (

        <div className="menu">
          {value === '' ? (
            <div className="item">Ej. New York</div>
          ) : items.length === 0 ? (
            <div className="item">
              No matches for
              { ` ${value}`}
            </div>
          ) : items}
        </div>

      )}
      renderItem={(item, isHighlighted) => (
        item.header
          ? (
            <div
              className="item item-header"
              key={item.header}
            >
              {item.header}
            </div>
          )
          : (
            <div
              className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
              key={item.id}
            >
              {`${item.city}, ${item.country} ` }
            </div>
          )
      )}
    />
  );
}

/*  useEffect(() => {
    dispatch(setSearchInput(searchCity.searchCity));
  }, [dispatch]); */

export default SearchInput;
