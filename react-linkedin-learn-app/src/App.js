import './App.css';

const [firstCity, secondCity, thurdCity] = ['Tokio', 'London', 'Minsk'];

function App({ library }) {
  return (
    <div className='App'>
      <h1>Hello from {library}!</h1>
    </div>
  );
}

export default App;
