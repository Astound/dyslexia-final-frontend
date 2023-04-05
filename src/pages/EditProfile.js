import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import ProfileNavbar from "../components/ProfileNavbar";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    class: "",
  });
  const navigate = useNavigate();
  const User = useSelector((state) => state.User);
  const { userId } = User;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/user/${userId}`);
        const data = await response.json();
        data.dob = new Date(data.dob).toLocaleDateString("en-CA");
        console.log(data);
        setFormData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, [userId]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/user/update/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();
      console.log(data);
      toast.success("User updated successfully!");
      navigate("/studentdashboard");
    } catch (error) {
      console.error(error);
    }
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
                type="email"
                name="email"
                placeholder="Email Address"
                className="border border-gray-400 p-2 rounded-md w-full"
                value={formData.email}
                onChange={handleInputChange}
                disabled
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
                value={formData.class}
                onChange={handleInputChange}
                disabled
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
