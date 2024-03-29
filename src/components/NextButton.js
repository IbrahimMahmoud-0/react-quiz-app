import { useQuiz } from "../contexts/QuizContext";

function NextButton({ numQuestions }) {
  const { dispatch, answer, index } = useQuiz();
  const finalQuestion = index === numQuestions - 1;
  if (answer === null) return null;
  return (
    <button
      className="btn btn-ui "
      onClick={() =>
        dispatch({ type: finalQuestion ? "submitQuiz" : "nextQuestion" })
      }
    >
      {finalQuestion ? "Finish" : "Next"}
    </button>
  );
}

export default NextButton;
