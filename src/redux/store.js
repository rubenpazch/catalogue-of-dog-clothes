import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { loadingBarMiddleware } from 'react-redux-loading-bar';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/root.reducer';

const middleware = composeWithDevTools(
  applyMiddleware(thunk, loadingBarMiddleware()),
);

export default createStore(rootReducer, middleware);