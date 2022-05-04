import React from 'react';
import Row from './Row';

const Grid = ({ currentGuess, guesses, turn }) => {

    let formatedGuess = new Array(5).fill({ key: '', color: 'white' });
    
    for(let i = 0; i < currentGuess.length; i++) {
        formatedGuess[i] = { key: currentGuess[i], color: 'white' };
    } 

  return (
    <div>
        {guesses.map((g, i) => {
            return <Row key={i} guess={i === turn ? formatedGuess: g} />
        })}
    </div>
  )
}

export default Grid;