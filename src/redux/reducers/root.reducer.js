import { combineReducers } from 'redux';
import incrementReducer from './increment.reducer';
import mealsReducer from './meals.reducer';

export default combineReducers({
  incrementStore: incrementReducer,
  mealsStore: mealsReducer,
});
