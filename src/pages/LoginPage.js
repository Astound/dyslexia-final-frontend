import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const client = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL + "/user/login/",
});

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    client
      .post("/", { email, password })
      .then((response) => {
        console.log(response.data.userId);
        navigate("/studentdashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-wrap">
        <div className="w-full md:w-1/2 bg-gray-50 flex justify-center items-center">
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
        <div className="w-full md:w-1/2 bg-gray-50 flex justify-center items-center">
          <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md space-y-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Log In</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  className="w-full border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:border-blue-400"
                  placeholder="Email Address"
                  type="email"
                  id="emailId"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div>
                <input
                  className="w-full border border-gray-300 rounded-md py-3 px-4 text-gray-700 focus:outline-none focus:border-blue-400"
                  placeholder="Password"
                  type="password"
                  id="password"
                  required
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="remember-me"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-400 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div className="flex justify-center">
                <button className="bg-blue-500 hover:bg-blue-600 w-full md:w-auto py-3 px-6 rounded-md text-white font-bold">
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
