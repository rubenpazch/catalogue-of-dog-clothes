import { combineReducers } from 'redux';
import tokenReducer from './token.reducer';
import searchInputReducer from './searchInput.reducer';
import toursReducer from './tours.reducer';
import alertReducer from './alert.reducer';
import tourDetailReducer from './tourdetail.reducer';

export default combineReducers({
  tokenStore: tokenReducer,
  searchInputStore: searchInputReducer,
  toursStore: toursReducer,
  alertStore: alertReducer,
  tourdetailStore: tourDetailReducer,
});
