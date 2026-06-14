function QuestionNavigator({
  questions,
  currentQuestion,
  setCurrentQuestion,
  reviewQuestions,
}) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-6">
      {questions.map((q, index) => (
        <button
          key={q.id}
          onClick={() => setCurrentQuestion(index)}
          className={`w-10 h-10 rounded-md font-semibold ${
            currentQuestion === index
              ? "bg-blue-600 text-white"
              : reviewQuestions.includes(index)
              ? "bg-yellow-400 text-black"
              : "bg-gray-300"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}

export default QuestionNavigator;