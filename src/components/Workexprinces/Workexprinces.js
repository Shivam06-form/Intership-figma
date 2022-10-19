import React from "react";
import { Link } from "react-router-dom";
import SideNavbar from "../Shared/SideNavbar";

const Workexprinces = () => {
  return (
    <div className="flex flex-row gap-36">
      <SideNavbar />
      <div className="mt-24 flex gap-20 w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={3}
          stroke="currentColor"
          className="border rounded-full text-white w-10 h-10 bg-error cursor-pointer"
          onClick={(e) => {
            window.history.back();
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
        <div className="w-full text-1xl">
          <h3 className="text-3xl font-bold">Add your Work exprince</h3>
          <form className="flex flex-col text-gray font-sans font-semibold mt-6 justify-between h-2/4">
            <div className="flex flex-col">
              <label>Job title</label>
              <input
                type="name"
                className="appearance-none border rounded-md p-1 w-56 border-stone-400"
              />
            </div>
            <div className="flex flex-col">
              <label>Name of the organization</label>
              <input
                type="name"
                className="appearance-none border rounded-md p-1 w-8/12 border-stone-400 "
              />
            </div>
            <div className="flex flex-col">
              <label>Location</label>
              <input
                type="address"
                className="appearance-none border rounded-md p-1 w-56 border-stone-400"
              />
            </div>

            <div className="flex flex-row justify-between w-4/6">
              <div className="flex flex-col">
                <label>Start Date</label>
                <input
                  type="date"
                  className="appearance-none border rounded-md p-1 w-56  border-stone-400"
                />
              </div>
              <div className="flex flex-col">
                <label>Start Date</label>
                <input
                  type="date"
                  className="appearance-none border rounded-md p-1 w-56  border-stone-400"
                />
              </div>
            </div>
          </form>
          <div className="mt-20 text-lg text-orange flex gap-1 font-bold text-error">
            <h1 className="text-xl">+</h1>
            <h1 className="underline cursor-pointer"> ADD EXPERIENCE</h1>
          </div>
          <div className="w-8/12 font-bold flex">
            <Link
              to="/"
              className="ml-auto border-red-500 border-2 text-error rounded-xl pl-4 pr-4"
            >
              next
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workexprinces;
