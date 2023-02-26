import React from "react";

const ProfileNavbar = (props) => {
  return (
    <div className="w-full h-20 flex justify-between items-center bg-slate-300 px-20">
      <div>{props.ProfileNavbarTitle}</div>
      <div className="flex justify-around items-center gap-10">
        <a href="/dashboard">Dashboard</a>
        <a href="/profile">Profile</a>
        <a href="/logout"> Logout</a>
      </div>
    </div>
  );
};

export default ProfileNavbar;
