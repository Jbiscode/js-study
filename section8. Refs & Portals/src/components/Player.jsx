import { useState, useRef } from "react";
export default function Player() {
  const playetName = useRef();
  const[enteredPlayerName, setEnteredPlayerName] = useState('');

  function handleClick(){
    setEnteredPlayerName(playetName.current.value);
    playetName.current.value = '';
  }
  return (
    <section id="player">
      <h2 >Welcome {enteredPlayerName || 'unknown entity'}</h2>
      <p>
        <input ref={playetName} type="text"  />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
