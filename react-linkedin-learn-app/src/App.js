import './App.css';
import { useState, useEffect } from 'react';

function GithubUser({ name, location, avatar_url }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{location}</p>
      <img src={avatar_url} height={150} alt={name} />
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.github.com/users/whitekvazar').then((response) =>
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
  return <GithubUser {...data} />;
}

export default App;
