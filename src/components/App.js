import Header from "./Header.js";
import Main from "./Main.js";
import Loader from "./Loader.js";
import Error from "./Error.js";
import StartScreen from "./StartScreen.js";
import Question from "./Question.js";
import NextButton from "./NextButton.js";
import Progress from "./Progress.js";
import Finished from "./Finished.js";
import Timer from "./Timer.js";
import Footer from "./Footer.js";
import { useQuiz } from "../contexts/QuizContext.js";

export default function App() {
  const { questions, status, index } = useQuiz();

  const numQuestions = questions.length;
  const totalPoints = questions.reduce(
    (prevQ, currQ) => prevQ + currQ.points,
    0
  );

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen numQuestions={numQuestions} />}
        {status === "active" && (
          <>
            <Progress numQuestions={numQuestions} totalPoints={totalPoints} />
            <Question
              key={questions[index].id}
              question={questions[index]}
              numQuestions={numQuestions}
            />
            <Footer>
              <Timer />
              <NextButton numQuestions={numQuestions} />
            </Footer>
          </>
        )}
        {status === "finished" && <Finished totalPoints={totalPoints} />}
      </Main>
    </div>
  );
}
