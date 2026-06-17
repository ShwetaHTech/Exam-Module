import { useState } from "react";
import {useParams,  useNavigate } from "react-router-dom";

function ExamInstructions() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
const { id } = useParams();

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
{/* <button
  onClick={() => navigate(`/exam/${id}`)}
>
  Start Exam
</button> */}

<button
  disabled={!checked}
  onClick={() => navigate(`/exam/${id}`)}
  className={`px-5 py-2 rounded-lg text-white ${
    checked
      ? "bg-blue-600 hover:bg-blue-700"
      : "bg-gray-400 cursor-not-allowed"
  }`}
>
  Start Exam
</button>

      </div>
    </div>
  );
}

export default ExamInstructions;