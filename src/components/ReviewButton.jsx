function ReviewButton({
  currentQuestion,
  reviewQuestions,
  setReviewQuestions,
}) {
  return (
    <div className="text-center mb-6">
      <button
        onClick={() => {
          if (reviewQuestions.includes(currentQuestion)) {
            setReviewQuestions(
              reviewQuestions.filter(
                (q) => q !== currentQuestion
              )
            );
          } else {
            setReviewQuestions([
              ...reviewQuestions,
              currentQuestion,
            ]);
          }
        }}
        className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg font-medium"
      >
        {reviewQuestions.includes(currentQuestion)
          ? "Remove Review"
          : "Mark For Review"}
      </button>
    </div>
  );
}

export default ReviewButton;