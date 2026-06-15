import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ExamInstructions() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow max-w-lg">
        <h1 className="text-2xl font-bold mb-4">
          Instructions
        </h1>

        <ul className="list-disc pl-5 mb-4">
          <li>Read all questions carefully.</li>
          <li>Select one option.</li>
          <li>Review questions if needed.</li>
          <li>Submit before leaving.</li>
        </ul>

        <label className="flex gap-2 mb-4">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          I agree to the instructions
        </label>

        <button
          disabled={!checked}
          onClick={() => navigate("/exam")}
          className="bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          Start Exam
        </button>
      </div>
    </div>
  );
}

export default ExamInstructions;