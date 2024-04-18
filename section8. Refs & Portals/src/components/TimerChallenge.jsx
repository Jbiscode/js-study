import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timer = useRef();
  const dialog = useRef();
  const timeIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleClick() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime <= 0) {
          clearTimeout(timer.current);
          dialog.current.open();
          return 0;
        }
        return prevTime - 10;
      });
    }, 10);
  }

  function handleStop() {
    clearTimeout(timer.current);
    dialog.current.open();
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        result="실패"
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />
      <section id="timer">
        <h2 className="challenge">
          {title}
          <p className="challenge-time">
            {targetTime} second{targetTime > 1 ? "s" : ""}
          </p>
          <p>
            <button onClick={!timeIsActive ? handleClick : handleStop}>
              {timeIsActive ? "Stop" : "Start"}Challenge
            </button>
          </p>
          <p className={timeIsActive ? "active" : undefined}>
            {timeIsActive ? "초가 지나고있습니다" : "대기중..."}
          </p>
        </h2>
      </section>
    </>
  );
}
