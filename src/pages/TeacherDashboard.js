import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import TeacherNavbar from "../components/TeacherNavbar";
import { getAllTasks } from "../Api/ApiFunctions/TeacherFunctions";

const TeacherDashboard = () => {
  const [openTaskId, setOpenTaskId] = useState(null);

  const handleOpenTask = (taskId) => {
    setOpenTaskId(taskId);
  };

  const handleCloseTask = () => {
    setOpenTaskId(null);
  };

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks().then((res) => setTasks(res.data));
  }, []);
  return (
    <div>
      <TeacherNavbar />
      <div className="grid grid-cols-3 gap-4 px-8 py-10">
        <div className="col-span-2">
          <div className="flex flex-col gap-4">
            {tasks.map((task) => (
              <>
                {" "}
                <div
                  key={task._id}
                  className="bg-gray-100 px-6 py-4 flex justify-between items-center rounded-md border-2 border-gray-200"
                >
                  <div className="font-bold text-lg">{task.title}</div>
                  <button
                    className="bg-blue-500 text-white py-2 px-6 rounded-md font-bold"
                    onClick={() => handleOpenTask(task._id)}
                  >
                    Open
                  </button>
                </div>{" "}
                {openTaskId === task._id && (
                  <div className="bg-gray-100 px-6 py-4 rounded-md border-2 border-gray-200">
                    <div className="font-bold mb-2">Details:</div>
                    <div>
                      <span className="font-bold">Sentences:</span>{" "}
                      {task.sentences}
                    </div>
                    <div>
                      <span className="font-bold">Classes:</span> {task.classes}
                    </div>
                    <button
                      className="bg-blue-500 text-white py-2 px-6 rounded-md font-bold mt-4"
                      onClick={handleCloseTask}
                    >
                      Close
                    </button>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-4">
            <a
              href="/createtask"
              className="bg-blue-500 text-white py-2 px-6 rounded-md font-bold hover:bg-blue-600"
            >
              Create a Task
            </a>
            <a
              href="/inbox"
              className="bg-blue-500 text-white py-2 px-6 rounded-md font-bold hover:bg-blue-600"
            >
              Inbox (Messages)
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeacherDashboard;
