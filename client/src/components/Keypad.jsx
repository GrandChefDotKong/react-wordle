import React, { useState, useEffect } from 'react';

const Keypad = ({ usedKeys }) => {
    
    const [letters, setLetters] = useState([]);

    useEffect(() => {
    fetch('https://wordle-clone-9v0i.onrender.com/letters')
        .then(res => res.json())
        .then((json) => {
            setLetters(json)
        });
    }, []);

  return (
    <div className="keypad">
        {letters && letters.map((l) => {
            const color = usedKeys[l.key];
            return (
                <div className={color} key={l.key}>
                    {l.key}
                </div>
            )
        })}
    </div>
  )
}

export default Keypad;