import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders user search form', () => {
  const { getByText } = render(<App />);
  const title = getByText(/GitHub User Search/i);
  expect(title).toBeInTheDocument();
});

