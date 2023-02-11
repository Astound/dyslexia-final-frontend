import React from "react";

export const RegistrationPage = () => {
  const inputFields = [
    ["text", "firstName", "First Name"],
    ["text", "lastName", "Last Name"],
    ["date", "dob", "Date Of Birth"],
    ["text", "studentClass", "Class"],
    ["email", "emailId", "Email Address"],
    ["text", "joiningCode", "Joining Code"],
    ["password", "password", "Password"],
    ["password", "cnfPassword", "Confirm Password"],
  ];

  return (
    <>
      <div className="h-screen grid place-content-center">
        <div className="grid grid-cols-2 gap-10 w-full">
          {inputFields.map(([type, id, placeholder]) => (
            <input
              className="w-30 border-4 px-7 py-5 "
              placeholder={placeholder}
              type={type}
              id={id}
              required
            />
          ))}
        </div>
        <div className="grid place-content-center mt-16">
          <button className="bg-blue-200 w-30 px-10 py-2"> Register</button>
        </div>
      </div>
    </>
  );
};
