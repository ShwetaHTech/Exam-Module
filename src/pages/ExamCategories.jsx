import {
  FaBrain,
  FaLaptopCode,
  FaUserTie,
  FaBookOpen,
  FaLanguage,
  FaCode,
} from "react-icons/fa";

const categories = [
  {
    title: "Aptitude Test",
    icon: <FaBrain size={40} />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Technical Test",
    icon: <FaLaptopCode size={40} />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Personality Test",
    icon: <FaUserTie size={40} />,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    title: "SST Exam",
    icon: <FaBookOpen size={40} />,
    gradient: "from-orange-500 to-red-500",
  },
  {
    title: "English Test",
    icon: <FaLanguage size={40} />,
    gradient: "from-indigo-500 to-blue-500",
  },
  {
    title: "Programming Test",
    icon: <FaCode size={40} />,
    gradient: "from-pink-500 to-rose-500",
  },
];

function ExamCategories() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700">
          Exam Categories
        </h1>

        <p className="text-gray-600 mt-2">
          Explore exams by category
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className={`bg-gradient-to-r ${category.gradient}
            text-white rounded-2xl p-8 shadow-lg
            hover:scale-105 hover:shadow-2xl
            transition-all duration-300 cursor-pointer`}
          >
            <div className="mb-4">{category.icon}</div>

            <h2 className="text-2xl font-bold">
              {category.title}
            </h2>

            <p className="mt-2 text-sm opacity-90">
              Click to explore available exams.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExamCategories;