import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './reducers/index';
import { fetchTours } from './actions/index';

const deafultTours = [
  { title: 'Tour 1' },
  { title: 'Tour 2' },
  { title: 'Tour 3' },
  { title: 'Tour 4' },
  { title: 'Tour 5' },
  { title: 'Tour 6' },
];

const deafaultFilter = 'All';

const store = createStore(
  rootReducer,
  compose(
    composeWithDevTools(),
    applyMiddleware(thunk),
  ),
);
// store.dispatch(fetchTours());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
