import { useNavigate } from "react-router-dom";

function AvailableExams() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow">
        <h1 className="text-3xl font-bold mb-4">
          Available Exams
        </h1>

        <h2 className="text-xl mb-2">
          Smart Scholar Test
        </h2>

        <button
          onClick={() => navigate("/instructions")}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Start Exam
        </button>
      </div>
    </div>
  );
}

export default AvailableExams;