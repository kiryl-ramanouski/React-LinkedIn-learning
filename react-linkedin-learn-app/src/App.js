import './App.css';
import { useState } from 'react';

// I can also use libraries for forms, such as
// formik.org;
// react-hook-form.com
// And there are a lot of useful hooks useHooks.com

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange: (e) => setValue(e.target.value),
    },
    () => setValue(initialValue),
  ];
}

function App() {
  const [titleProps, resetTitle] = useInput('');
  const [colorProps, resetColor] = useInput('#999999');
  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value} ${colorProps.value}`);
    resetTitle();
    resetColor();
  };
  return (
    <form onSubmit={submit}>
      <input {...titleProps} type='text' placeholder='color title...' />
      <input {...colorProps} type='color' />
      <button>Add</button>
    </form>
  );
}

export default App;
