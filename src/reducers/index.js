import { combineReducers } from 'redux';
import toursReducer from './tours';
import filterReducer from './filter';

export default function rootReducer({ tours, filter }) {
  return combineReducers({
    toursReducer: toursReducer(tours),
    filterReducer: filterReducer(filter),
  });
}
