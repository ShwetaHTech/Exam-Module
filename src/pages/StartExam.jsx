import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import aptitudeQuestions from "../data/aptitudeQuestions";
import technicalQuestions from "../data/technicalQuestions";
import personalityQuestions from "../data/personalityQuestions";
import sstQuestions from "../data/sstQuestions";
import englishQuestions from "../data/englishQuestions";
import programmingQuestions from "../data/programmingQuestions";
import exams from "../data/exams";

import QuestionCard from "../components/QuestionCard";
import QuestionNavigator from "../components/QuestionNavigator";
import ReviewButton from "../components/ReviewButton";
import ResultScreen from "../components/ResultScreen";

function StartExam() {

const { id } = useParams();

const selectedExam = exams.find(
  (exam) => exam.id === Number(id)
);

let questions = [];

if (selectedExam?.category === "Aptitude Test") {
  questions = aptitudeQuestions;
}

if (selectedExam?.category === "Technical Test") {
  questions = technicalQuestions;
}

if (selectedExam?.category === "Personality Test") {
  questions = personalityQuestions;
}

if (selectedExam?.category === "SST Exam") {
  questions = sstQuestions;
}

if (selectedExam?.category === "English Test") {
  questions = englishQuestions;
}

if (selectedExam?.category === "Programming Test") {
  questions = programmingQuestions;
}

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [reviewQuestions, setReviewQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60 * 60);

  // Auto Save Answers
  useEffect(() => {
    localStorage.setItem("examAnswers", JSON.stringify(answers));
  }, [answers]);

  // Submit Function
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

  // Timer
  useEffect(() => {
    if (showResult) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [showResult]);

  const handleFinalSubmit = () => {
    const confirmSubmit = window.confirm(
      "Are you sure you want to submit the exam?"
    );

    if (confirmSubmit) {
      handleSubmit();
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;
const answeredCount = Object.keys(answers).length;

const reviewCount = reviewQuestions.length;

const remainingCount = questions.filter(
  (_, index) =>
    !answers[index] &&
    !reviewQuestions.includes(index)
).length;
  if (showResult) {
    return (
      <ResultScreen
        score={score}
        totalQuestions={questions.length}
      />
    );
  }



  return (
    <div className="min-h-screen bg-gray-100 p-3 sm:p-6">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white shadow-md rounded-xl p-4 mb-4">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-lg text-blue-700">
            SMART SCHOLAR TEST
          </h2>

          <div className="bg-red-100 text-red-600 font-bold px-4 py-2 rounded-lg">
            ⏰ {minutes}:{seconds.toString().padStart(2, "0")}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-sm mb-1">
            <span>
              Question {currentQuestion + 1} of{" "}
              {questions.length}
            </span>

            <span>{Math.round(progress)}%</span>
          </div>

          <div className="w-full bg-gray-300 rounded-full h-3">
            <div
              className="bg-blue-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Exam Card */}
      <div className="bg-white shadow-xl rounded-xl p-4 sm:p-6 md:p-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

  {/* Left Side */}
  <div className="lg:col-span-3">

    <QuestionCard
      currentQuestion={currentQuestion}
      questions={questions}
      answers={answers}
      setAnswers={setAnswers}
    />

    <ReviewButton
      currentQuestion={currentQuestion}
      reviewQuestions={reviewQuestions}
      setReviewQuestions={setReviewQuestions}
    />

  </div>

  {/* Right Sidebar */}
  <div className="lg:col-span-1">

    <div className="bg-gray-50 border rounded-xl p-4 shadow-md sticky top-32">

      <h3 className="text-lg font-bold text-blue-700 mb-4">
        Exam Summary
      </h3>

      <div className="space-y-3 mb-5">

        <div className="flex justify-between">
          <span>Total Questions</span>
          <span className="font-bold">
            {questions.length}
          </span>
        </div>

        <div className="flex justify-between text-green-600">
          <span>Answered</span>
          <span className="font-bold">
            {answeredCount}
          </span>
        </div>

        <div className="flex justify-between text-yellow-500">
          <span>Review</span>
          <span className="font-bold">
            {reviewCount}
          </span>
        </div>

        <div className="flex justify-between text-gray-600">
          <span>Remaining</span>
          <span className="font-bold">
            {remainingCount}
          </span>
        </div>

      </div>

      <QuestionNavigator
        questions={questions}
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        reviewQuestions={reviewQuestions}
        answers={answers}
      />

    </div>

  </div>

</div>

        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6">
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
              onClick={handleFinalSubmit}
              className="w-full sm:w-auto bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
            >
              Submit Exam
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

export default StartExam;