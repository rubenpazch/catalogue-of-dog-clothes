import '@testing-library/jest-dom';
import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ItemTour from '../components/ItemTour';
import { MemoryRouter } from 'react-router-dom';

test('shows each item tour', () => {
  const titleTour = 'Title test';
  const imgPath = 'https://media.tacdn.com/media/attractions-splice-spp-674x446/07/3c/16/fc.jpg';
  const amount = '12';
  const id = '123';
  // eslint-disable-next-line max-len
  render(<ItemTour titleTour={titleTour} imgPath={imgPath} amount={amount} id={id} />, { wrapper: MemoryRouter });
  expect(screen.queryByText(titleTour)).toBeTruthy();

  // the queries can accept a regex to make your selectors
  // more resilient to content tweaks and changes.
  // fireEvent.click(screen.getByLabelText(/show/i));

  // .toBeInTheDocument() is an assertion that comes from jest-dom
  // otherwise you could use .toBeDefined()
  // expect(screen.getByText(testMessage)).toBeInTheDocument();
});


