import './App.css';
import { useState, useEffect } from 'react';

const query = `
query {
  allLifts {
    name
    elevationGain
    status
  }
}
`;

const options = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query }),
};

function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>
        {elevationGain} {status}
      </p>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://snowtooth.moonhighway.com/', options).then((response) =>
      response
        .json()
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError)
    );
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <pre>{JSON.stringify(error)}</pre>;
  }
  if (!data) {
    return null;
  }
  return (
    <div>
      {data.data.allLifts.map((lift) => (
        <Lift {...lift} />
      ))}
    </div>
  );
}

export default App;
