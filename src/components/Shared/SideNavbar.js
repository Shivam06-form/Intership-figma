import React from "react";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  return (
    <div className="w-96 bg-error text-green h-screen text-center flex  flex-col">
      <div className="mx-auto  mt-10 flex flex-col ">
        <h3 className="text-2xl font-bold text-white bg-black  mb-10 p-2 font-sans ">
          <Link to="/"> XcitEducation</Link>
        </h3>
        <div className="flex flex-col justify-around h-96 text-2xl text-start text-white ">
          <Link to="/" className="hover:underline">
            PERSONAL DETIALS
          </Link>
          <Link className="hover:underline" to="/">
            EDUCATION
          </Link>
          <Link className="hover:underline underline" to="/Workexperience">
            WORK EXPERIENCE
          </Link>
          <Link className="hover:underline" to="/">
            CERTIFICATE
          </Link>
          <Link className="hover:underline" to="/">
            SKILLS
          </Link>
          <Link className="hover:underline" to="/">
            PROFILE LNKS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
