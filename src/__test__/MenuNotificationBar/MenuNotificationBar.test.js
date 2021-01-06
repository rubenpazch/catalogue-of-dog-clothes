import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import MenuNotificationBar from '../../components/MenuNotificationBar';

afterEach(cleanup);

it('renders MenuNavBar without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Route>
        <MenuNotificationBar />
      </Route>
    </Router>,
    div,
  );
});

it('renders item correctly', () => {
  const { getByTestId } = render(
    <Router>
      <Route>
        <MenuNotificationBar />
      </Route>
    </Router>,
  );
  getByTestId('MenuNotificationBar');
});

it('render ItemTour information', () => {
  const { getByTestId } = render(
    <Router>
      <Route>
        <MenuNotificationBar />
      </Route>
    </Router>,
  );
  expect(getByTestId('MenuNotificationBar')).toHaveTextContent('Most Populars Places');
  expect(getByTestId('MenuNotificationBar')).toHaveTextContent('Last Time Trip');
  expect(getByTestId('MenuNotificationBar')).toHaveTextContent('Flexible Itinerary');
  expect(getByTestId('MenuNotificationBar')).toHaveTextContent('Deals');
});

it('machets snapshot MenuNavBar', () => {
  const itemTour = renderer.create(
    <Router>
      <Route>
        <MenuNotificationBar />
      </Route>
    </Router>,
  ).toJSON();
  expect(itemTour).toMatchSnapshot();
});
