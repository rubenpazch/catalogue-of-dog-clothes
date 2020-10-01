import { createStore, applyMiddleware } from 'redux';
import { thunkMiddleware } from 'redux-thunk';
import axios from 'axios';

const initialState = {
  loading: false,
  tours: [],
  error: '',
};

const FETCH_TOURS_REQUEST = 'FETCH_TOURS_REQUEST';
const FETCH_TOURS_SUCCESS = 'FETCH_TOURS_SUCCESS';
const FETCH_TOURS_FAILURE = 'FETCH_TOURS_FAILURE';

const fetchToursRequest = () => ({
  type: FETCH_TOURS_REQUEST,
});

const fetchToursSuccess = tours => ({
  type: FETCH_TOURS_SUCCESS,
  payload: tours,
});

const fetchToursFailure = error => ({
  type: FETCH_TOURS_FAILURE,
  payload: error,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TOURS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_TOURS_SUCCESS:
      return {
        loading: false,
        tours: action.payload,
        error: '',
      };
    case FETCH_TOURS_FAILURE:
      return {
        loading: false,
        tours: [],
        error: action.payload,
      };
    default:
      break;
  }
};

const fetchTours = () => function (dispatch) {
  dispatch(fetchToursRequest());
  axios.get('')
    .then(response => {
      const tours = response.data;
      dispatch(fetchToursSuccess(tours));
    })
    .catch(error => {
      dispatch(fetchToursFailure(error.message));
    });
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => { console.log(store.getState()); });
store.dispatch(fetchTours());
