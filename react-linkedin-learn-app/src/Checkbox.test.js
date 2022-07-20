import { render, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

test('selecting checkbox should change value to true', () => {
  const { getByLabelText } = render(<Checkbox />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const checkbox = getByLabelText(/not checked/);
  fireEvent.click(checkbox);
  expect(checkbox.checked).toEqual(true);
});
