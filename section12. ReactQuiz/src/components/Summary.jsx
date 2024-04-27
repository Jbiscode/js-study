import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null).length;
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  ).length;

  const skippedPercentage = Math.round(
    (skippedAnswers / userAnswers.length) * 100
  );
  const correctPercentage = Math.round(
    (correctAnswers / userAnswers.length) * 100
  );
  const wrongPercentage = 100 - skippedPercentage - correctPercentage;

  return (
    <>
      <div id="summary">
        <img src={quizCompleteImg} alt="" />
        <h2>Quiz Completed!</h2>
        <div id="summary-stats">
          <p>
            <span className="number">{skippedPercentage}%</span>
            <span className="text">skipped</span>
          </p>
          <p>
            <span className="number">{correctPercentage}%</span>
            <span className="text">answered correctly</span>
          </p>
          <p>
            <span className="number">{wrongPercentage}%</span>
            <span className="text">answered wrong</span>
          </p>
        </div>
        <ol>
          {userAnswers.map((answer, index) => {
            let answerCssClass = "user-answer";
            if (answer === null) {
              answerCssClass += " skipped";
            } else if (answer === QUESTIONS[index].answers[0]) {
              answerCssClass += " correct";
            } else if (answer !== null) {
              answerCssClass += " wrong";
            }

            return (
              <li key={index}>
                <h3>{index + 1}</h3>
                <p className="question">{QUESTIONS[index].text}</p>
                <p className={answerCssClass}>{answer ?? "답변스킵"}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
