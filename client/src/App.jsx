import './App.css';
import { useEffect, useState } from 'react';
import Wordle from './components/Wordle';

function App() {

  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/solutions')
      .then(res => res.json())
      .then(json => {
        const randomIndex = Math.floor(Math.random()*json.length);
        const randomSolution = json[randomIndex];
        setSolution(randomSolution.word);
      })
  }, [setSolution]);

  return (
    <div className="App">
      <h1>Wordle ! </h1>
      <h4>{ solution && <Wordle solution={solution} /> }</h4>
    </div>
  );
}

export default App
