import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-20 flex justify-between items-center bg-slate-300 px-20 fixed top-0">
      <div>Dyslexia</div>
      <div className="flex justify-around items-center gap-10">
        <a href="/">Home</a>
        <a href="/register">Register</a>
        <a href="/login"> Sign In</a>
        <a href="/contactus">Contact Us</a>
      </div>
    </div>
  );
};

export default Navbar;
