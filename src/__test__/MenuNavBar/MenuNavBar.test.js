import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import MenuNavBar from '../../components/MenuNavBar';

afterEach(cleanup);

it('renders MenuNavBar without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Route>
        <MenuNavBar />
      </Route>
    </Router>,
    div,
  );
});

it('renders item correctly', () => {
  const { getByTestId } = render(
    <Router>
      <Route>
        <MenuNavBar />
      </Route>
    </Router>,
  );
  getByTestId('MenuNavBar');
});

it('render ItemTour information', () => {
  const { getByTestId } = render(
    <Router>
      <Route>
        <MenuNavBar />
      </Route>
    </Router>,
  );
  expect(getByTestId('MenuNavBar')).toHaveTextContent('ADVENTURES');
  expect(getByTestId('MenuNavBar')).toHaveTextContent('MUSEUMS');
});

it('machets snapshot MenuNavBar', () => {
  const itemTour = renderer.create(
    <Router>
      <Route>
        <MenuNavBar />
      </Route>
    </Router>,
  ).toJSON();
  expect(itemTour).toMatchSnapshot();
});
