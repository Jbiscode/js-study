import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export default function Question({
  handleSkipAnswer,
  handleSelectAnswer,
  selectedAnswer,
  QuestionText,
  answers,
  answerState,
}) {
  return (
    <div id="question">
      <QuestionTimer timeout={10000} onTimeout={handleSkipAnswer} />
      <h2>{QuestionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={selectedAnswer}
        handleSelectAnswer={handleSelectAnswer}
        answerState={answerState}
      />
    </div>
  );
}
