import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
//import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import App from './App';
import rootReducer from './reducers/index';


// const deafultTours = [
//  { title: 'Tour 1' },
//  { title: 'Tour 2' },
//  { title: 'Tour 3' },
//  { title: 'Tour 4' },
//  { title: 'Tour 5' },
//  { title: 'Tour 6' },
// ];

// const deafaultFilter = 'All';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
