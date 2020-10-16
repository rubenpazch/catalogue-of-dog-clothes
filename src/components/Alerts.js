import React from 'react';
import { useSelector } from 'react-redux';
import Alert from 'react-bootstrap/Alert';

function Alerts() {
  const { message, variant, show } = useSelector(state => state.alertStore);
  if (show) {
    return (
      <Alert key={variant} variant={variant}>
        {message}
      </Alert>
    );
  }

  return (
    <Alert key={variant} variant={variant} hidden>
      {message}
    </Alert>
  );
}

export default Alerts;
