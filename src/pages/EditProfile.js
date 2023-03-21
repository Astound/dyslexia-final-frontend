import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import ProfileNavbar from "../components/ProfileNavbar";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    studentClass: "",
    password: "",
  });

  useEffect(() => {
    const userId = fetch(`http://localhost:5000/user/63f7b62f1dbdf32aaa544c89`)
      .then((response) => response.json())
      .then((data) => setFormData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <ProfileNavbar />
      <div className="flex justify-center items-center  mt-20 overflow-x-hidden">
        <div className="bg-gray-100 p-8 rounded-md w-full max-w-md">
          <h1 className="text-3xl font-bold mb-8">Edit Profile</h1>
          <form onSubmit={handleSubmit}>
            <div className="mt-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="border border-gray-400 p-2 rounded-md w-full"
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="border border-gray-400 p-2 rounded-md w-full"
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-4">
              <input
                type="date"
                name="dob"
                placeholder="Date of Birth"
                className="border border-gray-400 p-2 rounded-md w-full"
                value={formData.dob}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-4">
              <input
                type="text"
                name="studentClass"
                placeholder="Student Class"
                className="border border-gray-400 p-2 rounded-md w-full"
                value={formData.studentClass}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-4">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="border border-gray-400 p-2 rounded-md w-full"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-6 rounded-md font-bold"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default EditProfile;
