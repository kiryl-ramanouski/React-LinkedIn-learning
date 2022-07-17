import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [emotion, setEmotion] = useState('happy');
  const [secondEmo, setSecondEmo] = useState('tired');
  useEffect(() => console.log(`Emotion is ${emotion}`), [emotion, secondEmo]);
  useEffect(() => console.log(`Sec emo is ${secondEmo}`), [secondEmo]);

  return (
    <div className='App'>
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion('sad')}>Make me sad</button>
      <button onClick={() => setEmotion('excited')}>Make me excited</button>
      <h2>Secondary emotion is {secondEmo}</h2>
      <button onClick={() => setSecondEmo('grateful')}>Make me grateful</button>
      <button onClick={() => setSecondEmo('tired')}>Make me tired</button>
    </div>
  );
}

export default App;
