import { useState, Refs, useRef } from "react";

export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);
  const timer= useRef();


  function handleClick() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
      setTimerStarted(false);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimeExpired(false);
    setTimerStarted(false);
  }

  return (
    <section id="timer">
      <h2 className="challenge">
        {title}
        {timeExpired && <p>Time's up!</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={!timerStarted ? handleClick : handleStop}>
            {timerStarted ? 'Stop' : 'Start'}Challenge
          </button>
        </p>
        <p className={timerStarted ? 'active' : undefined}>
          {timerStarted ? '초가 지나고있습니다' : '대기중...'}
          </p>
      </h2>
    </section>
  );
}
