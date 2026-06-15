import { Routes, Route } from "react-router-dom";

import AvailableExams from "./pages/AvailableExams";
import ExamInstructions from "./pages/ExamInstructions";
import StartExam from "./pages/StartExam";
import ExamCategories from "./pages/ExamCategories";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AvailableExams />} />

      <Route
        path="/instructions"
        element={<ExamInstructions />}
      />

<Route
  path="/categories"
  element={<ExamCategories />}
/>

      <Route
        path="/exam"
        element={<StartExam />}
      />
    </Routes>
  );
}

export default App;