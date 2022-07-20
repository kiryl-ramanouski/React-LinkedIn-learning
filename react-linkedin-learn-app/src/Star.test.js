import { render, screen } from '@testing-library/react';
import { Star } from './Star';

test('renders Cool Star text', () => {
  render(<Star />);
  expect(screen.getByText('Cool Star')).toBeInTheDocument();
});

test('renders an h1', () => {
  const { getByText } = render(<Star />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const h1 = getByText(/Cool Star/);
  expect(h1).toHaveTextContent('Cool Star');
});
