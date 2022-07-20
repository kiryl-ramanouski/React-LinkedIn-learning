import { render, fireEvent, screen } from '@testing-library/react';
import { Checkbox } from './Checkbox';

// old test version
test('selecting checkbox should change value to true', () => {
  const { getByLabelText } = render(<Checkbox />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const checkbox = getByLabelText(/not checked/);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});

// modern test version
test('selecting checkbox should change value to true (modern test version)', () => {
  render(<Checkbox />);
  const checkbox = screen.getByLabelText(/not checked/);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
