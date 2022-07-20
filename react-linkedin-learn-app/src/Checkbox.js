import { useReducer } from 'react';

export function Checkbox() {
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  return (
    <>
      <input
        id='checkbox'
        value={checked}
        onChange={setChecked}
        type='checkbox'
      />
      <label for='checkbox'>{checked ? 'checked' : 'not checked'}</label>
    </>
  );
}
