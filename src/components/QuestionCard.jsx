function QuestionCard({
  currentQuestion,
  questions,
  answers,
  setAnswers,
}) {
  return (
    <>
      <h2 className="text-lg sm:text-xl font-semibold text-center mb-4">
        Question {currentQuestion + 1} of {questions.length}
      </h2>

      <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-center mb-6">
        {questions[currentQuestion].question}
      </h3>

      <div className="space-y-3 mb-6">
        {questions[currentQuestion].options.map((option, index) => (
          <label
            key={index}
            className="flex items-center gap-3 border p-3 rounded-lg cursor-pointer hover:bg-gray-100"
          >
            <input
              type="radio"
              name={`question-${currentQuestion}`}
              value={option}
              checked={answers[currentQuestion] === option}
              onChange={(e) =>
                setAnswers({
                  ...answers,
                  [currentQuestion]: e.target.value,
                })
              }
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </>
  );
}

export default QuestionCard;