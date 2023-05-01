import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import ProfileNavbar from "../components/ProfileNavbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useSelector } from "react-redux";

const StudentDashboard = () => {
  const [tasks, setTasks] = useState([]);
  const User = useSelector((state) => state.User);
  const { userDetails } = User;

  useEffect(() => {
    axios.get("http://localhost:5000/tasks").then((response) => {
      setTasks(response.data);
    });
  }, []);

  return (
    <div>
      <ProfileNavbar />
      <div className="grid grid-cols-1 gap-4 px-8 py-10">
        <div className="col-span-2">
          <div className="flex flex-col gap-4">
            {tasks.map((task) => (
              // Display task only if the class matches the user's class

              <div
                key={task._id}
                className="bg-gray-100 px-6 py-4 flex justify-between items-center rounded-md border-2 border-gray-200"
              >
                <div className="font-bold text-lg">{task.title}</div>
                <Link
                  to={`/performtask/${task._id}`}
                  className="bg-blue-500 text-white py-2 px-6 rounded-md font-bold"
                >
                  Start
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StudentDashboard;
