import { useState } from 'react';


const useWordle = (solution) => {

    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    console.log("formatting the guess ...");
    let solutionArray = [...solution];
    let formatedGuess = [...currentGuess].map((letter) => {
      return {key: letter, color: 'grey'}
    });

    formatedGuess.forEach((l, i) => {
      if(solutionArray[i] === l.key) {
        formatedGuess[i].color = 'green';
        solutionArray[i] = null;
      }
    });

    formatedGuess.forEach((l, i) => {
      if(solutionArray.includes(l.key) && l.color !== 'green') {
        formatedGuess[i].color = 'yellow';
        solutionArray[solutionArray.indexOf(l.key)] = null;
      }
    });

    return formatedGuess;

  }

  const addNewGuess = () => {

  }

  const handleKeyup = ({ key }) => {

    if(key === 'Enter') {
      if(turn > 5 || history.includes(currentGuess) || currentGuess.length !== 5) return

      const formated = formatGuess();
      console.log(formated);
    }

    if(key === 'Backspace') {
      setCurrentGuess((prev) => { return prev.slice(0, -1) });
      return;
    }

    if(/^[A-Za-z]$/.test(key)) {
      if(currentGuess.length < 5) {
        setCurrentGuess((prev) => { return prev + key });
      }
    }
  }

  return { turn, currentGuess, guesses, isCorrect, handleKeyup }
}

export default useWordle;