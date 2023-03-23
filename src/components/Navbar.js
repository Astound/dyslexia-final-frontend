import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-20 flex items-center bg-gray-800 px-4 sm:px-20 text-white">
      <div className="text-xl font-bold">Dyslexia Education Platform</div>
      <div className="ml-auto">
        <a href="/login" className="mr-6 hover:underline">
          Login
        </a>
        <a href="/register" className="mr-6 hover:underline">
          Sign Up
        </a>
        <a
          href="/about"
          className="bg-white text-gray-800 px-4 py-2 rounded-full hover:bg-gray-800 hover:text-white transition duration-300"
        >
          About Us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
