import { render, screen } from '@testing-library/react';
// import App from './App';
import CountryCards from './countries';
import React from "react";
test('renders learn react link', () => {
  render( <CountryCards />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
