import React from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import Footer from "../components/Footer";

const TaskPage = () => {
  return (
    <>
      <ProfileNavbar ProfileNavbarTitle="Perform Task" />

      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-8 px-8 py-10 taskSection">
          <div className="bg-gray-100 rounded-md p-8">
            <div className="font-bold text-lg mb-4">Display Section</div>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                className="border border-gray-300 rounded-md py-2 px-4 w-full"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded-md font-bold"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <button className="bg-blue-500 text-white py-4 px-8 rounded-md font-bold h-16 w-64">
              Start
            </button>
            <button className="bg-blue-500 text-white py-4 px-8 rounded-md font-bold h-16 w-64">
              Next word
            </button>
            <button className="bg-blue-500 text-white py-4 px-8 rounded-md font-bold h-16 w-64">
              Next round
            </button>
            <button className="bg-blue-500 text-white py-4 px-8 rounded-md font-bold h-16 w-64">
              Hint
            </button>
            <button className="bg-blue-500 text-white py-4 px-8 rounded-md font-bold h-16 w-64">
              Voiceover
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default TaskPage;
