import React from "react";

const LoginPage = () => {
  return (
    <>
      <div className="h-screen grid place-content-center">
        <div className="grid grid-cols-1 gap-10 w-full">
          <input
            className="w-30 border-4 px-7 py-5 "
            placeholder="Email Address"
            type="email"
            id="emailId"
            required
          />
          <input
            className="w-30 border-4 px-7 py-5 "
            placeholder="Password"
            type="password"
            id="password"
            required
          />
        </div>
        <div className="grid place-content-center mt-16">
          <button className="bg-blue-200 w-30 px-10 py-2"> Log In</button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
