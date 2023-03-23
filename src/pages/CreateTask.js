import React, { useState } from "react";
import Footer from "../components/Footer";
import ProfileNavbar from "../components/ProfileNavbar";

const CreateTask = () => {
  const [taskName, setTaskName] = useState("");
  const [numSentences, setNumSentences] = useState(0);
  const [sentences, setSentences] = useState([]);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const classes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleTaskNameChange = (e) => {
    setTaskName(e.target.value);
  };

  const handleSentenceChange = (e, index) => {
    const newSentences = [...sentences];
    newSentences[index] = e.target.value;
    setSentences(newSentences);
  };

  const handleAddSentence = () => {
    setSentences([...sentences, ""]);
  };

  const handleSelectedClassesChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setSelectedClasses(selectedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the task data, such as sending it to a server
    console.log({ taskName, sentences, selectedClasses });
  };

  return (
    <>
      <ProfileNavbar />
      <div className="grid grid-cols-3 gap-4 px-8 py-10">
        <div className="col-span-2">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <label className="font-bold text-lg" htmlFor="taskName">
                Task Name:
              </label>
              <input
                className="bg-gray-100 px-6 py-4 rounded-md border-2 border-gray-200"
                type="text"
                id="taskName"
                value={taskName}
                onChange={handleTaskNameChange}
              />
              {sentences.map((sentence, index) => (
                <div
                  key={index}
                  className="bg-gray-100 px-6 py-4 flex justify-between items-center rounded-md border-2 border-gray-200"
                >
                  <div className="font-bold text-lg">{`Sentence ${
                    index + 1
                  }`}</div>
                  <input
                    className="bg-gray-100 px-6 py-4 rounded-md border-2 border-gray-200"
                    type="text"
                    value={sentence}
                    onChange={(e) => handleSentenceChange(e, index)}
                  />
                </div>
              ))}
              <button
                className="bg-blue-500 text-white py-2 px-6 rounded-md font-bold"
                type="button"
                onClick={handleAddSentence}
              >
                Add Sentence
              </button>
              <label className="font-bold text-lg" htmlFor="classSelect">
                Select Classes:
              </label>
              <select
                className="bg-gray-100 px-6 py-4 rounded-md border-2 border-gray-200"
                multiple={true}
                value={selectedClasses}
                onChange={handleSelectedClassesChange}
              >
                {classes.map((classNum) => (
                  <option key={classNum} value={classNum}>
                    {classNum}
                  </option>
                ))}
              </select>
              <button
                className="bg-blue-500 text-white py-2 px-6 rounded-md font-bold"
                type="submit"
              >
                Create Task
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-1">
          <div className="flex flex-col gap-4">
            <a
              href="/teacherdashboard"
              className="bg-blue-500 text-white py-2 px-6 rounded-md font-bold hover:bg-blue-600"
            >
              Back to Dashboard
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateTask;
