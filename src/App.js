import { RegistrationPage } from "./pages/RegistrationPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import PerformanceReport from "./pages/PerformancePage";
import TaskPage from "./pages/TaskPage";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route exact path="/register" element={<RegistrationPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route
            exact
            path="/studentdashboard"
            element={<StudentDashboard />}
          />
          <Route
            exact
            path="/teacherdashboard"
            element={<TeacherDashboard />}
          />
          <Route exact path="/performtask" element={<TaskPage />} />
          <Route
            exact
            path="/performancereport"
            element={<PerformanceReport />}
          />
        </Routes>
      </Router>
    </>
  );
}
