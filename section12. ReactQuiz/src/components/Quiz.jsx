import { useState } from "react";
import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  function handleSelectAnswer(answer) {
    setUserAnswers((prev) => {
      return [...prev, answer];
    });
  }

  if (quizIsComplete) {
    return (
      <>
        <div id="summary">
          <img src={quizCompleteImg} alt="" />
          <h2>Quiz Completed!</h2>
        </div>
      </>
    );
  }
  const shuffledAnswers = QUESTIONS[activeQuestionIndex].answers;
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div id="question">
        <p>{QUESTIONS[activeQuestionIndex].text}</p>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button
                onClick={() => {
                  handleSelectAnswer(answer);
                }}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
