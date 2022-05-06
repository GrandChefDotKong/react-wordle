import React from 'react';

function Row({ guess, turn }) {
  
    if(guess) {
        return (
            <div className={turn ? "row current" : "row past"}>
                {guess.map((l, i) => (
                    <div className={l.key !== '' && turn ? "filled" : l.color } key={i}>{ l.key }</div>
                ))}
            </div>
        )
    }
  
    return (
    <div className="row">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
  )
}

export default Row;