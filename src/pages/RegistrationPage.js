import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const client = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + "/user/register/",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    client
      .post("", {
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

  const inputFields = [
    ["text", "firstName", "First Name", formData.firstName],
    ["text", "lastName", "Last Name", formData.lastName],
    ["date", "dob", "Date Of Birth", formData.dob],
    ["text", "studentClass", "Class", formData.studentClass],
    ["email", "emailId", "Email Address", formData.emailId],
    ["password", "password", "Password", formData.password],
    ["password", "cnfPassword", "Confirm Password", formData.cnfPassword],
  ];

  return (
    <>
      <Navbar />

      <div className="h-screen grid grid-cols-2 bg-gray-200 place-items-center">
        <div className="p-8 bg-white shadow-md rounded-md">
          <h1 className="text-2xl font-bold mb-4">
            Dyslexia Education Platform
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque consectetur erat a libero vestibulum aliquam.
          </p>
          <p>
            Integer dignissim lectus sed enim faucibus luctus. Mauris nec ipsum
            a felis ultricies tempor. Sed vel aliquet odio.
          </p>
          <p className="mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:underline">
              Login here
            </Link>
          </p>
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
              <button className="bg-blue-400 text-white py-2 px-4 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default RegistrationPage;
