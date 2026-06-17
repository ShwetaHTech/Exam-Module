import { useState } from "react";
import {
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import exams from "../data/exams";

function AvailableExams() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const categoryFromUrl =
    searchParams.get("category") || "All";

  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    "All",
    "Aptitude Test",
    "Technical Test",
    "Personality Test",
    "SST Exam",
    "English Test",
    "Programming Test",
  ];

  const selectedCategory = categoryFromUrl;

  const filteredExams = exams.filter((exam) => {
    const matchesSearch = exam.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "All"
        ? true
        : exam.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-4">
        Available Exams
      </h1>

      <div className="text-center mb-8">
        <button
          onClick={() => navigate("/categories")}
          className="bg-purple-600 text-white px-5 py-3 rounded-lg hover:bg-purple-700"
        >
          Browse Categories
        </button>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 mb-8">
        <input
          type="text"
          placeholder="Search Exams..."
          value={searchTerm}
          onChange={(e) =>
            setSearchTerm(e.target.value)
          }
          className="flex-1 border rounded-lg p-3"
        />

        <select
          value={selectedCategory}
          onChange={(e) =>
            navigate(
              `/available-exams?category=${encodeURIComponent(
                e.target.value
              )}`
            )
          }
          className="border rounded-lg p-3"
        >
          {categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExams.map((exam) => (
          <div
            key={exam.id}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <h2 className="text-xl font-bold text-blue-700">
              {exam.name}
            </h2>

            <p className="text-gray-600 mt-2">
              Category: {exam.category}
            </p>

            <div className="mt-4 space-y-1">
              <p>⏰ {exam.duration}</p>
              <p>❓ {exam.questions} Questions</p>
              <p>🏆 {exam.marks} Marks</p>
              <p>📈 {exam.difficulty}</p>
            </div>

            <div className="flex gap-2 mt-5">
             <button
  onClick={() =>
    navigate(`/view-details/${exam.id}`)
  }
  className="flex-1 border border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50"
>
  View Details
</button>

              <button
                onClick={() =>
                  navigate("/instructions")
                }
                className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
              >
                Start Exam
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredExams.length === 0 && (
        <div className="text-center mt-10 text-gray-500">
          No exams found.
        </div>
      )}
    </div>
  );
}

export default AvailableExams;