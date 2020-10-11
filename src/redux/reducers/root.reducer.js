import { combineReducers } from 'redux';
import incrementReducer from './increment.reducer';
import mealsReducer from './meals.reducer';
import tokenReducer from './token.reducer';
import searchInputReducer from './searchInput.reducer';

export default combineReducers({
  incrementStore: incrementReducer,
  mealsStore: mealsReducer,
  tokenStore: tokenReducer,
  searchInputStore: searchInputReducer,
});
