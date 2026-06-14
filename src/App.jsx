import { useState } from "react";
import questions from "./data/questions";
import QuestionCard from "./components/QuestionCard";
import QuestionNavigator from "./components/QuestionNavigator";
import ReviewButton from "./components/ReviewButton";
import ResultScreen from "./components/ResultScreen";
function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [reviewQuestions, setReviewQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    let totalScore = 0;

    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        totalScore++;
      }
    });

    setScore(totalScore);
    setShowResult(true);
  };

  if (showResult) {
  return (
    <ResultScreen
      score={score}
      totalQuestions={questions.length}
    />
  );
}
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-3 sm:p-6">
      <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 md:p-8 w-full max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-blue-700 mb-6">
          SMART SCHOLAR TEST
        </h1>

<QuestionCard
  currentQuestion={currentQuestion}
  questions={questions}
  answers={answers}
  setAnswers={setAnswers}
/>

       <QuestionNavigator
  questions={questions}
  currentQuestion={currentQuestion}
  setCurrentQuestion={setCurrentQuestion}
  reviewQuestions={reviewQuestions}
/>

        {/* Review Button */}

<ReviewButton
  currentQuestion={currentQuestion}
  reviewQuestions={reviewQuestions}
  setReviewQuestions={setReviewQuestions}
/>
        {/* Previous / Next / Submit */}
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <button
            onClick={() =>
              setCurrentQuestion(currentQuestion - 1)
            }
            disabled={currentQuestion === 0}
            className="w-full sm:w-auto bg-gray-500 text-white px-5 py-2 rounded-lg disabled:bg-gray-300"
          >
            Previous
          </button>

          {currentQuestion === questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="w-full sm:w-auto bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
            >
              Submit Test
            </button>
          ) : (
            <button
              onClick={() =>
                setCurrentQuestion(currentQuestion + 1)
              }
              className="w-full sm:w-auto bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;