import React from "react";

const Navbar = () => {
  return (
    <div
      className="w-full h-20 flex flex-col sm:flex-row justify-between items-center bg-slate-300 px-4 sm:px-20"
      style={{
        background: "#333",
        color: "#fff",
        fontSize: "1.2rem",
      }}
    >
      <div className="mb-4 sm:mb-0">Dyslexia</div>
      <div className="flex justify-around items-center gap-4 sm:gap-10">
        <a href="/dashboard">Dashboard</a>
        <a href="/profile">Profile</a>
        <a href="/logout">Logout</a>
      </div>
    </div>
  );
};

export default Navbar;
