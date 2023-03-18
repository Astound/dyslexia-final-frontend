import React from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import Footer from "../components/Footer";

const students = [
  { name: "Student#1", id: 1 },
  { name: "Student#2", id: 2 },
  { name: "Student#3", id: 3 },
];

const TeacherDashboard = () => {
  return (
    <div>
      <ProfileNavbar ProfileNavbarTitle="Hello John, Welcome to Dyslexia" />
      <div className="grid grid-cols-3 gap-4 px-8 py-10">
        <div className="col-span-2">
          <div className="flex flex-col gap-4">
            {students.map((student) => (
              <div
                key={student.id}
                className="bg-gray-100 px-6 py-4 flex justify-between items-center rounded-md border-2 border-gray-200"
              >
                <div className="font-bold text-lg">{student.name}</div>
                <button className="bg-blue-500 text-white py-2 px-6 rounded-md font-bold">
                  Start
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-4">
            <a
              href="/createTask"
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
