import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App';
import rootReducer from './reducers/index';

const deafultTours = [
  { title: 'Tour 1' },
  { title: 'Tour 2' },
];

const deafaultFilter = 'All';

const store = createStore(
  rootReducer({
    tours: deafultTours,
    filter: deafaultFilter,
  }),
  composeWithDevTools(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
