import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom/extend-expect';
import ItemFeatureTour from '../../components/ItemFeatureTour';

afterEach(cleanup);

it('renders ItemFeatureTour without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Router>
      <Route>
        <ItemFeatureTour image="img1" text="Don't need to make a plann we are always available" />
      </Route>
    </Router>,
    div,
  );
});

it('renders ItemFeatureTour correctly', () => {
  const { getByTestId } = render(
    <Router>
      <Route>
        <ItemFeatureTour image="img1" text="Don't need to make a plann we are always available" />
      </Route>
    </Router>,
  );
  getByTestId('ItemFeatureTour');
});

it('render ItemFeatureTour information', () => {
  const { getByTestId } = render(
    <Router>
      <Route>
        <ItemFeatureTour image="img1" text="Don't need to make a plann we are always available" />
      </Route>
    </Router>,
  );
  expect(getByTestId('ItemFeatureTour')).toHaveTextContent('Don\'t need to make a plann we are always available');
  expect(getByTestId('ItemFeatureTour')).toHaveTextContent('Don\'t need to make a plann we are always available');
});

// it('machets snapshot ItemFeatureTour', () => {
//   const ItemFeatureTour = renderer.create(
//     <Router>
//       <Route>
//         <ItemFeatureTour image="img1" text="Don't need to make a plann we are always available" />
//       </Route>
//     </Router>,
//   ).toJSON();
//   // expect(ItemFeatureTour).toMatchSnapshot();
// });
