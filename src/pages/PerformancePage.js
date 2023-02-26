import React from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import Footer from "../components/Footer";

const PerformanceReport = () => {
  return (
    <>
      <ProfileNavbar ProfileNavbarTitle="Performance Report" />

      <div className="flex flex-col justify-center items-center gap-4 py-10 ">
        <div className="w-3/4">
          <div className="bg-slate-100 px-10 py-4 flex justify-between items-center">
            <div>TaskName#1</div>
            <button className="bg-slate-300 px-6 py-2">Open</button>
          </div>
          <div className="hidden">Table comes here</div>
        </div>
        <div className="w-3/4">
          <div className="bg-slate-100 px-10 py-4 flex justify-between items-center">
            <div>TaskName#1</div>
            <button className="bg-slate-300 px-6 py-2">Open</button>
          </div>
          <div className="hidden">Table comes here</div>
        </div>
        <div className="w-3/4">
          <div className="bg-slate-100 px-10 py-4 flex justify-between items-center">
            <div>TaskName#1</div>
            <button className="bg-slate-300 px-6 py-2">Open</button>
          </div>
          <div className="hidden">Table comes here</div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PerformanceReport;
