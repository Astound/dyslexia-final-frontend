import React, { useState, useEffect } from "react";
import ProfileNavbar from "../components/ProfileNavbar";
import Footer from "../components/Footer";

const AdminDashboard = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch("http://localhost:5000/user");
        const data = await response.json();
        // console.log(data);
        setStudents(data);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchTeachers = async () => {
      try {
        const response = await fetch("http://localhost:5000/teacher");
        const data = await response.json();
        // console.log(data);
        setTeachers(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchStudents();
    fetchTeachers();
  }, []);

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  const deleteTeacher = (id) => {
    setTeachers(teachers.filter((teacher) => teacher.id !== id));
  };

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  const addTeacher = (teacher) => {
    setTeachers([...teachers, teacher]);
  };

  return (
    <>
      <ProfileNavbar />
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h1 className="text-xl font-bold mb-4">Students</h1>
            <table className="w-full bg-white shadow-md rounded mb-4">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Class</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {students.map((student) => (
                  <tr key={student._id}>
                    <td className="py-2 px-4">{student.firstName}</td>
                    <td className="py-2 px-4">{student.class}</td>
                    <td className="py-2 px-4">
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => deleteStudent(student._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h1 className="text-xl font-bold mb-4">Teachers</h1>
            <table className="w-full bg-white shadow-md rounded mb-4">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                {teachers.map((teacher) => (
                  <tr key={teacher._id}>
                    <td className="py-2 px-4">{teacher.firstName}</td>
                    <td className="py-2 px-4">
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => deleteTeacher(teacher._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default AdminDashboard;
