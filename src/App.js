import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import StudentDashboard from "./pages/StudentDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import PerformanceReport from "./pages/PerformancePage";
import TaskPage from "./pages/TaskPage";
import RegistrationPage from "./pages/RegistrationPage";
import EditProfile from "./pages/EditProfile";
import AdminDashboard from "./pages/AdminDashboard";
import CreateTask from "./pages/CreateTask";

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
          <Route exact path="/performtask/:taskId" element={<TaskPage />} />
          <Route
            exact
            path="/performancereport"
            element={<PerformanceReport />}
          />
          <Route exact path="/editprofile" element={<EditProfile />} />
          <Route exact path="/admindashboard" element={<AdminDashboard />} />
          <Route exact path="/createtask" element={<CreateTask />} />
        </Routes>
      </Router>
    </>
  );
}
