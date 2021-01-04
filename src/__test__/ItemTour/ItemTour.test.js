import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import ItemTour from '../../components/ItemTour';
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

it('renders ItemTours without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Route>
        <ItemTour titleTour="Title" imgPath="path" amount="12" id="8" />
      </Route>
    </Router>,
    div,
  );
});

it('renders item correctly', () => {
  const { getByTestId } = render(
    <Router>
      <Route>
        <ItemTour titleTour="Title" imgPath="path" amount="12" id="8" />
      </Route>
    </Router>,
  );
  getByTestId('8');
});

it('render button information', () => {
  const { getByTestId } = render(
    <Router>
      <Route>
        <ItemTour titleTour="Title" imgPath="path" amount="12" id="8" />
      </Route>
    </Router>,
  );
  expect(getByTestId('8')).toHaveTextContent('Title');
  expect(getByTestId('8')).toHaveTextContent('12');
});

it('machets snapshot itemtour', () => {
  const itemTour = renderer.create(
    <Router>
      <Route>
        <ItemTour titleTour="Title" imgPath="path" amount="12" id="8" />
      </Route>
    </Router>,
  ).toJSON();
  expect(itemTour).toMatchSnapshot();
});
