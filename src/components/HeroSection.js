import React from "react";
import { Link } from "react-router-dom";
const HeroSection = () => {
  return (
    <div
      className="bg-white py-20 flex flex-col justify-center items-center text-center"
      style={{ minHeight: "calc(100vh - 80px)" }}
    >
      <h1 className="text-4xl md:text-6xl text-gray-800 font-bold mb-4">
        Dyslexia Education for Students
      </h1>
      <p className="text-gray-800 text-lg md:text-xl max-w-2xl mb-8">
        Our platform provides interactive resources and tools to help dyslexic
        students learn to read, write, and succeed in their studies.
      </p>
      <Link
        to="/register"
        className="bg-gray-800 text-white py-2 px-6 rounded-full text-lg font-semibold hover:text-gray-800 hover:bg-white  transition duration-300"
      >
        Start Learning
      </Link>
    </div>
  );
};

export default HeroSection;
