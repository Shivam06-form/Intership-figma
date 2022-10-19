import React from "react";
import { Link } from "react-router-dom";
import employies from "../../images/employies.png";

const OptionsList = [
  {
    id: 1,
    Name: "Register",
    Detials: "Register as an employer and provide detials about the company",
  },
  {
    id: 2,
    Name: "Post a job",
    Detials:
      "Post jobs under different categories, add job description and requirements",
  },
  {
    id: 3,
    Name: "Hire candidates",
    Detials:
      "Review applications, conduct interviews and get the perfect candidate for the job",
  },
];

const HOme = () => {
  const renderWorkOptions = OptionsList.map((options) => (
    <div
      className="flex  flex-col h-46 m-auto text-center justify-between "
      key={options.id}
    >
      <h1 className="rounded-full w-10 h-10 w-fit mx-auto bg-error text-2xl text-white">
        {options.id}
      </h1>
      <b className="text-2xl">{options.Name}</b>
      <h5 className="w-56 mt-4">{options.Detials}</h5>
    </div>
  ));
  return (
    <div className="w-11/12 m-auto p-6">
      <div className="w-full  md:flex w-11/12 justify-between mx-auto flex-wrap">
        <div className="md:text-2xl p-2 font-bold text-white bg-black font-sans w-fit ">
          <Link to="/"> XcitEducation</Link>
        </div>
        <div className="my-auto flex justify-between w-56">
          <Link
            to="/"
            className="border border-red-600 rounded-3xl text-center px-3.5 py-1"
          >
            Register Now
          </Link>
          <Link to="/" className="text-red-600 font-bold p-2">
            Login
          </Link>
        </div>
      </div>

      <div className="flex w-full justify-between mt-16 flex-wrap">
        <div className="w-2/6"></div>
        <div className="text-4xl text-center mx-auto font-sans font-semibold border-b border-error p-4">
          Hire your ideal candidate now.
        </div>
      </div>
      <div className="md:flex flex-row w-full justify-between ">
        <img src={employies} alt="" className="m-auto  md:w-2/6" />
        <div className="w-full h-80 flex flex-col justify-between ">
          {" "}
          <div className="m-auto text-center text-slate-500 text-3xl ">
            How it work
          </div>
          <div className="flex flex-wrap my-auto flex-row justify-between">
            {renderWorkOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HOme;
