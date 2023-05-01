import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const client = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

const RegistrationPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    studentClass: "",
    emailId: "",
    password: "",
    cnfPassword: "",
  });

  const inputFields = [
    ["text", "firstName", "First Name", formData.firstName],
    ["text", "lastName", "Last Name", formData.lastName],
    ["date", "dob", "Date Of Birth", formData.dob],
    ["text", "studentClass", "Class", formData.studentClass],
    ["email", "emailId", "Email Address", formData.emailId],
    ["password", "password", "Password", formData.password],
    ["password", "cnfPassword", "Confirm Password", formData.cnfPassword],
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    client
      .post("/user/register/", {
        firstName: formData.firstName,
        lastName: formData.lastName,
        dob: formData.dob,
        class: formData.studentClass,
        email: formData.emailId,
        password: formData.password,
      })
      .then((response) => {
        console.log("User Registered");
        navigate("/login");
      })
      .catch((error) => {
        console.log("Registration failed");
      });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };

  return (
    <>
      <Navbar />

      <div className="h-screen grid grid-cols-2 place-items-center bg-gray-100">
        <div className="w-full md:w-1/2  flex justify-center items-center">
          <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-800">
              What is Dyslexia?
            </h2>
            <p className="mt-4 text-gray-600">
              Dyslexia is a learning disorder that affects a person's ability to
              read, write, and spell. It is a neurological condition that is
              often inherited and can affect people of all ages and backgrounds.
              People with dyslexia may have difficulty with phonological
              processing, which makes it hard to associate sounds with letters
              and words. They may also struggle with decoding, which makes it
              hard to read fluently and comprehend what they are reading.
            </p>
            <h2 className="text-2xl font-bold text-gray-800 mt-8">
              How is Dyslexia Diagnosed?
            </h2>
            <p className="mt-4 text-gray-600">
              Dyslexia is typically diagnosed by a qualified professional, such
              as a neuropsychologist, educational psychologist, or
              speech-language pathologist. The diagnostic process may include a
              review of medical and developmental history, cognitive and
              academic assessments, and standardized tests. It is important to
              get a thorough evaluation to rule out other conditions that may
              have similar symptoms.
            </p>
          </div>
        </div>
        <div className="p-8 bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-bold mb-4">Registration Form</h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            {inputFields.map(([type, id, placeholder, value]) => (
              <input
                key={id}
                className="border-2 border-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder={placeholder}
                type={type}
                id={id}
                value={value}
                onChange={handleChange}
                required
              />
            ))}
            <div className="col-span-2 flex justify-center">
              <button className="w-full bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Register
              </button>
            </div>
            <p className="text-center ">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:underline">
                Login here
              </Link>
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RegistrationPage;
