import React from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import Footer from "../components/Footer";

const TeacherDashboard = () => {
  return (
    <div>
      <ProfileNavbar ProfileNavbarTitle="" />
      <div className="grid grid-cols-3 ">
        <div className="col-span-2">
          <div className="flex flex-col justify-center items-center gap-4 py-10 ">
            <div className="w-3/4 bg-slate-100 px-10 py-4 flex justify-between items-center">
              <div>Student#1</div>
              <button className="bg-slate-300 px-6 py-2">Start</button>
            </div>
            <div className="w-3/4 bg-slate-100 px-10 py-4 flex justify-between items-center">
              <div>Student#1</div>
              <button className="bg-slate-300 px-6 py-2">Start</button>
            </div>
            <div className="w-3/4 bg-slate-100 px-10 py-4 flex justify-between items-center">
              <div>Student#1</div>
              <button className="bg-slate-300 px-6 py-2">Start</button>
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col justify-center items-center gap-4 py-10 ">
            <a href="/completedTasks" className="w-3/4 bg-slate-300 px-6 py-2">
              Create a Task
            </a>
            <a
              href="performanceRecord"
              className="w-3/4 bg-slate-300 px-6 py-2"
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
