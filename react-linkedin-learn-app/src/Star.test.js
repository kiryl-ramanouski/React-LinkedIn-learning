import { render, screen } from '@testing-library/react';
import { Star } from './Star';

test('renders an h1', () => {
  render(<Star />);
  expect(screen.getByText('Cool Star')).toBeInTheDocument();
});
