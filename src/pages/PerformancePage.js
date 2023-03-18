import React, { useState, useEffect } from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import Footer from "../components/Footer";
import axios from "axios";

const PerformanceReport = () => {
  const [showTable, setShowTable] = useState(false);
  const [selectedTask, setSelectedTask] = useState("");
  const [tableData, setTableData] = useState([]);

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/tasks").then((response) => {
      setTasks(response.data);
      // response.data.map((task) => console.log(task._id));
    });
  }, []);

  const handleOpenButtonClick = (taskName) => {
    setSelectedTask(taskName);
    setShowTable(true);
    // set the table data based on the selected task
    setTableData([
      {
        name: "Response time for each word",
        value: "10s",
      },
      {
        name: "Response time for each sentence",
        value: "30s",
      },
      {
        name: "Number of clicks on the hint button",
        value: "5",
      },
      {
        name: "Number of time audio help taken",
        value: "2",
      },
      {
        name: "Number of wrong input while reading",
        value: "3",
      },
      {
        name: "Number of wrong input while writing",
        value: "2",
      },
    ]);
  };

  return (
    <>
      <ProfileNavbar ProfileNavbarTitle="Performance Report" />

      <div className="flex flex-col justify-center items-center gap-4 py-10 sm:py-20">
        {tasks.map((task) => (
          <div key={task._id} className="w-full sm:w-3/4">
            <div className="bg-gray-100 border border-gray-200 px-4 sm:px-10 py-4 flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0 font-medium">{task.title}</div>
              <button
                className="bg-blue-500 text-white px-4 sm:px-6 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => handleOpenButtonClick(task.title)}
              >
                Open
              </button>
            </div>
            {showTable && selectedTask === task.title && (
              <div className="bg-white border border-gray-200 px-4 sm:px-10 py-4 mt-4">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-gray-500">
                      <th className="py-2">Metric</th>
                      <th className="py-2">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((data) => (
                      <tr key={data.name}>
                        <td className="py-2">{data.name}</td>
                        <td className="py-2">{data.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
};

export default PerformanceReport;
