function QuestionNavigator({
  questions,
  currentQuestion,
  setCurrentQuestion,
  reviewQuestions,
  answers,
}) {
  return (
    <div>
      <h4 className="font-semibold text-gray-700 mb-3">
        Question Palette
      </h4>

      {/* Compact Legend */}
      <div className="grid grid-cols-2 gap-2 text-xs mb-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-green-500 rounded"></span>
          <span>Answered</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-yellow-400 rounded"></span>
          <span>Review</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-gray-300 rounded"></span>
          <span>Not Answered</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-blue-600 rounded"></span>
          <span>Current</span>
        </div>
      </div>

      {/* Question Buttons */}
      <div className="grid grid-cols-5 gap-2">
        {questions.map((q, index) => {
          let buttonColor = "bg-gray-300";

          if (currentQuestion === index) {
            buttonColor = "bg-blue-600 text-white";
          } else if (reviewQuestions.includes(index)) {
            buttonColor = "bg-yellow-400 text-black";
          } else if (answers[index]) {
            buttonColor = "bg-green-500 text-white";
          }

          return (
            <button
              key={q.id}
              onClick={() => setCurrentQuestion(index)}
              className={`h-10 rounded-md font-semibold transition-all hover:scale-105 ${buttonColor}`}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionNavigator;