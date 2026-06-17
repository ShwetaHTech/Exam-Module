import { useParams, useNavigate } from "react-router-dom";
import exams from "../data/exams";

function ViewDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const exam = exams.find(
    (exam) => exam.id === Number(id)
  );

  if (!exam) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-2xl font-bold">
          Exam Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-8">

        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          View Details
        </h1>

        <div className="space-y-3">
          <p>
            <strong>Exam Name:</strong> {exam.name}
          </p>

          <p>
            <strong>Category:</strong> {exam.category}
          </p>

          <p>
            <strong>Duration:</strong> {exam.duration}
          </p>

          <p>
            <strong>Total Questions:</strong> {exam.questions}
          </p>

          <p>
            <strong>Total Marks:</strong> {exam.marks}
          </p>

          <p>
            <strong>Difficulty:</strong> {exam.difficulty}
          </p>
        </div>

        <div className="mt-8 flex gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-5 py-2 border rounded-lg"
          >
            Back
          </button>

          <button
            onClick={() =>
  navigate(`/instructions/${exam.id}`)
}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Start Exam
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewDetails;