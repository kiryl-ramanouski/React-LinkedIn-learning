import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://api.github.com/users/whitekvazar').then((response) =>
      response.json().then(setData)
    );
  }, []);
  if (data) {
    return <pre>{JSON.stringify(data, null, 2)}</pre>;
  }
  return <h1>No data</h1>;
}

export default App;
