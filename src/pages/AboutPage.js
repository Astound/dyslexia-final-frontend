import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg mb-4">
            Our Dyslexia Education platform is dedicated to helping students
            with dyslexia improve their reading and learning skills through
            engaging assignments and activities. We understand the unique
            challenges faced by dyslexic students and have tailored our program
            to provide the support and resources they need to succeed.
          </p>
          <p className="text-lg mb-4">
            Our team of experienced educators and designers work together to
            create a fun and interactive learning environment that promotes
            creativity and critical thinking. We believe that every student has
            the potential to excel and we are committed to helping them achieve
            their goals.
          </p>
          <p className="text-lg">
            Whether you're a student, parent, or educator, we invite you to join
            us on this journey to promote dyslexia awareness and empower
            dyslexic learners. Thank you for choosing our platform and we look
            forward to serving you.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
