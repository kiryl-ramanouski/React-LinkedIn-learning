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
  useEffect(() => {
    fetch('https://api.github.com/users/whitekvazar').then((response) =>
      response.json().then(setData)
    );
  }, []);
  if (data) {
    return <GithubUser {...data} />;
  }
  return <h1>No data</h1>;
}

export default App;
