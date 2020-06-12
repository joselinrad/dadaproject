import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('only two remote hole link ', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/openbsd/i);
  expect(linkElement).toBeInTheDocument();
});
