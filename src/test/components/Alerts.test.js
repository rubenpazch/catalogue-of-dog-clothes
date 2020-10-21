import React from 'react';
import ReactDOM from 'react-dom';
import { isTSAnyKeyword } from '@babel/types';
import { useSelector } from 'react-redux';
import { iteratee } from 'lodash';
import Alerts from '../../components/Alerts';

it('renders without crashing', () => {
  const { message, variant, show } = useSelector(state => state.alertStore);
  const div = document.createElement('div');
  ReactDOM.render(<Alerts></Alerts>, div);
});
