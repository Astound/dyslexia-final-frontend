import React, { useState } from "react";
import Footer from "../components/Footer";
import TeacherNavbar from "../components/TeacherNavbar";

const tasks = [
  { name: "Task#1", sentences: 5, classes: "Class#1", id: 1 },
  { name: "Task#2", sentences: 7, classes: "Class#2", id: 2 },
  { name: "Task#3", sentences: 10, classes: "Class#3", id: 3 },
];

const TeacherDashboard = () => {
  const [openTaskId, setOpenTaskId] = useState(null);

  const handleOpenTask = (taskId) => {
    setOpenTaskId(taskId);
  };

  const handleCloseTask = () => {
    setOpenTaskId(null);
  };

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
                  key={task.id}
                  className="bg-gray-100 px-6 py-4 flex justify-between items-center rounded-md border-2 border-gray-200"
                >
                  <div className="font-bold text-lg">{task.name}</div>
                  <button
                    className="bg-blue-500 text-white py-2 px-6 rounded-md font-bold"
                    onClick={() => handleOpenTask(task.id)}
                  >
                    Open
                  </button>
                </div>{" "}
                {openTaskId === task.id && (
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
