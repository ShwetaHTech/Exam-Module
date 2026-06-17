import { Routes, Route } from "react-router-dom";

import AvailableExams from "./pages/AvailableExams";
import ExamInstructions from "./pages/ExamInstructions";
import StartExam from "./pages/StartExam";
import ExamCategories from "./pages/ExamCategories";
import ViewDetails from "./pages/ViewDetails";

function App() {
  return (
    <Routes>
  <Route path="/" element={<AvailableExams />} />

  <Route
    path="/available-exams"
    element={<AvailableExams />}
  />

  <Route
    path="/categories"
    element={<ExamCategories />}
  />

  {/* <Route
    path="/instructions"
    element={<ExamInstructions />}
  />

  <Route
    path="/exam"
    element={<StartExam />}
  /> */}

<Route
  path="/view-details/:id"
  element={<ViewDetails />}
/>

<Route
  path="/instructions/:id"
  element={<ExamInstructions />}
/>

<Route
  path="/exam/:id"
  element={<StartExam />}
/>



</Routes>
  );
}

export default App;