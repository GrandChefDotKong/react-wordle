import React from 'react';

function Row({ guess }) {
  
    if(guess) {
        return (
            <div className="row past">
                {guess.map((l, i) => (
                    <div className={l.color } key={i}>{ l.key }</div>
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