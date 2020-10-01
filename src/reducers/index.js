import { combineReducers } from 'redux';
import toursReducer from './tours';
import filterReducer from './filter';

export default function rootReducer() {
  return combineReducers({
    toursReducer: toursReducer,
    filterReducer: filterReducer,
  });
}
