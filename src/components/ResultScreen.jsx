function ResultScreen({ score, totalQuestions }) {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">
          Exam Completed 🎉
        </h1>

        <h2 className="text-xl font-semibold">
          Score: {score} / {totalQuestions}
        </h2>
      </div>
    </div>
  );
}

export default ResultScreen;