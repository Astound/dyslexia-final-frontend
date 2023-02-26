import React from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import Footer from "../components/Footer";

const TaskPage = () => {
  return (
    <>
      <ProfileNavbar ProfileNavbarTitle="Perform Task" />

      <div className="flex flex-col justify-center items-center gap-4 py-10 "></div>

      <Footer />
    </>
  );
};

export default TaskPage;
