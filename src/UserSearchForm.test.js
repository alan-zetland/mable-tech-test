import React from 'react';
import { render } from '@testing-library/react';
import UserSearchForm from './components/user-search-form.js';

test('renders user search form input', () => {
  const { getByPlaceholderText } = render(<UserSearchForm />);
  const formElement = getByPlaceholderText(/Enter Github user name/i);
  expect(formElement).toBeInTheDocument();
});
