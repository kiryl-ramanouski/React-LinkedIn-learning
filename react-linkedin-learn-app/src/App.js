import './App.css';
import { useState } from 'react';

function App() {
  const [emotion, setEmotion] = useState('happy');
  return (
    <div className='App'>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion('sad')}>Make me sad</button>
      <button onClick={() => setEmotion('excited')}>Make me excited</button>
    </div>
  );
}

export default App;
