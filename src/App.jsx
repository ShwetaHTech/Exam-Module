import { Routes, Route } from "react-router-dom";

import AvailableExams from "./pages/AvailableExams";
import ExamInstructions from "./pages/ExamInstructions";
import StartExam from "./pages/StartExam";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AvailableExams />} />

      <Route
        path="/instructions"
        element={<ExamInstructions />}
      />

      <Route
        path="/exam"
        element={<StartExam />}
      />
    </Routes>
  );
}

export default App;